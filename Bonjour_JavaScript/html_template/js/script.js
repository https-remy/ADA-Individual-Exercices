var buttonGetInfo = document.getElementById("info");
var outputContainer = document.getElementById("output");
var ageUser = "";
var monthUser = "";

function askName() {
    var helloUser = "👋 Bonjour " + prompt("Hello quel est ton prénom ?") + " !";
    if (helloUser != null) {
        console.log(helloUser);
        resolve(helloUser);
    } else {
        console.log("Saisie du prénom annulé");
    }



}

function askAge() {
    ageUser = prompt("Hello quel est ton âge ?");
    monthUser = prompt("Quel est ton mois de naissance ?");
    console.log("Mont Use : " + monthUser);
    var msgAgeUser = "Vous avez " + ageUser + " ans";
    var monthUserInt = askMonth(monthUser);
    console.log("Month user in int = " + monthUserInt);

    if (ageUser != null) {
        console.log(ageUser);
    } else {
        console.log("Saisie de l'âge annulé.");
    }



}

function askMonth(monthUser) {
    var yearMonths = ["Janvier", "Février", "Mars",
        "Avril", "Mai", "Juin", "Juillet",
        "Août", "Septembre", "Octobre",
        "Novembre", "Décembre"];
    var i = 0;

    while (i < yearMonths.length) {
        if (yearMonths[i] == monthUser) {
            return i;
        } else {
            i++;
        }
    }
}


function getRealAge(msgAgeUser, monthUserInt) {
    var todayDate = new Date();
    var todayMonth = todayDate.getMonth() + 1;

    console.log("Today month = " + todayMonth);
    if (monthUserInt == todayMonth) {
        console.log("if");
        msgAgeUser += " pile";
        return msgAgeUser;
    } else if (monthUserInt < todayMonth) {
        console.log("Else if");
        var diffMonth = todayMonth - monthUserInt;
        msgAgeUser += " et " + diffMonth + " mois.";
        return msgAgeUser;
    } else {
        console.log("Else");
        var nextAgeUser = parseInt(ageUser) + 1;
        var diffMonth = monthUserInt - todayMonth + 1;
        msgAgeUser += " et vous aurez " + nextAgeUser + " dans " + diffMonth + " mois.";
        return msgAgeUser;
    }
}

buttonGetInfo.addEventListener("click", function() {

	

});
