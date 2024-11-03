#!/bin/bash
cd /var/www/tcm-system

# Start application with PM2
pm2 start npm --name "tcm-system" -- start

# Save PM2 configuration
pm2 save

# Ensure application starts on reboot
pm2 startup
