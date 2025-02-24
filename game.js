const planeTypes = [""]

function sendPlaneRequest() {
    const reqSuffix = "req";
    let chosenReq = Math.floor(Math.random() * 6);
    let planeNum = Math.floor(Math.random() * 1001);
    let randomReqID = reqSuffix.concat("", chosenReq.toString());
    let reqFrom = "Plane".concat("-", planeNum.toString());
    const reqButton = document.getElementById(randomReqID).innerHTML=reqFrom;
}

function PlaneRequest(incomingReqID) {
    const reqID = "req".concat("", incomingReqID.toString());
    const reqButton = document.getElementById(reqID);
    if (reqButton.innerHTML == "No request.") {
        alert("There is no request here.");
    } else {

    };
}

function Game() {
    alert("Good luck!");
    const startButton = document.getElementById("startGame");
    startButton.remove();
    setInterval(sendPlaneRequest, 10000);
}