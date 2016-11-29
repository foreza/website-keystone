var async = require('async'),
	keystone = require('keystone');

var Project = keystone.list('Project');

/**
 * Lists Projects
 */
exports.list = function(req, res) {
	Project.model.find(function(err, items) {

		if (err) return res.apiError('database error', err);

		res.apiResponse({
			projects: items
		});

	});
}

/**
 * Get Project by ID
 */
exports.get = function(req, res) {
	Project.model.findById(req.params.id).exec(function(err, item) {

		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		res.apiResponse({
			projects: item
		});

	});
}


/**
 * Create a Project
 */
exports.create = function(req, res) {

	var item = new Project.model(),
		data = (req.method == 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function(err) {

		if (err) return res.apiError('error', err);

		res.apiResponse({
			projects: item
		});

	});
}

exports.test = function(req, res) {

  console.log("Test route called");

  var item = new Project.model({
    name: "test" + Math.floor(Math.random(0,1)*1000000000,1)
  });

	data = (req.method == 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function(err) {

		if (err) return res.apiError('error', err);

		res.apiResponse({
			projects: item
		});

	});
}


/**
 * Get Project by ID
 */
exports.update = function(req, res) {
	Project.model.findById(req.params.id).exec(function(err, item) {

		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		var data = (req.method == 'POST') ? req.body : req.query;

		item.getUpdateHandler(req).process(data, function(err) {

			if (err) return res.apiError('create error', err);

			res.apiResponse({
				projects: item
			});

		});

	});
}

/**
 * Delete Project by ID
 */
exports.remove = function(req, res) {
	Project.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		item.remove(function (err) {
			if (err) return res.apiError('database error', err);

			return res.apiResponse({
				success: true
			});
		});

	});
}
