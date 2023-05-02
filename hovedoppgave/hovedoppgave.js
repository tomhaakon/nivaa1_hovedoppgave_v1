/*##############################################################
################################################################
//Funksjon vis side//-----------------------------------------*/
visSide = (elementID) => {
  const ele = document.getElementById(elementID); // får ikke til å bruke querySelector med variabel? <---------------- !!!!!!!!!
  /* hvis det ikke finnes noe element med id si ifra */
  if (!ele) {
    alert("finner ikke element.");
    return;
  }
  /* hent alle klasser med class="side"  */
  const sider = document.querySelectorAll(".side");
  /* for alle sider som finnes i htmldokumentet med class="side" -> skjul hver og en */
  for (let i = 0; i < sider.length; i++) {
    sider[i].style.display = "none";
  }
  /* så, vis frem elementet som kommer fra elementID */
  ele.style.display = "block";
};
// hent knappen "send_beskjed" fra html
const knapp = document.querySelector("#send_beskjed");
// modal for kontakt skjema
const modal = document.querySelector("#modal_beskjed");
// hent span med classe avbryt for krysset
const avbryt = document.getElementsByClassName("modal_avbryt")[0];

// funksjon åpne block om knapp trykkes
knapp.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// når span knappen kryss trykkes, lukk modal display
avbryt.addEventListener("click", () => {
  modal.style.display = "none";
});

// hvis man trykker utenfor boksen, steng display
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

/*##############################################################
################################################################
//Interesse siden//-------------------------------------------*/

visInteresser = (elementID) => {
  const ele = document.getElementById(elementID);
  if (!ele) {
    alert("finner ikke element.");
    return;
  }
  const visninger = document.getElementsByClassName("visning");
  /*  vis bare en og ganger, altså skjul alle som ikke er aktiv */
  for (let i = 0; i < visninger.length; i++) {
    visninger[i].style.display = "none";
  }
  /* så, vis frem elementet som kommer fra elementID */
  ele.style.display = "block";
};
// knapper for å velge kategori og vise hvem som er aktiv
const knappBoks = document.getElementById("knappBoks");
const knapper = knappBoks.getElementsByClassName("bilde_knapp");
for (let i = 0; i < knapper.length; i++) {
  knapper[i].addEventListener("click", function () {
    const aktiv = document.getElementsByClassName("aktiv");
    aktiv[0].className = aktiv[0].className.replace(" aktiv", "");
    this.className += " aktiv";
  });
}
/*##############################################################
################################################################
// bilde visning //-------------------------------------------*/
fjernKlasse = (element, navn) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = navn.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};
kategoriFilter = (k) => {
  let x, i;
  x = document.getElementsByClassName("bilde_kolonne");
  if (k == "alt") k = "";
  for (i = 0; i < x.length; i++) {
    fjernKlasse(x[i], "bilde_vis");
    if (x[i].className.indexOf(k) > -1) addClass(x[i], "bilde_vis");
  }
};

addClass = (element, navn) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = navn.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
};
kategoriFilter("alt");
