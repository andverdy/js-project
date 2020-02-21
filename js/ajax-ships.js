function showStarShips() {
  
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = callShips;

  xmlhttp.open("GET", "https://swapi.co/api/starships/", true);
  xmlhttp.send();
  
}

function callShips() {
	console.log("risposta ricevuta")
  if (this.readyState == 4 && this.status == 200) {
 
    var responseObject = JSON.parse(this.responseText);
    var ships = responseObject.results;

    var htmlGen = "";
    for (var c of ships) {
      htmlGen += "<p>" + c.name + " " + c.model + "</p>";
    }
    document.getElementById("prova").innerHTML = htmlGen;
  }
}
