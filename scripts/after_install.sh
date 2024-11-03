#!/bin/bash
cd /var/www/tcm-system

# Install dependencies
npm install

# Create environment file if not exists
if [ ! -f .env ]; then
    echo "PORT=3000" > .env
fi
