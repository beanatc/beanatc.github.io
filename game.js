function sendPlaneRequest() {
    const reqSuffix = "req";
    let chosenReq = Math.floor(Math.random() * 6);
    let planeNum = Math.floor(Math.random() * 1001);
    let randomReqID = reqSuffix.concat("", chosenReq.toString());
    let reqFrom = "Plane".concat("-", planeNum.toString());
    const reqButton = document.getElementById(randomReqID).innerHTML=reqFrom;
}

function PlaneRequest(incomingReqID) {
    alert("request");
}

function Game() {
    alert("Good luck!");
    const startButton = document.getElementById("startGame");
    startButton.remove();
    while (true) {
        let howlong = Math.floor(Math.random() * 200001)
        alert("gonna wait".concat(" ", howlong.toString()));
        setTimeout(howlong)
        sendPlaneRequest();
    }
}