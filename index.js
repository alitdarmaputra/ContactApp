const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = new express();
const port = 3000;

mongoose.connect("mongodb://localhost/contact_app");

// Controllers
const homeController = require("./controllers/home.js");
const createContactController = require("./controllers/create.js");
const postContacts = require("./controllers/postContacts.js");
const editContactController = require("./controllers/editPost.js");
const postEditController = require("./controllers/postEdit");
const deleteContactController = require("./controllers/deleteContact.js");
const postDeleteController = require("./controllers/postDelete.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Monggo contact app | listening at http://localhost:${port}`);
});

app.get("/", homeController);
app.get("/posts/new", createContactController);
app.post("/posts/store", postContacts);
app.get("/edit/:id", editContactController);
app.post("/edit/store/:id", postEditController);
app.get("/delete/:id", deleteContactController);
app.post("/delete/store/:id", postDeleteController);