var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Adventurer Model
 * ==========
 */
var Adventurer = new keystone.List('Adventurer');

Adventurer.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Adventurer.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Adventurer.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Adventurer.defaultColumns = 'name, email, isAdmin';
Adventurer.register();
