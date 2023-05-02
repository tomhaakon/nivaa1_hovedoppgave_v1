// # Oppgave 8. Lag en sjekk på en variabel du sjekker ut.
//
//-	Lag disse variablene nedenfor:
//-	let name = “dittNavn”;
//-	let loggedIn = true;
//-	let price = 150;
//
//   - Skriv så noen sjekker som kan være mot disse.

function sjekkLoggetInn() {
  let loggedIn = true;
  let name = "Tom-Håkon";

  if (loggedIn) {
    tekst = "Du er logget inn";
    if (name == "Tom-Håkon") {
      navn_info = "Hei til meg selv";
    } else {
      navn_info = "Hei hvem er du?!";
    }
  } else {
    tekst = "Vennligst logg inn";
  }

  let gi_beskjed = (document.getElementById("info").innerHTML =
    tekst + "<br>" + navn_info);
}
function sjekk_pris() {
  let price = 150;
  let lommebok = 139;

  if (price > lommebok) {
    pris_info = "Sorry, prisen er for høy.";
  } else {
    pris_info = "Du har råd!";
  }
  let pinfo = (document.getElementById("pris_sjekk").innerHTML = pris_info);
  v_price = document.getElementById("pris").innerHTML = price;
  v_lommebok = document.getElementById("lmbok").innerHTML = lommebok;
}
sjekkLoggetInn();
sjekk_pris();
