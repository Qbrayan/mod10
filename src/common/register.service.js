(function () {
"use strict";

angular.module('common')
.service('RegisterService', RegisterService);


RegisterService.$inject = ['$http', 'ApiPath'];
function RegisterService($http, ApiPath) {
  var service = this;
  service.saved = false;
  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var foundItems = response.data.menu_items;
        for (var i = 0; i < foundItems.length; i++) {
          if (foundItems[i].short_name == shortName) {
            return foundItems[i];
          }
        }
        return false;
    });
  };

  service.saveUser =function(user,item){
     service.user = user;
     service.menuItem = item;
     service.saved = true;
  };
  service.status =function(){
     return service.saved;
  };
  service.infoUser =function(){
     return [service.user,service.menuItem];
  };

}



})();
