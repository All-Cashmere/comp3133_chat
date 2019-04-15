var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    socketId:  { type: String, required: true },
    nickname: String,
    timestamp: { type : Date, default: Date.now }
});

module.exports = mongoose.model('user', userSchema);