"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var FootballCoach_1 = require("./FootballCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myFootballCoach = new FootballCoach_1.FootBallCoach();
var coachArray = [];
coachArray.push(myCricketCoach);
coachArray.push(myFootballCoach);
for (var _i = 0, coachArray_1 = coachArray; _i < coachArray_1.length; _i++) {
    var coach = coachArray_1[_i];
    console.log(coach.getDailyWorkout());
}
