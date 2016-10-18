angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$ionicPopup) {
  // $scope.settings = {
  //   enableFriends: true
  // };
  $scope.data = {};

    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
    }
    $scope.showPopup = function() {
    $scope.data = {}

    // Custom popup
    var myPopup = $ionicPopup.show({
       template: '<input type = "text" ng-model = "data.model">',
       title: 'Title',
       subTitle: 'Subtitle',
       scope: $scope,

       buttons: [
          { text: 'Cancel' }, {
             text: '<b>Save</b>',
             type: 'button-positive',
                onTap: function(e) {

                   if (!$scope.data.model) {
                      //don't allow the user to close unless he enters model...
                         e.preventDefault();
                   } else {
                      return $scope.data.model;
                   }
                }
          }
       ]
    });

    myPopup.then(function(res) {
       console.log('Tapped!', res);
    });
 };
});
