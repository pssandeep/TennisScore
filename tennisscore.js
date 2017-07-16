console.log("TENNIS SCORE");
var btnPlayer1 = document.getElementById("btnplayer1");
var btnPlayer2 = document.getElementById("btnplayer2");
var gamescore1 = document.getElementById("gamescore1");
var gamescore2 = document.getElementById("gamescore2");
gamescore1.textContent = 0;
gamescore2.textContent = 0;
var currentScore1 = gamescore1.textContent;
var currentScore2 = gamescore2.textContent;
var currentSet = 1;
var numberOfSetPlayer = [0, 0];
var players = [{
    name: "Roger Federer"
    , name1: "Mr Federer"
    }, {
    name: "Rafael Nadal"
    , name1: "Mr Nadal"
    }];

function scoreUpdate1() {
    if (currentScore1 == "0") {
        currentScore1 = "15";
    }
    else if (currentScore1 == "15") {
        currentScore1 = "30";
    }
    else if (currentScore1 == "30") {
        currentScore1 = "40";
    }
    else if (currentScore1 == "40" && currentScore2 == "40") {
        currentScore1 = "AD";
    }
    else if (currentScore1 == "40" && currentScore2 == "AD") {
        currentScore1 = "40";
        currentScore2 = "40";
    }
    else if ((currentScore1 == "AD" && currentScore2 == "40") || (currentScore1 == "40" && currentScore2 != "40")) {
        currentScore1 = "0";
        currentScore2 = "0";
        document.getElementById("gametext").innerHTML = "GAME - " + players[0].name;
        console.log("GAME " + document.getElementById("player1").textContent);
        document.getElementById("gametext2").innerHTML = "";
        updateCurrentSet(0);
    }
    gamescore1.textContent = currentScore1
    gamescore2.textContent = currentScore2
    console.log(currentScore1 + "/" + currentScore2);
}

function scoreUpdate2() {
    if (currentScore2 == "0") {
        currentScore2 = "15";
    }
    else if (currentScore2 == "15") {
        currentScore2 = "30";
    }
    else if (currentScore2 == "30") {
        currentScore2 = "40";
    }
    else if (currentScore2 == "40" && currentScore1 == "40") {
        currentScore2 = "AD";
    }
    else if (currentScore2 == "40" && currentScore1 == "AD") {
        currentScore1 = "40";
        currentScore2 = "40";
    }
    else if ((currentScore2 == "AD" && currentScore1 == "40") || (currentScore2 == "40" && currentScore1 != "40")) {
        currentScore2 = "0";
        currentScore2 = "0";
        document.getElementById("gametext").innerHTML = "GAME - " + players[1].name;
        console.log("GAME " + document.getElementById("player2").textContent);
        document.getElementById("gametext2").innerHTML = "";
        updateCurrentSet(1);
    }
    gamescore1.textContent = currentScore1
    gamescore2.textContent = currentScore2
    console.log(currentScore1 + "/" + currentScore2);
}

function updateCurrentSet(gamePlayer) {
    var setPlayer1 = document.querySelectorAll("td.active")[gamePlayer];
    setPlayer1.innerHTML = Number(setPlayer1.innerHTML) + 1;
    var setWon = checkSetWon();
    if (setWon == 1) {
        numberOfSetPlayer[gamePlayer] = numberOfSetPlayer[gamePlayer] + 1;
        console.log("SETS - " + players[gamePlayer].name);
        document.getElementById("gametext2").innerHTML = "SETS - " + players[gamePlayer].name;
        if (numberOfSetPlayer[gamePlayer] < 3) {
            document.querySelector("td.active").classList.remove("active");
            document.querySelector("td.active").classList.remove("active");
            console.log("SET WON")
            currentSet = currentSet + 1;
            currentId = "#set" + currentSet;
            console.log(currentId);
            document.querySelectorAll(currentId)[0].classList.add("active");
            document.querySelectorAll(currentId)[1].classList.add("active");
            document.querySelectorAll(currentId)[0].innerHTML = 0;
            document.querySelectorAll(currentId)[1].innerHTML = 0;
        }
        else {
            console.log("MATCH - " + players[gamePlayer].name);
            document.getElementById("gametext3").innerHTML = "MATCH - " + players[gamePlayer].name;
            btnPlayer1.disabled = true;
            btnPlayer2.disabled = true;
        }
    }
}

function checkSetWon() {
    var setPlayer1 = Number(document.querySelectorAll("td.active")[0].innerHTML);
    var setPlayer2 = Number(document.querySelectorAll("td.active")[1].innerHTML);
    if (setPlayer1 == 7 || setPlayer2 == 7) {
        return 1;
    }
    else if (setPlayer1 == 6 && setPlayer2 < 5) {
        return 1;
    }
    else if (setPlayer1 < 5 && setPlayer2 == 6) {
        return 1;
    }
    else if (setPlayer1 >= 5 || setPlayer2 >= 5) {
        if (setPlayer1 == 6 && setPlayer2 == 6) {
            return 0;
        }
        else if ((setPlayer1 == 6 && setPlayer2 == 5) || (setPlayer1 == 5 && setPlayer2 == 6)) {
            return 2;
        }
    }
    else {
        return 2;
    }
}
btnPlayer1.addEventListener("click", scoreUpdate1);
btnPlayer2.addEventListener("click", scoreUpdate2);