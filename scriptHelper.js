// Write your helper functions here!
require('isomorphic-fetch');

//Takes multiple paramaters and formats how we want to see it on the webpage. This makes up the Mission Target portion of website and uses information pulled with json.
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
        `;
  }

//This function checks the input for conditions such as if the field is empty, if it is not a number, or if it is a number. Returns message based on input.
function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
  }


//first part of function ties the what is referenced in hmtl here
  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const fuel = document.getElementById("fuelStatus");
    const cargo = document.getElementById("cargoStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const launchStatus = document.getElementById("launchStatus");

  //if these fields are blank an alert is shown saying they cannot be blank
    if (!pilot || !copilot || !fuelLevel || !cargoLevel) {
    alert("All fields are required!");
  
  //if numbers are not in these fields it will produce an alert saying it is not valid
  } else if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
  
    alert("Make sure to enter valid information for each field!");
  
  } else {
    
    //this creates a visible message at bottom of sceen depending on information typed in
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000 && cargoLevel <= 10000) {
      fuel.innerHTML = "Fuel level too low for launch";
      cargo.innerHTML = "Cargo mass low enough for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E"; //red
    
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
      fuel.innerHTML = "Fuel level high enough for launch";
      cargo.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E"; //red
   
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
      fuel.innerHTML = "Fuel level too low for launch";
      cargo.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E"; //red
    
    } else {
      fuel.innerHTML = "Fuel level high enough for launch";
      cargo.innerHTML = "Cargo mass low enough for launch";
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "#419F6A"; //green
    }
  }
}


//this functions pulls the information shown at top of page from includes site. If the data cannot be pulled due to an error code it will throw error, "cannot fetch data"
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error ('Cannot fetch data');
        } else {
            return response.json();
        }
    });

        return planetsReturned;
}

//this randomizes the planet pulled so each time page is refreshed the mission/planet changes
function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
