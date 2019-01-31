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
        
        req.body.scores = JSON.parse(req.body.scores);
        if (!req.body.name || !req.body.photo || req.body.scores.length != questions.length) {
            res.json({error: "Invalid form data"});
        } else {
            const bestMatch = getBestMatch(req.body.scores);
            friends.push(req.body);
            res.json(bestMatch);
        }
    });
}

function getBestMatch(scores) {

    let bestMatch = null;
    let bestDiff;

    friends.forEach((friend, friendIdx) => {
        
        let totalDifference = 0;
        
        for(let idx = 0; idx < friend.scores.length; idx++) {
            totalDifference += Math.abs(scores[idx] - friend.scores[idx]);
        }

        if (bestMatch === null || totalDifference < bestDiff) {
            bestDiff = totalDifference;
            bestMatch = friends[friendIdx];
        }
    });

    return bestMatch;
}