'use strict';

angular.module('focoApp', [
  'focoApp.auth',
  'focoApp.admin',
  'focoApp.constants',
  'focoApp.reportar',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMap',
  'google.places',
  'ezfb',
  'naif.base64',
  'angucomplete-alt'
])
  .config(function($urlRouterProvider, $locationProvider, ezfbProvider) {
     ezfbProvider.setLocale('pt_BR');

     ezfbProvider.setInitParams({
   
      appId: '851921558250198',

      // Module default is `v2.4`.
      // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
      // https://developers.facebook.com/docs/javascript/reference/FB.init
      version: 'v2.5'
    });  

    $urlRouterProvider
      .otherwise('/lorena');

    $locationProvider.html5Mode(true);
  });
