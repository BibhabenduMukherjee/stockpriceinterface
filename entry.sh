#!/bin/bash

# Check if creatordata.cc exists in the init folder
if [ -f "init/creatordata.cc" ]; then
    echo "File creatordata.cc found in the init folder."

    # Compile and run creatordata.cc
    echo "Compiling and running creatordata.cc..."
    g++ init/creatordata.cc -o creatordata.out
    ./creatordata.out

    # Check if compilation and execution were successful
    if [ $? -eq 0 ]; then
        echo "Compilation and execution successful."

        # Run npm install
        echo "Running npm install..."
        npm install

        # Run npx convex dev
        echo "Running npx convex dev..."
        npx convex dev

        # Run yarn run dev
        echo "Running yarn run dev..."
        yarn run dev

    else
        echo "Error: Compilation or execution of creatordata.cc failed."
    fi
else
    echo "Error: File creatordata.cc not found in the init folder."
fi
