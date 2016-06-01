'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'map-notes-secret'
  },

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  google: {
    clientID:     process.env.GOOGLE_ID || '706386627126-0uv3el1d2tn35hn5hfmakedvacog10e6.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'Qoa-LozhWnOpQmTPXwFEEc2f',
    callbackURL:  (process.env.DOMAIN || '') +  '/auth/google/callback'
  },
  facebook: {
    clientID:     process.env.FACEBOOK_ID || '1640408799550875',
    clientSecret: process.env.FACEBOOK_SECRET || '18709684f89fa17e597e9e9324d45ab1',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },
  twitter: {
    clientID:     process.env.TWITTER_ID || 'rkgKRegJ9zaapxMo2QWib8yhT',
    clientSecret: process.env.TWITTER_SECRET || '9McrlEMK1O7yYsWt9sSk8zqszg6gD1YziD9rKencygTiY2358M',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./shared'),
  require('./' + process.env.NODE_ENV + '.js') || {});
