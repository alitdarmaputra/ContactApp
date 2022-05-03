const Contacts = require("../models/Contacts");

module.exports = async (req, res) => {
    const contacts = await Contacts.find({});
    res.render("index", { contacts });
} 