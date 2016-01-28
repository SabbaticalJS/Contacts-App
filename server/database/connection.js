var mongoose = require('mongoose');

var dburl = 'mongodb://localhost:27017/contactsapp';

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
	console.log('mongoose connected at ', dburl);
});

mongoose.connection.on('error',function(err){
	console.log('mongoose connection error: ', err);
});

mongoose.connection.on('disconnected',function(){
	console.log('mongoose disconnected');
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('mongoose connection closed from app termination');
		process.exit(0);
	});
});

module.exports.connection = mongoose.connection;