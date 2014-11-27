# ** This script is run from the package.json file using npm test **

#Use forever to run node in the background npm install -g forever
forever start index.js
gulp unit-tests
#clean up to kill all node processes 
killall node