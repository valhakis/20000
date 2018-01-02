var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var userSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
		trim: true,
	},
	password: {
		type: String,
		required: 'Password is required.'
	},
	registeredAt: {
		type: Date,
		default: Date.now
	}
});

userSchema.methods.hashPassword = function(password) {
	return bcrypt.hashSync(password, 8);
}; 

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

var User = module.exports = mongoose.model('User', userSchema);

