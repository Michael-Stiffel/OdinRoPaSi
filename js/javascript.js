function displaystuff(){
    console.log("stuff")
}

function computerchoice(){

    let choice = "./img/Lösungs_Bild.png";

    return choice;
}
document.onclick = function(){
    document.getElementById('someImage').src=computerchoice();
};

function playersChoice(){

    computerchoice();
    return console.log("miauuuuuuuu");
}

