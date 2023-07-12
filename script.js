// Write your JavaScript code here!

//This starts executing functions as the webpage finishes loading. Fetch is included to grab the planet data from handler page. It is then stored in listedPlanets. listedPlanetResponse is a promise that ultimately logs listedPlanets to page. 
//A planet is then randomly selected using pickPlanet() and it is formated on the page using the addDestinationInfo function.
window.addEventListener("load", function() {
  
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
     });
    
    
    //This portion of codes takes the "faultyItem element" and hides it if any are present. Acts as container for those items.
     let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
 
    
    //This event listener allows us to submit all the information typed into each field into each portion of form. This labels each section. The formsubmission takes the input and will update the live webpage. 
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
 
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
 
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
 
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
 });
