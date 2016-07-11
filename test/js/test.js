window.onload = function() {
	var DemonEdge = require('./../../es6/DemonEdge.js');
	var demonedge = new DemonEdge();
	demonedge.setDaedalusUrl('localhost', '8080');

	var vm = new Vue({
		el: '#app',
		data: {
			json: ''
		},
		methods: {
			getMatchHistory: function() {
				var promise = demonedge.api.Match.GetMatchHistory.sendRequest();

				var self = this;

				promise.then(function(response) {
					self.json = response.result;
				})
			},
			getAntimageMatchHistory: function() {
				var promise = demonedge.api.Match.GetMatchHistory.heroID(1).matchesRequested(300).sendRequest();

				var self = this;

				promise.then(function(response) {
					self.json = response.result;
				})
			}
		}
	})
}