# Google Chrome Traffic Monitor Extension
Traffic Monitoring Extension for Google Chrome 

# Development
* First, open the `js/constants.js` file and replace the three values.
* * FROM_ADDR: Replace this with your start location.
* * TO_ADDR: Replace this with your target destination.
* * API_KEY: Replace this with your MapQuest API Key.

## Key Sensitivity
Since API Keys are inherently sensitive (as they can be used by others), they should not be checked into any public repositories.
If keys are "compromised" by being checked into a public repository, they should be revoked via the Google API Console and new keys should be generated.

## Loading into Chrome
* Go to chrome://extensions
* Click [x] Developer Mode
* Click "Load Unpacked Extension"
* Navigate to the directory where this repo is on your HDD
* Click "open"
* The extension is now loaded.  