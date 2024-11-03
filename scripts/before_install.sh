#!/bin/bash
# Stop existing node servers
if pm2 list | grep -q "tcm-system"; then
    pm2 stop tcm-system
fi

# Clean installation directory
sudo rm -rf /var/www/tcm-system/*

# Install node.js dependencies
sudo apt-get update
sudo apt-get install -y nodejs npm
sudo npm install pm2 -g
