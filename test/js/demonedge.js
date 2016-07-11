'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
    function ApiHandler() {
        _classCallCheck(this, ApiHandler);

        this.urlSegment = 'https://api.steampowered.com';

        this.schemas = [];
    }

    _createClass(ApiHandler, [{
        key: 'getRequestUrl',
        value: function getRequestUrl() {
            return this.urlSegment;
        }
    }, {
        key: 'getApi',
        value: function getApi() {
            return generateApi(this);
        }
    }, {
        key: 'getSchemas',
        value: function getSchemas() {
            return this.schemas;
        }
    }, {
        key: 'addSchema',
        value: function addSchema(schemaHandler) {
            this.schemas.push(schemaHandler);

            return this; // allow chaining
        }
    }, {
        key: 'addSchemas',
        value: function addSchemas(schemaHandlers) {
            for (var schemaIndex = 0; schemaIndex < schemaHandlers.length; schemaIndex++) {
                this.schemas.push(schemaHandlers[schemaIndex]);
            }

            return this; // allow chaining
        }
    }]);

    return ApiHandler;
})();

function generateApi(apiHandler) {
    useStrict();

    var api = {};
    var baseUrl = 'https://api.steampowered.com';
    api.getUrlSegments = function () {
        return baseUrl;
    };

    for (var schemaIndex = 0; schemaIndex < apiHandler.schemas.length; schemaIndex++) {
        api[apiHandler.schemas[schemaIndex].getName()] = apiHandler.schemas[schemaIndex].generateSchema(baseUrl);
    }

    return api;
}
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var Utils = require('./Utils');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');
var RequestHandler = require('./RequestHandler');

var steamWebApiVersion = 1;

