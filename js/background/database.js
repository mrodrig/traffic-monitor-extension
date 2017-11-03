/**
 * Created by: Michael Rodrigues
 * URL Whitelisting Database
 */

const interestUrlWhitelist = {
    banks: {
        bankOfAmerica: {
            name: 'Bank of America',
            urls: ['bankofamerica.com', 'bofa.com']
        }
    },
    socialMedia: {
        facebook: {
            name: 'Facebook',
            urls: ['facebook.com', 'messenger.com', 'fb.com']
        }
    },
    services: {
        apple: {
            name: 'Apple',
            urls: ['apple.com', 'mac.com', 'iphone.com']
        }
    }
};

// Publicly export the database
this.databases = {
    interests: interestUrlWhitelist
};

// Also, publicly export a flat version of the database (without category keys, ie. 'banks').
this.flattenedInterestDatabase = function () {
    return _.reduce(databases.interests, function (memo, subDoc) {
        var keys = _.keys(subDoc);

        _.each(keys, function (key) {
            memo[key] = subDoc[key];
        });

        return memo;
    });
};

/**
 *
 * @param receivedEmailsInThread
 * @returns {Promise} value provided to .then will be an object with
 */
this.createDbUserInterestsCombo = function () {
    var interestsDatabase = flattenedInterestDatabase();

    // Allow us to return the interests into the Promise chain despite the
    //   storage functions requiring a callback
    return new Promise(function (resolve, reject) {
        ui.retrieveInterests(function (data) {
            data.userInterests = data.userInterests ? data.userInterests : {};

            // Merge the user's selected interests with the database values
            _.each(data.userInterests, function (value, key) {
                interestsDatabase[key].userHoldsAccount = value;
            });

            // Returns the merged interests data and the thread emails
            return resolve(interestsDatabase);
        });
    });
};