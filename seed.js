/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var State = Promise.promisifyAll(mongoose.model('State'));
var Location = Promise.promisifyAll(mongoose.model('Location'));
var Activity = Promise.promisifyAll(mongoose.model('Activity'));
var Area = Promise.promisifyAll(mongoose.model('Area'));
var User = Promise.promisifyAll(mongoose.model('User'));
var Trail = Promise.promisifyAll(mongoose.model('Trail'));

var tempData = {};

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return User.createAsync(users);

};

var seedActivity = function() {
    var activities = [
        {
            name: 'Ski'
        },
        {
            name: 'Run'
        },
        {
            name: 'Bike'
        },
        {
            name: 'Hike'
        },
    ];
    return Activity.createAsync(activities);

};

var seedState = function() {
    var states = [
        {
            name: 'Alabama',
            abrv: 'AL'
        },
        {
            name: 'Arkansas',
            abrv: 'AK'
        },
        {
            name: 'Arizona',
            abrv: 'AZ'
        },
        {
            name: 'California',
            abrv: 'CA'
        },
        {
            name: 'Colorado',
            abrv: 'CO'
        },
        {
            name: 'Connecticut',
            abrv: 'CT'
        },
        {
            name: 'Delaware',
            abrv: 'DE'
        },
        {
            name: 'Florida',
            abrv: 'FL'
        },
        {
            name: 'Georgia',
            abrv: 'GA'
        },
        {
            name: 'Hawaii',
            abrv: 'HI'
        },
        {
            name: 'Idaho' ,
            abrv: 'ID'
        },
        {
            name: 'Illinois' ,
            abrv: 'IL'
        },
        {
            name: 'Indiana' ,
            abrv: 'IN'
        },
        {
            name: 'Iowa' ,
            abrv: 'IA'
        },
        {
            name: 'Kansas' ,
            abrv: 'KS'
        },
        {
            name: 'Kentucky' ,
            abrv: 'KY'
        },
        {
            name: 'Louisiana' ,
            abrv: 'LA'
        },
        {
            name: 'Maine' ,
            abrv: 'ME'
        },
        {
            name: 'Maryland',
            abrv: 'MD'
        },
        {
            name: 'Massachusetts',
            abrv: 'MA'
        },
        {
            name: 'Michigan',
            abrv: 'MI'
        },
        {
            name: 'Minnesota',
            abrv: 'MN'
        },
        {
            name: 'Missouri',
            abrv: 'MO'
        },
        {
            name: 'Mississippi',
            abrv: 'MS'
        },
        {
            name: 'Missouri',
            abrv: 'MO'
        },
        {
            name: 'Montana',
            abrv: 'MT'
        },
        {
            name: 'Nebraska',
            abrv: 'NE'
        },
        {
            name: 'Nevada',
            abrv: 'NV'
        },
        {
            name: 'New Hampshire',
            abrv: 'NH'
        },
        {
            name: 'New Jersey',
            abrv: 'NJ'
        },
        {
            name: 'New Mexico',
            abrv: 'NM'
        },
        {
            name: 'New York',
            abrv: 'NY'
        },
        {
            name: 'North Carolina',
            abrv: 'NC'
        },
        {
            name: 'North Dakota',
            abrv: 'ND'
        },
        {
            name: 'Ohio',
            abrv: 'OH'
        },
        {
            name: 'Oklahoma',
            abrv: 'OK'
        },
        {
            name: 'Oregon',
            abrv: 'OR'
        },
        {
            name: 'Pennsylvania',
            abrv: 'PA'
        },
        {
            name: 'Rhode Island',
            abrv: 'RI'
        },
        {
            name: 'South Carolina',
            abrv: 'SC'
        },
        {
            name: 'South Dakota',
            abrv: 'SD'
        },
        {
            name: 'Tennessee',
            abrv: 'TN'
        },
        {
            name: 'Texas',
            abrv: 'TX'
        },
        {
            name: 'Utah',
            abrv: 'UT'
        },
        {
            name: 'Vermont',
            abrv: 'VT'
        },
        {
            name: 'Virginia',
            abrv: 'VA'
        },
        {
            name: 'Washington',
            abrv: 'WA'
        },
        {
            name: 'West Virginia',
            abrv: 'WV'
        },
        {
            name: 'Wisconsin',
            abrv: 'WI'
        },
        {
            name: 'Wyoming',
            abrv: 'WY'
        }
    ];
    return State.createAsync(states);
};

var seedLocation = function(states) {
    var location = [
    {
        street: "24 St Andrews Place",
        city: "Brooklyn",
        state: states[31]._id,
        zip: "11216"
    },
    {
        street: "505 Franklin Ave",
        city: "Brooklyn",
        state: states[31]._id,
        zip: "11238"
    },
    {
        street: "5 Hanover Square",
        city: "New York",
        state: states[31]._id,
        zip: "10004"
    },
    {
        street: "64th St and 5th Ave",
        city: "New York",
        state: states[31]._id,
        zip: "10021"
    },
    {
        street: "207 Avenue A",
        city: "New York",
        state: states[31]._id,
        zip: "10009"
    },
    {
        street: "1720 Grape Ave",
        city: "Boulder",
        state: states[4]._id,
        zip: "80304"
    },
    {
        street: "71 Washington St",
        city: "Bloonfield",
        state: states[29]._id,
        zip: "07003"
    }
    ];
    return Location.createAsync(location);
};

var seedArea = function() {
    var areas = [
        {    
            name: 'Winter Park',
            activity: 'Ski',
            lat: '39.88', 
            lng: '-105.78' 
        },
        {    
            name: 'Eldora',
            activity: 'Ski',
            lat: '39.94', 
            lng: '-105.59' 
        },
        {    
            name: 'Aspen Mountain',
            activity: 'Ski',
            lat: '39.17', 
            lng: '-106.82' 
        },
        {    
            name: 'Crested Butte',
            activity: 'Ski',
            lat: '38.89', 
            lng: '-106.97' 
        },
        {    
            name: 'Silverton',
            activity: 'Ski',
            lat: ' 37.89', 
            lng: '-107.67' 
        },
        {
            name: 'Killington',
            activity: 'Ski',
            lat: '43.63', 
            lng: '-72.82' 
        },
    ];
    return Area.createAsync(areas);

};

connectToDb.then(function () {
    User.findAsync({}).then(function (users) {
        return seedUsers();
        // if (users.length === 0) {
        //     return seedUsers();
        // } else {
        //     console.log(chalk.magenta('Seems to already be user data, exiting!'));
        //     process.kill(0);
        // }
    })
    .then(function (users) {
        tempData.users = users;
        return seedState();
    }).then(function(states) {
        tempData.states = states;
        return seedLocation(tempData.states);
    })
    .then(function (states) {
        tempData.states = states;
        return seedActivity();
    }).then(function(activities) {
        tempData.activities = activities;
        return seedArea();
    })

    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});
