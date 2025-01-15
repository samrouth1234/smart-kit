#!/bin/bash

# Ask the user if they want to add all changes or a specific file
read -p "Do you want to add all changes or add a specific file? (all/file): " choice

# Add all changes or a specific file based on the user's choice
if [ "$choice" = "all" ]; then
  git add .
elif [ "$choice" = "file" ]; then
  read -p "Please enter the file name: " file
  git add "$file"
else
  echo "Invalid choice. Please enter 'all' or 'file'."
  exit 1
fi

# Read the commit message from the user
read -p "Please enter a commit message: " message
git commit -m "$message"

# Push the changes to the remote repository
read -p "Please enter your branch name: " branch
git push origin "$branch"
