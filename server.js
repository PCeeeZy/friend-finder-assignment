// DEPENDENCIES
// ==================================================
const express = require("express");
const path = require("path");
const app = express();

// INITIAL PORT
// ==================================================
const PORT = process.env.PORT || 8080;

// DATA PARSING by EXPRESS
// ==================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ROUTER "IMPORTS"
// ==================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// ==================================================
app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});