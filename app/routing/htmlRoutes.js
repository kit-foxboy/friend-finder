//import modules
const path = require("path");

module.exports = function(app) {

    //GET routes
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}