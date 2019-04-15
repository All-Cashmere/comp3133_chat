const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
	users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	message:String
});

module.exports = mongoose.model('room', roomSchema);