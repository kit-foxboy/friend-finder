module.exports = [
    {
        "name": "Max",
        "photo": "https://media.giphy.com/media/13EtQIwmTqNDji/giphy.gif",
        "description": "Too cool for school",
        "scores": randomScores()
    },
    {
        "name": "JJ",
        "photo": "https://media.giphy.com/media/XaqTwZmFkJGHS/giphy.gif",
        "description": "Who cares about you? That Spider Man is a menace!",
        "scores": randomScores()
    }
];

function randomScores() {
    const arr = [];
    for(let i = 0; i < 10; i++) {
        arr.push(Math.ceil(Math.random() * 5));
    }

    return arr;
}