function sendPlaneRequest() {
    const reqSuffix = "req";
    let chosenReq = Math.random() * 6
    let planeNum = Math.random() * 1001
    let randomReqID = reqSuffix.concat(" ", chosenReq.toString());
    let reqFrom = "Plane".concat(" ", planeNum.toString());
    const reqButton = document.getElementById(randomReqID).innerHTML=reqFrom;
}

function Game() {
    alert("Good luck!");
    const startButton = document.getElementById("startGame");
    startButton.remove();
    while (true) {
        setTimeout(Math.floor(Math.random() * 200001))
        sendPlaneRequest();
    }
}