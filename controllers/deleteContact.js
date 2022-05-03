const Contacts = require("../models/Contacts");

module.exports = async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    res.render("delete", {contact});
}