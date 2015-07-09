'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: 'not null',
		trim: true
	},
	surName: {
		type: String,
		default: '',
		required: 'not null',
		trim: true
	},
	suburd: {
		type: String,
		default: '',
		trim: true
	},
	country: {
		type: String,
		default: '',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		required: 'not null',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		trim: true
	},
	referred: {
		type: Boolean,
		default: '',
		trim: true
	},
	chanel: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);