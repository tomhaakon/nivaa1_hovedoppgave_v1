let beskjed = "dette er en alert av ";
let person = "Tom-Håkon";

document.getElementById("navn").innerHTML = person;

function MinFunksjon() {
  alert("Hei " + location.hostname + ", " + beskjed + person);
}
