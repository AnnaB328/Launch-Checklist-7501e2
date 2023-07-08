// Write your helper functions here!
require('isomorphic-fetch');

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


function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else if (isNaN(numberInput) === false)
    {
        return "Is a Number";
    }
  }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const fuel = document.getElementById("fuelStatus");
    const cargo = document.getElementById("cargoStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
     const launchStatus = document.getElementById("launchStatus");

  if (!pilot || !copilot || !fuelLevel || !cargoLevel) {
    alert("All fields are required!");
  } else if (isNaN(fuelLevel) || isNaN(cargoLevel)) {
    alert("Make sure to enter valid information for each field!");
  } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000 && cargoLevel <= 10000) {
      fuel.innerHTML = "Fuel level too low for launch";
      cargo.innerHTML = "Cargo mass low enough for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
      fuel.innerHTML = "Fuel level high enough for launch";
      cargo.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
      fuel.innerHTML = "Fuel level too low for launch";
      cargo.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else {
      fuel.innerHTML = "Fuel level high enough for launch";
      cargo.innerHTML = "Cargo mass low enough for launch";
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "#419F6A";
    }
  }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
