import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { FootBallCoach } from "./FootballCoach";

let myCricketCoach = new CricketCoach();
let myFootballCoach = new FootBallCoach();

let coachArray: Coach[]= []

coachArray.push(myCricketCoach);
coachArray.push(myFootballCoach);

for (let coach of coachArray){
    console.log(coach.getDailyWorkout());
}