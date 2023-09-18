function displaystuff() {
    console.log("stuff")
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerchoice() {

    let auswahl = getRandomInt(5);

    switch (auswahl) {

        case 0:
            let choice1 = "./img/Schere";
            return choice1;
            break;
        case 1:
            let choice2 = "./img/Stein";
            return choice2;
            break;
        case 2:
            let choice3 = "./img/Papier";
            return choice3;
            break;
        case 3:
            let choice4 = "./img/Echse";
            return choice4;
            break;
        case 4:
            let choice5 = "./img/Spock";
            return choice5;
            break;

    }




}

function End(computerChoice, PlayerChoice) {

    länge = computerChoice.length;
    ComputerWahl = computerChoice.slice(6, länge)

    console.log("Computer wählt: " + ComputerWahl);
    console.log("Spieler wählt: " + PlayerChoice);


    switch (true) {

        case (PlayerChoice == "Schere" && (ComputerWahl == "Papier" || ComputerWahl == "Echse")):
            console.log("Spieler wint");
            return "U WON";
            break;
        case (PlayerChoice == "Stein" && (ComputerWahl == "Schere" || ComputerWahl == "Echse")):
            console.log("Spieler wint");
            return "U WON";
            break;
        case (PlayerChoice == "Papier" && (ComputerWahl == "Stein" || ComputerWahl == "Spock")):
            console.log("Spieler wint");
            return "U WON";
            break;
        case (PlayerChoice == "Echse" && (ComputerWahl == "Spock" || ComputerWahl == "Papier")):
            console.log("Spieler wint");
            return "U WON";
            break;
        case (PlayerChoice == "Spock" && (ComputerWahl == "Stein" || ComputerWahl == "Schere")):
            console.log("Spieler wint");
            return "U WON";
            break;

        case (PlayerChoice == "Schere" && (ComputerWahl == "Stein" || ComputerWahl == "Spock")):
            console.log("Spieler wint");
            return "U LOSE";
            break;
        case (PlayerChoice == "Stein" && (ComputerWahl == "Papier" || ComputerWahl == "Spock")):
            console.log("Spieler wint");
            return "U LOSE";
            break;
        case (PlayerChoice == "Papier" && (ComputerWahl == "Schere" || ComputerWahl == "Echse")):
            console.log("Spieler wint");
            return "U LOSE";
            break;
        case (PlayerChoice == "Echse" && (ComputerWahl == "Stein" || ComputerWahl == "Schere")):
            console.log("Spieler wint");
            return "U LOSE";
            break;
        case (PlayerChoice == "Spock" && (ComputerWahl == "Echse" || ComputerWahl == "Papier")):
            console.log("Spieler wint");
            return "U LOSE";
            break;

        default:
            return "TIE";
            break;




    }

    return "Miau";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function playersChoice(PlayerChoice) {

    document.getElementById('EndMessage').innerText = "";
    for (let i = 0; i < 30; i++) {

        computerChoice = computerchoice();
        document.getElementById('someImage').src = computerChoice;
        await sleep(i * 8);
        console.log(i);


    }


    document.getElementById('EndMessage').innerText = End(computerChoice, PlayerChoice);
    return;
}

