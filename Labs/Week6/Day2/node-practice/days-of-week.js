module.exports.weekdays =
	['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
	
	return this.weekdays[dayNo%8];
};
