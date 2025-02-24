const planeTypes = ["AIR CANADA", "LUFTHANSA", "DELTA", "AIRFRANS", "RYR", "EK"];

function sendPlaneRequest() {
    const reqSuffix = "req";
    let chosenReq = Math.floor(Math.random() * 6);
    let planeNum = Math.floor(Math.random() * 1001);
    let randomReqID = reqSuffix.concat("", chosenReq.toString());
    let reqFrom = planeTypes[Math.floor(Math.random()*7)].concat("-", planeNum.toString());
    const reqButton = document.getElementById(randomReqID).innerHTML=reqFrom;
    const reqButtonBG = document.getElementById(randomReqID).style.backgroundColor="yellow";
}

function PlaneRequest(incomingReqID) {
    const reqID = "req".concat("", incomingReqID.toString());
    const reqButton = document.getElementById(reqID);
    if (reqButton.innerHTML == "No request.") {
        alert("There is no request here.");
    } else if (reqButton.innerHTML == "Opened.") {
        alert("You already have this opened.");
    } else {
        const reqButton = document.getElementById(randomReqID).innerHTML="Opened.";
        const reqButtonBG = document.getElementById(randomReqID).style.backgroundColor="black";
        const reqButtonTC = document.getElementById(randomReqID).style.color="white";
    };
}

function Game() {
    alert("Good luck!");
    const startButton = document.getElementById("startGame");
    startButton.remove();
    setInterval(sendPlaneRequest, 10000);
}