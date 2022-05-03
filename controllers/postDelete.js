const Contacts = require("../models/Contacts");

module.exports = (req, res) => {
    Contacts.findByIdAndDelete(req.params.id, (error) => {
        if(error) console.log(error)
        else res.redirect("/");
    });
}