module.exports = (function () {
    function DemonEdge() {
        _classCallCheck(this, DemonEdge);

        // please forgive me. this will probably all be hidden in a json file to be parsed eventually.
        this.api = new ApiHandler().addSchemas([new SchemaHandler('Fantasy', 'IDOTA2Fantasy_570').addEndpoints([new EndpointHandler('GetFantasyPlayerStats', 'GetFantasyPlayerStats', steamWebApiVersion, true).addParameters([new ParameterHandler('fantasyLeagueID', 'FantasyLeagueID', true), new ParameterHandler('startTime', 'StartTime', false), new ParameterHandler('endTime', 'EndTime', false), new ParameterHandler('matchID', 'matchid', false), new ParameterHandler('seriesID', 'SeriesID', false), new ParameterHandler('playerAccountID', 'PlayerAccountID', false)]), new EndpointHandler('GetPlayerOfficialInfo', 'GetPlayerOfficialInfo', steamWebApiVersion, true).addParameter(new ParameterHandler('accountID', 'accountid', true)), new EndpointHandler('GetProPlayerList', 'GetProPlayerList', steamWebApiVersion, false)]), new SchemaHandler('MatchStats', 'IDOTA2MatchStats_570').addEndpoint(new EndpointHandler('GetRealtimeStats', 'GetRealtimeStats', steamWebApiVersion, true).addParameter(new ParameterHandler('serverSteamID', 'server_steam_id', true))), new SchemaHandler('Match', 'IDOTA2Match_570').addEndpoints([new EndpointHandler('GetLeagueListing', 'GetLeagueListing', steamWebApiVersion, false), new EndpointHandler('GetLiveLeagueGames', 'GetLiveLeagueGames', steamWebApiVersion, false).addParameters([new ParameterHandler('leagueID', 'league_id', false), new ParameterHandler('matchID', 'match_id', false)]), new EndpointHandler('GetMatchDetails', 'GetMatchDetails', steamWebApiVersion, true).addParameter(new ParameterHandler('matchID', 'match_id', true)), new EndpointHandler('GetMatchHistory', 'GetMatchHistory', steamWebApiVersion, false).addParameters([new ParameterHandler('heroID', 'hero_id', false), new ParameterHandler('gameMode', 'game_mode', false), new ParameterHandler('skill', 'skill', false), new ParameterHandler('minPlayers', 'min_players', false), new ParameterHandler('accountID', 'account_id', false), new ParameterHandler('leagueID', 'league_id', false), new ParameterHandler('startAtMatchID', 'start_at_match_id', false), new ParameterHandler('matchesRequested', 'matches_requested', false), new ParameterHandler('tournamentGamesOnly', 'tournament_games_only', false)]), new EndpointHandler('GetMatchHistoryBySequenceNumber', 'GetMatchHistoryBySequenceNum', steamWebApiVersion, false).addParameters([new ParameterHandler('startAtMatchSequenceNumber', 'start_at_match_seq_num', false), new ParameterHandler('matchesRequested', 'matches_requested', false)]), new EndpointHandler('GetScheduledLeagueGames', 'GetScheduledLeagueGames', steamWebApiVersion, false).addParameters([new ParameterHandler('startDate', 'date_min', false), new ParameterHandler('endDate', 'date_max', false)]), new EndpointHandler('GetTeamInfoByTeamID', 'GetTeamInfoByTeamID', steamWebApiVersion, false).addParameters([new ParameterHandler('startAtTeamID', 'start_at_team_id', false), new ParameterHandler('teamsRequested', 'teams_requested', false)]), new EndpointHandler('GetTopLiveGame', 'GetTopLiveGame', steamWebApiVersion, true).addParameter(new ParameterHandler('partner', 'partner', true)), new EndpointHandler('GetTournamentPlayerStats', 'GetTournamentPlayerStats', true).addParameters([new ParameterHandler('accountID', 'account_id', true), new ParameterHandler('leagueID', 'league_id', false), new ParameterHandler('heroID', 'hero_id', false), new ParameterHandler('timeFrame', 'time_frame', false), new ParameterHandler('matchID', 'match_id', false), new ParameterHandler('phaseID', 'phase_id', false)])]), new SchemaHandler('StreamSystem', 'IDOTA2StreamSystem_570').addEndpoint(new EndpointHandler('GetBroadcasterInfo', 'GetBroadcasterInfo', steamWebApiVersion, true).addParameters([new ParameterHandler('broadcasterSteamID', 'broadcaster_steam_id', true), new ParameterHandler('leagueID', 'league_id', false)])), new SchemaHandler('Ticket', 'IDOTA2Ticket_570').addEndpoints([new EndpointHandler('SetSteamAccountPurchased', 'SetSteamAccountPurchased', steamWebApiVersion, true).addParameters([new ParameterHandler('eventID', 'eventid', true), new ParameterHandler('steamID', 'steamid', true)]), new EndpointHandler('SteamAccountValidForEvent', 'SteamAccountValidForEvent', steamWebApiVersion, true).addParameters([new ParameterHandler('eventID', 'eventid', true), new ParameterHandler('steamID', 'steamid', true)])]), new SchemaHandler('Economy', 'IEconDOTA2_570').addEndpoints([new EndpointHandler('GetEventStatsForAccount', 'GetEventStatsForAccount', steamWebApiVersion, true).addParameters([new ParameterHandler('eventID', 'eventid', true), new ParameterHandler('accountID', 'accountid', true), new ParameterHandler('language', 'language', false)]), new EndpointHandler('GetGameItems', 'GetGameItems', steamWebApiVersion, false).addParameters([new ParameterHandler('language', 'language', false)]), new EndpointHandler('GetHeroes', 'GetHeroes', steamWebApiVersion, false).addParameters([new ParameterHandler('language', 'language', false), new ParameterHandler('itemizedOnly', 'itemizedonly', false)]), new EndpointHandler('GetItemIconPath', 'GetItemIconPath', steamWebApiVersion, true).addParameters([new ParameterHandler('iconName', 'iconname', true), new ParameterHandler('iconType', 'icontype', false)]), new EndpointHandler('GetRarities', 'GetRarities', steamWebApiVersion, false).addParameter(new ParameterHandler('language', 'language', false)), new EndpointHandler('GetTournamentPrizePool', 'GetTournamentPrizePool', steamWebApiVersion, false).addParameter(new ParameterHandler('leagueID', 'leagueid', false))])]).getApi();

        this.daedalusDomain = 'localhost';
        this.daedalusPort = 7575;
    }

    _createClass(DemonEdge, [{
        key: 'setDaedalusUrl',
        value: function setDaedalusUrl(domain, port) {
            daedalusDomain = domain;
            daedalusPort = port;
        }
    }]);

    return DemonEdge;
})();
'use strict';

