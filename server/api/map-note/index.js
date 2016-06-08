'use strict';

var express = require('express');
var controller = require('./map-note.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
app.post('/screen'controller.saveImg);
module.exports = router;
