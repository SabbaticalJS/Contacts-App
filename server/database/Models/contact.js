var mongoose = require('mongoose');

var Schema = mongoose.schema;

ContactSchema = new Schema({
	firstName: String,
	lastName: String,
	nickname: String,
	mobile: Number,
	email: String,
	address: String
});

var Contact = mongoose.model('Contact', ContactSchema);

module.export = Contact;