var rp = require('request-promise');
var Utils = require('./Utils');

module.exports = function Endpoint() {
    // constructor
    useStrict();

    var urlSegments = [];
    var values = {};
    // end constructor

    // functions for each type of parameter will be dynamically added here.

    function generateRequestUrl(urlSegments) {

        return requestUrl;
    }

    function generateRequestParameters() {}

    // will generate the request URL and send the request via a promise, then return the promise obj.
    function sendRequest() {
        var requestUrl = generateRequestUrl(urlSegments);
        var promise = rp(requestUrl);

        return promise;
    }
};
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');
var rp = require('request-promise');
var Utils = require('./Utils');

module.exports = (function () {
    function EndpointHandler(name, urlSegment, version, needsParams) {
        _classCallCheck(this, EndpointHandler);

        this.name = name;
        this.urlSegment = urlSegment;
        this.version = 'v' + version;
        this.needsParams = needsParams;
        if (this.needsParams === undefined) this.needsParams = true; // default value

        this.parameters = [];
    }

    _createClass(EndpointHandler, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getParameters',
        value: function getParameters() {
            return this.parameters;
        }
    }, {
        key: 'getUrlSegment',
        value: function getUrlSegment() {
            return this.urlSegment;
        }
    }, {
        key: 'getSteamWebApiVersion',
        value: function getSteamWebApiVersion() {
            return this.version;
        }
    }, {
        key: 'needsParameters',
        value: function needsParameters() {
            return this.needsParameters;
        }
    }, {
        key: 'addParameter',
        value: function addParameter(parameterHandler) {
            this.parameters.push(parameterHandler);

            return this; // allow chaining
        }
    }, {
        key: 'addParameters',
        value: function addParameters(parameterHandlers) {
            for (var parameterIndex = 0; parameterIndex < parameterHandlers.length; parameterIndex++) {
                this.parameters.push(parameterHandlers[parameterIndex]);
            }

            return this; // allow chaining
        }
    }, {
        key: 'generateEndpoint',
        value: function generateEndpoint(segments) {
            var urlSegments = segments.slice(0); // create shallow copy of array
            urlSegments.push(this.urlSegment);
            urlSegments.push(this.version);

            var endpoint = {};
            endpoint.values = {};
            endpoint.urlSegments = urlSegments;
            endpoint.getUrlSegments = function () {
                return this.urlSegment;
            };

            var parameterIndex = 0;
            var parameter = undefined;
            var endpointParam = undefined;

            if (this.needsParams) {
                // generate the endpoint with the parameters but no sendRequest function
                for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
                    parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
                    endpoint[this.parameters[parameterIndex].getName()] = parameter;
                    endpointParam = endpoint[this.parameters[parameterIndex].getName()];

                    // immediately invoked function to save the proper references to the parameter function
                    (function (param) {
                        endpoint[param.name] = function (value) {
                            endpoint.values[param.urlSegment] = value;

                            return this;
                        };

                        endpoint.sendRequest = function () {
                            var requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

                            var rpOptions = {
                                uri: requestUrl,
                                json: true
                            };

                            var promise = rp(rpOptions);

                            endpoint.values = {};

                            return promise;
                        };
                    })(parameter);
                }

                endpoint.requestable = false;
            } else {
                // generate the endpoint with the parameters but also with a sendRequest function
                for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
                    parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
                    endpoint[this.parameters[parameterIndex].getName()] = parameter;
                    endpointParam = endpoint[this.parameters[parameterIndex].getName()];
                    // endpoint.sendRequest = function() {
                    //     const requestUrl = Utils.generateEndpointRequestUrl(urlSegments);
                    //
                    //     const rpOptions = {
                    //         uri: requestUrl,
                    //         json: true
                    //     };
                    //
                    //     return rp(rpOptions);
                    // };

                    // immediately invoked function to save the proper references to the parameter function
                    (function (param) {
                        endpoint[param.name] = function (value) {
                            endpoint.values[param.urlSegment] = value;

                            return this;
                        };

                        endpoint.sendRequest = function () {
                            var requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

                            var rpOptions = {
                                uri: requestUrl,
                                json: true
                            };

                            var promise = rp(rpOptions);

                            endpoint.values = {};

                            return promise;
                        };
                    })(parameter);
                }

                endpoint.requestable = true;
            }

            return endpoint;
        }
    }]);

    return EndpointHandler;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rp = require('request-promise');
