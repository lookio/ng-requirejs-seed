define(['angular', 'services', 'jquery'], function(angular, services, $) {
	'use strict';

  /* Directives */

  angular.module('myApp.directives', ['myApp.services'])
      .directive('chatButton', [function(){
        return {
          restrict: 'E',
          replace: true,
          transclude: true,
          templateUrl: 'app/partials/chat-button.html',
          link: function(s, e, a){

            var  $chat    =  $(e)
              ,  $parent  =  $chat.parent()
              ,  account  =  $parent.data('account')
              ,  skill    =  $parent.data('skill');

            console.log(account);
            console.log(skill);

            if ( !LPMobile.getEnabled(account, skill)  ){
              console.log('disabled');
              $chat.hide()
            }else{
              console.log('enabled');
              $chat.on('click', function(){
                LPMobile.beginChat(account, skill);
              })
            }
          }
        }
  }]);
});
