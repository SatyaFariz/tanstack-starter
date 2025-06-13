#!/bin/bash

# Configuration
DB_DIR="./db"
APP_DIR="."  # Adjust this to your app directory if different
DB_CONTAINER_NAME="livintech-postgres"
NETWORK_NAME="livintech"
VOLUME_NAME="livintech-data"
MAX_WAIT_TIME=60  # Maximum time to wait for DB in seconds
CHECK_INTERVAL=2  # Check every 2 seconds

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if container is running and healthy
is_db_ready() {
    # Check if container is running
    if ! docker ps --format "{{.Names}}" | grep -q "^${DB_CONTAINER_NAME}$"; then
        return 1
    fi
    
    # Check if PostgreSQL is accepting connections
    if docker exec "$DB_CONTAINER_NAME" pg_isready -U "${POSTGRES_USER:-postgres}" >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Function to create external resources if they don't exist
create_external_resources() {
    print_status "Checking external resources..."
    
    # Create external network if it doesn't exist
    if ! docker network ls --format "{{.Name}}" | grep -q "^${NETWORK_NAME}$"; then
        print_status "Creating external network: $NETWORK_NAME"
        docker network create "$NETWORK_NAME"
        if [ $? -ne 0 ]; then
            print_error "Failed to create network $NETWORK_NAME"
            exit 1
        fi
    else
        print_status "External network $NETWORK_NAME already exists"
    fi
    
    # Create external volume if it doesn't exist
    if ! docker volume ls --format "{{.Name}}" | grep -q "^${VOLUME_NAME}$"; then
        print_status "Creating external volume: $VOLUME_NAME"
        docker volume create "$VOLUME_NAME"
        if [ $? -ne 0 ]; then
            print_error "Failed to create volume $VOLUME_NAME"
            exit 1
        fi
    else
        print_status "External volume $VOLUME_NAME already exists"
    fi
}

# Function to start database service
start_database() {
    print_status "Starting database service..."
    
    if [ ! -d "$DB_DIR" ]; then
        print_error "Database directory $DB_DIR not found"
        exit 1
    fi
    
    cd "$DB_DIR" || exit 1
    
    # Check if DB is already running
    if is_db_ready; then
        print_status "Database is already running and ready"
        cd - >/dev/null
        return 0
    fi
    
    # Start the database service
    docker-compose up -d
    if [ $? -ne 0 ]; then
        print_error "Failed to start database service"
        cd - >/dev/null
        exit 1
    fi
    
    cd - >/dev/null
    print_status "Database service started, waiting for it to be ready..."
}

# Function to wait for database to be ready
wait_for_database() {
    local elapsed=0
    
    while [ $elapsed -lt $MAX_WAIT_TIME ]; do
        if is_db_ready; then
            print_status "Database is ready! (took ${elapsed}s)"
            return 0
        fi
        
        print_status "Waiting for database to be ready... (${elapsed}/${MAX_WAIT_TIME}s)"
        sleep $CHECK_INTERVAL
        elapsed=$((elapsed + CHECK_INTERVAL))
    done
    
    print_error "Database failed to become ready within ${MAX_WAIT_TIME} seconds"
    return 1
}

# Function to start app service
start_app() {
    print_status "Starting app service..."
    
    if [ ! -f "$APP_DIR/docker-compose.yml" ]; then
        print_error "App docker-compose.yml not found in $APP_DIR"
        exit 1
    fi
    
    cd "$APP_DIR" || exit 1
    
    docker-compose up -d
    if [ $? -ne 0 ]; then
        print_error "Failed to start app service"
        cd - >/dev/null
        exit 1
    fi
    
    cd - >/dev/null
    print_status "App service started successfully"
}

# Function to show running services
show_status() {
    print_status "Current service status:"
    echo ""
    echo "Database containers:"
    docker-compose -f "$DB_DIR/docker-compose.yml" ps
    echo ""
    echo "App containers:"
    docker-compose -f "$APP_DIR/docker-compose.yml" ps
}

# Function to handle cleanup on script exit
cleanup() {
    print_warning "Script interrupted. Services remain running."
    print_status "To stop services, run:"
    echo "  docker-compose -f $DB_DIR/docker-compose.yml down"
    echo "  docker-compose -f $APP_DIR/docker-compose.yml down"
}

# Set up trap for cleanup
trap cleanup INT TERM

# Main execution
main() {
    print_status "Starting Livintech services..."
    
    # Create external resources
    create_external_resources
    
    # Start database
    start_database
    
    # Wait for database to be ready
    if ! wait_for_database; then
        print_error "Database startup failed"
        exit 1
    fi
    
    # Start app service
    start_app
    
    # Show final status
    echo ""
    show_status
    
    print_status "All services started successfully!"
    print_status "Use 'docker-compose logs -f' in each directory to view logs"
}

# Check if required environment variables are set
if [ -z "$POSTGRES_DB" ] || [ -z "$POSTGRES_USER" ] || [ -z "$POSTGRES_PASSWORD" ]; then
    print_warning "PostgreSQL environment variables not detected."
    print_warning "Make sure to set POSTGRES_DB, POSTGRES_USER, and POSTGRES_PASSWORD"
    print_warning "You can create a .env file in the db directory with these variables"
fi

# Run main function
main