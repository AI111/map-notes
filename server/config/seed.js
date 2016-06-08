/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import MapNote from'../api/map-note/map-note.model';


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
