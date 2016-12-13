(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['RegisterService','ApiPath'];
function InfoController(RegisterService,ApiPath) {
  var $ctrl = this;
  $ctrl.basePath =ApiPath;
  $ctrl.saved =function(){
    if (RegisterService.status() == true){
        var data =RegisterService.infoUser();
        $ctrl.user = data[0];
        $ctrl.menuItem =data[1];
        return true;
    }
    else{
        return false;
    }
  };
  
}

})();