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


Project.add({
	name: { type: String, required: true, index: true, default: "New Project"}
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
Project.defaultColumns = 'project_name';
Project.register();
