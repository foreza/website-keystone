var keystone = require('keystone');
var async = require('async');



exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'projects';

	locals.data = {
		projects: [],
	};

	// Load all Projects
	view.on('init', function (next) {
		console.log("Initializing views");

		keystone.list('Project').model.find().exec(function (err, results) {
			locals.data.projects = results;
			console.log("results:", results);
			next(err);
		});
	});



	// Render the view
	view.render('projects');

};
