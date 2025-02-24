function sendPlaneRequest() {
    const reqSuffix = "req";
    let chosenReq = Math.floor(Math.random() * 6);
    let planeNum = Math.floor(Math.random() * 1001);
    let randomReqID = reqSuffix.concat("", chosenReq.toString());
    alert(randomReqID);
    let reqFrom = "Plane".concat("-", planeNum.toString());
    alert(reqFrom);
    const reqButton = document.getElementById(randomReqID).innerHTML=reqFrom;
}

function PlaneRequest() {
    alert("request");
}

function Game() {
    alert("Good luck!");
    const startButton = document.getElementById("startGame");
    startButton.remove();
    while (true) {
        setTimeout(Math.floor(Math.random() * 200001))
        alert("plane request sent");
        sendPlaneRequest();
    }
}