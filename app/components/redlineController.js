angular.module('redlineDirective')
    .controller('RedLineController', RedLineController);


RedLineController.$inject = ['$sce', 'dataservice'];

function RedLineController($sce, dataservice) {
    var vm = this;

    vm.redlinedata = {};

    vm.highlight = false;

    vm.redlinedata.content = '<del>deleted</del> <insacc>accepted</insacc> <ins>inserted</ins>';

    vm.sendToAPI = function(action) {
        dataservice.sendAction(action, vm.redlinedata.content);
    }

    vm.onFocusContent = function() {        
        vm.highlight = true;
    }

    vm.onBlurContent = function() {        
        console.log(vm.redlinedata.content);

        vm.highlight = false;
    }

    vm.onKeyUp = function(event) {
        console.log(event);


    }

    vm.redlinedata.html = $sce.trustAsHtml(vm.redlinedata.content);
}
