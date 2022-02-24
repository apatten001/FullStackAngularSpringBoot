import { Coach } from "./Coach";


export class FootBallCoach implements Coach{

    getDailyWorkout(): String {
        
        return "100 field goal kicks"
    }

}