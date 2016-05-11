'use strict';
(function(){

class MapNoteComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('mapNotesApp')
  .component('mapNote', {
    templateUrl: 'app/map-note/map-note.html',
    controller: MapNoteComponent
  });

})();
