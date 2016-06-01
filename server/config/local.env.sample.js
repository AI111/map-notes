'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'mapnotes-secret',

  FACEBOOK_ID:      'app-id',
  FACEBOOK_SECRET:  'secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        '706386627126-0uv3el1d2tn35hn5hfmakedvacog10e6.apps.googleusercontent.com',
  GOOGLE_SECRET:    'Qoa-LozhWnOpQmTPXwFEEc2f',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
