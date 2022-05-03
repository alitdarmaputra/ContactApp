const Contacts = require("../models/Contacts.js");

module.exports = async (req, res) => {
    await Contacts.create(req.body, (error, contacts) => {
        if(error) console.log(error);
        else return res.redirect("/");
    });
}