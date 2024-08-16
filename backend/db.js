const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/paytm");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}