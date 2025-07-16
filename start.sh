#!/bin/bash

# Start the backend server in the background
echo "Starting backend server..."
cd backend
npm install
node server.js &
BACKEND_PID=$!

# Give the backend a moment to start
sleep 2

# Open the frontend in the default browser
echo "Opening frontend in default browser..."
open http://localhost:3000

# Function to clean up on exit
cleanup() {
  echo "Shutting down backend server (PID: $BACKEND_PID)..."
  kill $BACKEND_PID
  exit 0
}

# Set up trap to catch script termination
trap cleanup SIGINT SIGTERM

# Keep the script running
wait $BACKEND_PID
