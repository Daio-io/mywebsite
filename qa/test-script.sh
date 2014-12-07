# ** This script is run from the package.json file using npm test **

#clean up all node running first
killall node
#Use forever to run node in the background npm install -g forever
NODE_ENV=test forever start index.js

gulp api-tests
gulp app-tests
#clean up to kill all node processes 
killall node