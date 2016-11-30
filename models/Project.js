var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */
// var Project = new keystone.List('Project', {
// 	map: { name: 'project_name'}
// 	});


var Project = new keystone.List('Project');

// Note: Does not support nested schemas at this time.

Project.add({
	name: { type: String, required: true, index: true, default: "New Project"},
	startDate: { type: Date, required: false, index: false},
	endDate: { type: Date, required: false, index: false},
	isComplete: { type: Boolean, required: false, index: false, default: "true"},
	imgUrl: { type: String, required: false, index: false, default: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"},
	descShort: { type: String, required: false, index: false, default: "Work in progress."},
	role: { type: String, required: false, index: false, default: "Member"}
});

// Adventurer.add({
// 	name: { type: Types.Name, required: true, index: true },
// 	email: { type: Types.Email, initial: true, required: true, index: true },
// 	password: { type: Types.Password, initial: true, required: true },
// }, 'Permissions', {
// 	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
// });



/**
 * Registration
 */
Project.defaultColumns = 'name';
Project.register();
