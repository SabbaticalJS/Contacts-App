var mongoose = require('mongoose');

var Schema = mongoose.schema;

ContactSchema = new Schema({
	firstName: String,
	lastName: String,
	mobile: Number,
	email: String
});

var Contact = mongoose.model('Contact', ContactSchema);

module.export = Contact;