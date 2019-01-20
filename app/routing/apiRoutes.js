// LOAD DATA
// ==================================================
const friends = require("../data/friends");

// EXPORT ROUTING
// ==================================================
module.exports = function(app) {
    // GET ROUTING
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    // POST ROUTING
    app.post("/api/friends", function (req, res) {
        // matching process so we don't match with ourself
        var currentUser = req.body;
        var allScores = [];
        for (var i=0; i<friends.length; i++) {
            let result = 0;
            for (var j=0; j<friends.score.length; j++) {
                result += friends[i].scores[j] - currentUser.scores[j];
            }
            allScores.push(result);
        }
        Array.min = function(array) {
            return Math.min.apply( Math, array );}
        var minimum = Array.min(allScores);
        var index = allScores.indexOf(minimum);

        friends.push(req.body);
        res.json(friends[index]);
    })
    // This part was with the help of stackoverflow and Alaa.  He helped walked me through what I was missing and directed me to the find the results with googleFoo.
}
