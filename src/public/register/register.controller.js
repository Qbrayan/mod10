(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['RegisterService'];
function RegisterController(RegisterService) {
  var $ctrl = this;
  $ctrl.status =false;
  $ctrl.message="";
  $ctrl.user ={
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    shortname:""
  };

  $ctrl.submit = function(){
     RegisterService.getMenuItem($ctrl.user.shortname).then(function(response){
      if(response == false){
        $ctrl.message ="No such menu number exists";
      }
      else{
        $ctrl.menuItem = 	response;
        $ctrl.message ="Your infomation has been saved";
        RegisterService.saveUser($ctrl.user,$ctrl.menuItem);
      }
    });
  };
}

})();
