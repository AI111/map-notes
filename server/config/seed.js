/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import MapNote from'../api/map-note/map-note.model';
Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
      'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
      'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
      'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
      'tests alongside code. Automatic injection of scripts and ' +
      'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
      'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
      'payload, minifies your scripts/css/images, and rewrites asset ' +
      'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
      'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
      .then(() => {
        console.log('finished populating users');
      });
  });

MapNote.find({}).remove().then(()=>{
  MapNote.create(
  //   {
  //   name: 'name',
  //   info: 'info',
  //   active: true,
  //   latitude: 46.4690613,
  //   longtitude: 30.7430545,
  //   zoomLvl: 14,
  //   mapResource:"-",
  //   screenUrl: "https://leanpub.com/site_images/leaflet-tips-and-tricks/tiles-transport.png",
  // },
    {
    name: 'name',
    info: 'info',
    active: true,
    latitude: 46.4690613,
    longtitude: 30.7430545,
    zoomLvl: 14,
    mapResource:"-",
    screenUrl: "https://leanpub.com/site_images/leaflet-tips-and-tricks/tiles-transport.png",
    drawObjects:{
      type: "FeatureCollection",
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [
              47.109375,
              58.44773280389084
            ]
          }
        },
        {
          type: "Feature",
          properties: {
            'stroke': "#37348a",
            'stroke-width': 2.6,
            "stroke-opacity": 4
          },
          geometry: {
            type: "LineString",
            coordinates: [
              [
                41.8359375,
                47.754097979680026
              ],
              [
                23.90625,
                52.696361078274485
              ],
              [
                28.125,
                59.5343180010956
              ],
              [
                10.1953125,
                53.12040528310657
              ],
              [
                9.4921875,
                46.31658418182218
              ]
            ]
          }
        }
      ]
    }
  }).then(() => {
    console.log('finished populating map-notes');
  });
});
