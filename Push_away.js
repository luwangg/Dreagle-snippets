//Library needed for the project
var autonomy = require('ardrone-autonomy');
//Create a mission for the autonomous fly
var mission  = autonomy.createMission();

//Set the actions you want to perform for that mission
mission.takeoff()   //This parameter I think should be removed for the final version!
       .zero()       // Sets the current state as the reference
       .altitude(1)  //Go up for 1 meter. This parameter has to be increased for the final version!!!!
       .hover(2000)  //Hovering for 2 secs
       /*.right(2) */ 
        for(var i=0; i<3; i++){
               mission.backward(2); //Go back for 2 meters. This parameter should be improved for the final version!!!
        }
       mission.land(); //Landing. This actions should be removed for the final version.

//Execute the mission!
mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});