var Utils = require('./Utils');

module.exports = (function () {
	function Parameter(parent, name, url, required) {
		_classCallCheck(this, Parameter);

		this.parent = parent;
		this.name = name;
		this.value = null; // undefined until user specifies a value
		this.url = url;
		this.required = required;
	}

	///
	/// This method will generate the request URL for the API call that's been chained together,
	/// send the request, and return a promise object to the user to resolve when needed.
	///
	/// params: none
	///

	_createClass(Parameter, [{
		key: 'sendRequest',
		value: function sendRequest() {
			var requestUrl = '';

			var baseUrl = 'https://api.steampowered.com/';
			var apiComponentUrl = this.parent.parent.url;
			var endpointUrl = this.parent.url;
			var apiKey = Utils.getApiKey();
			var parameterStrings = [];

			for (var parameter in this.parent.parameters) {
				var parameterUrl = parameter.url;
				var parameterValue = parameter.value;

				if (parameterValue === null && parameter.required) {
					Utils.log('the request was not sent due to a required parameter not being given a value.');
					return;
				} else if (parameterValue === null) {
					continue;
				}

				var parameterString = '&' + parameterUrl + '=' + parameterValue.toString();
				parameterStrings.push(parameterString);
			}

			requestUrl = baseUrl + apiComponentUrl + endpointUrl + '?key=' + apiKey;

			for (var i = 0; i < parameterStrings.length; i++) {
				requestUrl += parameterStrings[i];
			}

			Utils.log(requestUrl);

			return rp(requestUrl);
		}
	}]);

	return Parameter;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
	function ParameterHandler(name, urlSegment, required) {
		_classCallCheck(this, ParameterHandler);

		this.name = name;
		this.urlSegment = urlSegment;
		this.required = required;
	}

	_createClass(ParameterHandler, [{
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}, {
		key: 'getUrlSegment',
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: 'isRequired',
		value: function isRequired() {
			return this.required;
		}
	}, {
		key: 'generateParameter',
		value: function generateParameter(urlSegments) {
			return {
				name: this.name,
				urlSegment: this.urlSegment,
				getUrlSegments: function getUrlSegments() {
					return this.urlSegment;
				}
			};
		}
	}]);

	return ParameterHandler;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');
var rp = require('request-promise');
var Utils = require('./Utils');
var Endpoint = require('./Endpoint');

module.exports = (function () {
    function RequestHandler(api) {
        _classCallCheck(this, RequestHandler);

        useStrict();

        this.api = api;
    }

    _createClass(RequestHandler, null, [{
        key: 'generateRequestFunctions',
        value: function generateRequestFunctions(api) {
            var baseUrl = api.urlSegment;
            var schemas = api.getSchemas();

            for (var schemaIndex = 0; schemaIndex < schemas.length; schemaIndex++) {
                var schema = schemas[schemaIndex];
                var schemaSegment = schema.getUrlSegment();
                var schemaObj = {};
                var endpoints = schema.getEndpoints();

                for (var endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
                    var endpoint = endpoints[endpointIndex];
                    var endpointSegment = endpoint.getUrlSegment();
                    var endpointVersion = endpoint.getSteamWebApiVersion();
                    var endpointObj = new Endpoint();
                    endpointObj.urlSegments = [baseUrl, schemaSegment, endpointSegment, endpointVersion];

                    var parameters = endpoint.getParameters();

                    for (var parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
                        var parameter = parameters[parameterIndex];

                        (function (endpointObj, parameter) {
                            var parameterSegment = parameter.urlSegment;

                            endpointObj[parameter.getName()] = function (value) {
                                endpointObj.urlSegments.push(parameterSegment);
                                endpointObj.values[parameter.getName()] = value;
                            };
                        })(endpointObj, parameter);
                    }

                    schemaObj[endpoint.getName()] = endpointObj;
                }

                api[schema.getName()] = schemaObj;
            }
        }
    }]);

    return RequestHandler;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var Utils = require('./Utils');
var Endpoint = require('./Endpoint');

module.exports = (function () {
	function Schema(name, url) {
		_classCallCheck(this, Schema);

		this.name = name;
		this.url = url;

		this.endpoints = {};
		this.endptFuncs = {};

		return this;
	}

	///
	/// This method will add an endpoint to Schema.endpoints and
	/// dynamically create a function to define that endpoint's value
	/// (only if the endpoint accepts no parameters)
	///
	/// params:
	///		endpointName:		The name of the parameter as its used in Crystalys.
	///		endpointUrl:		The string that will be used in the URL segment generated when making a request to the Steam WebAPI.
	///		needsParameters: 	True if the endpoint requires at least one parameter, false otherwise.
	///

	_createClass(Schema, [{
		key: 'addEndpoint',
		value: function addEndpoint(endpointName, endpointUrl, needsParameters) {
			useStrict();

			var endpoint = new Endpoint(this, endpointName, endpointUrl);

			if (!needsParameters) {
				var sendRequest = function sendRequest() {
					useStrict();

					var requestUrl = '';

					var baseUrl = 'https://api.steampowered.com/';
					var schemaUrl = this.parent.parent.url;
					var endpointUrl = this.parent.url;
					var apiKey = Utils.getApiKey();

					for (var parameter in this.parameters) {
						if (parameter.required) {
							Utils.log('the request was not sent due to a required parameter not being given a value.');
							return;
						}
					}

					requestUrl = baseUrl + schemaUrl + endpointUrl + '?key=' + apiKey;

					return rp(requestUrl);
				};

				this[endpointName].sendRequest = sendRequest;
			}

			return endpoint;
		}
	}]);

	return Schema;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = (function () {
	function SchemaHandler(name, urlSegment) {
		_classCallCheck(this, SchemaHandler);

		this.name = name;
		this.urlSegment = urlSegment;

		this.endpoints = [];
	}

	_createClass(SchemaHandler, [{
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}, {
		key: 'getEndpoints',
		value: function getEndpoints() {
			return this.endpoints;
		}
	}, {
		key: 'getUrlSegment',
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: 'addEndpoint',
		value: function addEndpoint(endpointHandler) {
			this.endpoints.push(endpointHandler);

			return this; // allow chaining
		}
	}, {
		key: 'addEndpoints',
		value: function addEndpoints(endpointHandlers) {
			for (var endpointIndex = 0; endpointIndex < endpointHandlers.length; endpointIndex++) {
				this.endpoints.push(endpointHandlers[endpointIndex]);
			}

			return this; // allow chaining
		}
	}, {
		key: 'generateSchema',
		value: function generateSchema(baseUrl) {
			var schema = {};
			schema.getUrlSegments = function () {
				return this.urlSegment;
			};

			var urlSegments = [baseUrl, this.urlSegment];

			for (var endpointIndex = 0; endpointIndex < this.endpoints.length; endpointIndex++) {
				schema[this.endpoints[endpointIndex].getName()] = this.endpoints[endpointIndex].generateEndpoint(urlSegments);
			}

			return schema;
		}
	}]);

	return SchemaHandler;
})();
'use strict';

var apiKey = '';

module.exports = {
  log: function log(message) {
    console.error('CRIT:' + message);
  },

  clone: function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  setApiKey: function setApiKey(key) {
    apiKey = key;
  },

  getApiKey: function getApiKey() {
    if (apiKey !== '') {
      return apiKey;
    } else {
      this.log('API key is not set');
      return null;
    }
  },

  generateEndpointRequestUrl: function generateEndpointRequestUrl(urlSegments) {
    var apiKey = this.getApiKey();

    var requestUrl = urlSegments[0]; // baseUrl
    requestUrl += '/' + urlSegments[1]; // schemaUrl
    requestUrl += '/' + urlSegments[2]; // endpointUrl
    requestUrl += '/' + urlSegments[3]; // apiVersion
    requestUrl += '?key=' + apiKey; // add apiKey

    return requestUrl;
  },

  generateRequestUrl: function generateRequestUrl(urlSegments, parameters) {
    var requestUrl = this.generateEndpointRequestUrl(urlSegments);

    var parameterNames = Object.keys(parameters);

    // append parameters as such: &<param_name>=<param_value>
    for (var i = 0; i < parameterNames.length; i++) {
      requestUrl += '&' + parameterNames[i] + '=' + parameters[parameterNames[i]];
    }

    return requestUrl;
  }
};
