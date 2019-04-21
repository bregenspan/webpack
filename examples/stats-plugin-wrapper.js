var StatsPlugin = require("stats-webpack-plugin");

function ConfiguredPlugin() {
	StatsPlugin.call(this, "../stats.json");
}

ConfiguredPlugin.prototype = Object.create(StatsPlugin.prototype);
ConfiguredPlugin.prototype.constructor = ConfiguredPlugin;

module.exports = ConfiguredPlugin;
