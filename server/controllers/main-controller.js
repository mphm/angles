var Angle = require('../models/angle');

module.exports.create = function (req, res) {
	var angle = new Angle(req.body);
	angle.save(function (err, result) {
		res.json(result);
	});
}

module.exports.list = function (req, res) {
	Angle.find({}, function (err, results) {
		res.json(results);
	});
}