#!/bin/bash
set -e

# Create staging database using environment variables
# The staging database uses the same user as the production database
# It also uses the production database name + suffix _staging

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE ${POSTGRES_DB}_staging;
    
    -- Grant all privileges to the same user for the staging database
    GRANT ALL PRIVILEGES ON DATABASE ${POSTGRES_DB}_staging TO $POSTGRES_USER;
EOSQL

echo "Staging database created successfully!"