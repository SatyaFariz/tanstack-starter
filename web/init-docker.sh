#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NETWORK_NAME="livintech"
VOLUME_NAME="livintech-data"

echo -e "${BLUE}🐳 Docker Infrastructure Setup${NC}"
echo "================================="

# Create external network if it doesn't exist
echo -e "\n${BLUE}📡 Checking Docker network: ${NETWORK_NAME}${NC}"
if docker network ls | grep -q "\b${NETWORK_NAME}\b"; then
    echo -e "${YELLOW}⚠️  Network '${NETWORK_NAME}' already exists${NC}"
else
    echo -e "Creating network '${NETWORK_NAME}'..."
    docker network create ${NETWORK_NAME}
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Network '${NETWORK_NAME}' created successfully${NC}"
    else
        echo -e "❌ Failed to create network '${NETWORK_NAME}'"
        exit 1
    fi
fi

# Create external volume if it doesn't exist
echo -e "\n${BLUE}💾 Checking Docker volume: ${VOLUME_NAME}${NC}"
if docker volume ls | grep -q "\b${VOLUME_NAME}\b"; then
    echo -e "${YELLOW}⚠️  Volume '${VOLUME_NAME}' already exists${NC}"
else
    echo -e "Creating volume '${VOLUME_NAME}'..."
    docker volume create ${VOLUME_NAME}
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Volume '${VOLUME_NAME}' created successfully${NC}"
    else
        echo -e "❌ Failed to create volume '${VOLUME_NAME}'"
        exit 1
    fi
fi

echo -e "\n${GREEN}🎉 Docker infrastructure setup complete!${NC}"
echo -e "${BLUE}📋 Summary:${NC}"
echo -e "   Network: ${NETWORK_NAME}"
echo -e "   Volume:  ${VOLUME_NAME}"
echo -e "\n${BLUE}💡 Next steps:${NC}"
echo -e "   Run: ${GREEN}bun db:dev${NC} to start your database"