'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main',
    icon: '/assets/icons/ic_home_24px.svg'
  },
    {
      'title': 'Notes',
      'state': 'map-note',
      icon: '/assets/icons/ic_home_24px.svg'
    },
    {
      'title': 'Edit Map',
      'state': 'layer-edit',
      icon: '/assets/icons/ic_home_24px.svg'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('mapNotesApp')
  .controller('NavbarController', NavbarController);
