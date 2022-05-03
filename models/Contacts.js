const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contacts = new Schema({
    name: {
        type: String,
        required: [true, "Please provide username"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"]
    }
});

const ContactsModel = mongoose.model("Contacts", Contacts);
module.exports = ContactsModel;