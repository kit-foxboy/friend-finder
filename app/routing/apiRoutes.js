//import data
const friends = require("../data/friends");

module.exports = function(app) {

    //GET routes
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //POST routes
    app.post("/api/friends", (req, res) => {
        
        const scores = (req.body.scores) ? JSON.parse(req.body.scores) : [];
        if (!req.body.name || !req.body.photo || scores.length != 10) {
            res.json({error: "Invalid form data"});
        } else {
            friends.push(req.body);
            res.json(matchFriends(req.body));
        }
    });
}

function matchFriends(newFriend) {

    //TODO
    return newFriend;
}