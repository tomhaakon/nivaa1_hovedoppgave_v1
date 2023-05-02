/* # Oppgave 9. 
    
    Lag en modal vindu til kontakt oss i navbaren.
-	Når man trykker på denne knappen, så skal en modal komme frem.
-	Den skal inneholde 3 felt.

-	Navn.
-	Epost.
-	Beskjed.
-	2 knapper.
-	Avbryt
-	Send

-	Dersom man klikker send, så skal en alert komme frem som forteller at man har sendt skjemaet.
*/
// Hent modal myModal
var modal = document.getElementById("myModal");

// hent knapp myBtn som skal åpne modalen
var btn = document.getElementById("myBtn");

// hent span som skal stenge modalen
var span = document.getElementsByClassName("close")[0];

// Hent element med ID avbryt
var closebtn = document.getElementById("avbryt");

//Hent element med id sendForm
var SendInn = document.getElementById("sendForm");

// kryssknapp
closebtn.onclick = function () {
  modal.style.display = "none";
};
// funksjon som åpner modalen via knapp btn
btn.onclick = function () {
  modal.style.display = "block";
};

// <span> (x) steng modalen om man trykker på kryss
span.onclick = function () {
  modal.style.display = "none";
};

// funksjon som gjør en alert som sier at skjemaet er sendt inn
SendInn.onclick = function () {
  alert("Skjemaet er nå sendt inn.");
};
