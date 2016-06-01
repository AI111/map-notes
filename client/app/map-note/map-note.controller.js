'use strict';
(function(){
class DialogController{

}
class MapNoteComponent {
  constructor($http, $location,$mdDialog) {
    this.$location=$location;
    this.$http = $http;
    this.mapNotes = [];
    this.message = 'Hello';
    this.$mdDialog=$mdDialog
  }

  $onInit() {
    this.$http.get('/api/map-notes').then(response => {
      console.log("Response ",response.data);
      this.mapNotes = response.data;
    });
  }
  openNote(index){
   this.$location.path('/layer-edit/'+ this.mapNotes[index]._id);
  }
  addNote(ev) {
    this.$mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/map-note/map-note_add_dialog.html',
      parent: angular.element(document.body),
      clickOutsideToClose:true,
      targetEvent: ev,
    })
      .then(function(answer) {

      }, function() {

      });
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

}

angular.module('mapNotesApp')
  .component('mapNote', {
    templateUrl: 'app/map-note/map-note.html',
    controller: MapNoteComponent
  });

})();
