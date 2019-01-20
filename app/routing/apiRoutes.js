// LOAD DATA
// ==================================================
const friends = require("../data/friends");

// EXPORT ROUTING
// ==================================================
module.exports = function(app) {
    // GET ROUTING
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    })

    // POST ROUTING
    app.post("/api/friends", function (req, res) {
        res.json(friendData);
        
    })
}
