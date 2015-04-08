var mongoose = require('mongoose');

module.exports = mongoose.model('Angle', {
	name: { type: String },
	map: { type: String },
	comment: { type: String },
	link: { type: String }
});