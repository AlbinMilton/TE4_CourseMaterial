// Section 1: Primitive and Union Types
var userName = "John";
var highScore = 100;
var isLoggedIn = false;
var countdown = null;
// Section 2: Structured Data (Arrays and Objects)
var gameTags = ["action", "adventure", "multiplayer"];
var currentScore = { points: 50, isFinal: false };
var userSetting = undefined;
// Section 3: Functions
var logError = function (message) {
    console.error("Error:", message);
};
var calculatePercentage = function (score, score2) {
    return (score / score2) * 100;
};
var markeplier = calculatePercentage(50, 200);
console.log("Calculated Percentage: ".concat(markeplier, "%"));
