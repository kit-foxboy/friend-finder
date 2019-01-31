//import data
const questions = require("../data/questions");
const friends = require("../data/friends");

module.exports = function(app) {

    //GET routes
    app.get("/api/questions", (req, res) => {
        res.json(questions);
    });

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //POST routes
    app.post("/api/friends", (req, res) => {
        const scores = (req.body.scores) ? JSON.parse(req.body.scores) : [];
        if (!req.body.name || !req.body.photo || scores.length != questions.length) {
            res.json({error: "Invalid form data"});
        } else {
            friends.push({
                name: req.body.name,
                photo: req.body.photo,
                description: (req.body.description) ? req.body.description : "",
                scores: scores
            });
            res.json(matchFriends(req.body));
        }
    });
}

function matchFriends(newFriend) {

    //TODO
    return newFriend;
}