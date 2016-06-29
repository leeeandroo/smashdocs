angular.module('redlineDirective')
    .factory('dataservice', dataservice);


dataservice.$inject = ['$http', '$log'];

function dataservice($http, $log) {
    return {
        sendAction: sendAction
    };


    function sendAction(action, content) {

    	var data = { "content": content };

    	return $http.post('https://testing.smashdocs.net/documents/12345/' + action, data)
            .then(getResponse)
            .catch(getFailed);

        function getResponse(response) {
        	$log.debug('Returned data for sendAction.' + response.data.results);
            return response.data.results;
        }

        function getFailed(error) {
            $log.error('XHR Failed for sendAction.' + error.data);
        }
    }
}
