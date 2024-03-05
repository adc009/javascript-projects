// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    console.log("Loaded.");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let takeoff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rocket = document.getElementById("rocket");

    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";


    takeoff.addEventListener("click", function (event) {
        let readyStatus = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyStatus) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+10000
            
        }
        else {}
    });

    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
        rocket.style.left = "0px";

    });

    abort.addEventListener("click", function (event) {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "0px";
        }
        else {}

    });

    up.addEventListener("click", function (event) {
        rocket.style.bottom = parseInt(rocket.style.bottom,10)+10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+10000

    });

    down.addEventListener("click", function (event) {
        rocket.style.bottom = parseInt(rocket.style.bottom,10)-10 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)-10000

    });

    left.addEventListener("click", function (event) {
        rocket.style.left = parseInt(rocket.style.left,10)-10 + "px";

    });

    right.addEventListener("click", function (event) {
        rocket.style.left = parseInt(rocket.style.left,10)+10 + "px";

    });

}

window.addEventListener("load", init)


