const planeTypes = ["AIR CANADA", "LUFTHANSA", "DELTA", "AIRFRANS", "RYR", "EK"];

function sendPlaneRequest() {
    const reqSuffix = "req";
    let chosenReq = Math.floor(Math.random() * 6);
    let planeNum = Math.floor(Math.random() * 10000);
    let randomReqID = reqSuffix.concat("", chosenReq.toString());
    if (document.getElementById(randomReqID).innerHTML == "Opened." || document.getElementById(randomReqID).innerHTML != "No request.") {
        return;
    } else {
        let reqFrom = planeTypes[Math.floor(Math.random()*7)].concat("-", planeNum.toString());
        const reqButton = document.getElementById(randomReqID).innerHTML=reqFrom;
        const reqButtonBG = document.getElementById(randomReqID).style.backgroundColor="yellow";
        return;
    };
}

function PlaneRequest(incomingReqID) {
    const reqID = "req".concat("", incomingReqID.toString());
    const reqButton = document.getElementById(reqID);
    if (reqButton.innerHTML == "No request.") {
        alert("There is no request here.");
    } else if (reqButton.innerHTML == "Opened.") {
        alert("You already have this opened.");
    } else {
        const reqButton = document.getElementById(reqID).innerHTML="Opened.";
        const reqButtonBG = document.getElementById(reqID).style.backgroundColor="black";
        const reqButtonTC = document.getElementById(reqID).style.color="white";
        const reqOpened = document.getElementById("currentReq").innerHTML="Request open.";
        const reqOpenedTC = document.getElementById("currentReq").style.color="yellow";
    };
}

function Game() {
    alert("Good luck!");
    const startButton = document.getElementById("startGame");
    startButton.remove();
    setInterval(sendPlaneRequest, 10000);
}