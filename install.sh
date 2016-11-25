#!/bin/bash
#!/bin/expect

# This script will let the user know what dependencies the user requires for
# this script to properly install the project, before installing the project.


clear                                                         # Clear terminal window.
echo 'Hi, $USER! Preparing website for launch...'
echo

# List of technologies / prereqs that are needed.
echo 'This project requires the following technologies installed:'
echo '-------------------------'
echo 'Node v5.0.0 ^'
echo 'NPM v3.3.6 ^'
echo 'MongoDB v2.6.10 ^'
echo
read -n1 -r -p "Press space to continue installation if you are ready:" key

if [ "$key" = '' ]; then
  # Space pressed, do something
  echo
  echo 'Running npm install...'                                 # Run npm install to install the majority of the project dependencies
  npm install

  echo 'Handling Cannot find module unicode/category/So issue'  # Run the /unicode/install.js script that was not run by npm to avoid errors
  node node_modules/unicode/install.js

  echo 'Running project! Use "node keystone" to execute the project.'
  # node keystone
  # Additional instructions here...
else
    # Anything else pressed, do whatever else.
    # echo [$key] not empty
    echo
    echo 'Goodbye.'
fi
