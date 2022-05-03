const Contacts = require("../models/Contacts");

module.exports = (req, res) => {
    Contacts.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email
    }, (error, docs) => {
        if (error){
            console.log(error)
        }
        else{
            res.redirect("/");
        }
    });
}