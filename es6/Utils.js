'use strict';

var apiKey = '';

module.exports = {
	log: function(message) {
		console.error('CRIT:' + message);
	},

	clone: function(obj) {
		return JSON.parse(JSON.stringify(obj));
	},

	setApiKey: function(key) {
		apiKey = key;
	},

	getApiKey: function() {
		if(apiKey !== '') {
			return apiKey;
		} else {
			this.log('API key is not set');
			return null;
		}
    },

    generateEndpointRequestUrl: function(urlSegments) {
        var apiKey = this.getApiKey();

        var requestUrl = urlSegments[0]; // baseUrl
        requestUrl += '/' + urlSegments[1]; // schemaUrl
        requestUrl += '/' + urlSegments[2]; // endpointUrl
        requestUrl += '/' + urlSegments[3]; // apiVersion
        requestUrl += '?key=' + apiKey; // add apiKey

        return requestUrl;
    },

    generateRequestUrl: function(urlSegments, parameters) {
        var requestUrl = this.generateEndpointRequestUrl(urlSegments);

        var parameterNames = Object.keys(parameters);

        // append parameters as such: &<param_name>=<param_value>
        for (var i = 0; i < parameterNames.length; i++) {
            requestUrl += '&' + parameterNames[i] + '=' + parameters[parameterNames[i]];
        }

        return requestUrl;
    }
};
