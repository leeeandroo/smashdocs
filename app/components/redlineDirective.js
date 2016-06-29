angular.module('redlineDirective', [])
     .directive('section', section);


function section() {
    var directive = {
        link: link,
        templateUrl: 'templates/section.html',
        restrict: 'E',
        controller: RedLineController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    function link(scope, element, attrs, ctrl) {

        element[0].getElementsByClassName('content')[0].addEventListener('input', function() {
            ctrl.redlinedata.content = element[0].getElementsByClassName('content')[0].innerHTML;
        });

        contentElement = angular.element(element[0].getElementsByClassName('content'));
    }
}

