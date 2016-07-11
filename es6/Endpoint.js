'use strict';

const rp = require('request-promise');
const Utils = require('./Utils');

module.exports = function Endpoint () {
    // constructor
    useStrict();

    var urlSegments = [];
    var values = {};
    // end constructor

    // functions for each type of parameter will be dynamically added here.

    function generateRequestUrl(urlSegments) {
        

        return requestUrl;
    }

    function generateRequestParameters() {

    }

    // will generate the request URL and send the request via a promise, then return the promise obj.
    function sendRequest() {
        var requestUrl = generateRequestUrl(urlSegments);
        var promise = rp(requestUrl);

        return promise;
    }
	
};
