// LOAD DATA
// ==================================================
const friends = require("../data/friends");

// EXPORT ROUTING
// ==================================================
module.exports = function(app) {
    // GET ROUTING
    app.get("../data/friends", function (req, res) {
        res.json(friendsData);
    })

    // POST ROUTING
    app.post()
}