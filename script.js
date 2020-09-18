window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) { //do these things on submit
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]"); 
      let cargoMass = document.querySelector("input[name=cargoMass]");


      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         
      } else if (typeof pilotName !== 'string' || typeof copilotName !== 'string' || isNan(fuelLevel) || isNan(cargoMass)) {
         alert("Form is invalid. Please try again."); 
         event.preventDefault();

      } 
/*
      let button = document.getElementById(pilotStatus);
      let paragraph = document.getElementById(copilotStatus);
      let missionAbort = document.getElementById(fuelStatus);
      let missionAbort = document.getElementById(cargoStatus);

      console.log(`Pilot ${pilotName.value} is ready for launch`)
      console.log(`Co-pilot ${copilotName.value} is ready for launch`)
      console.log(`Pilot ${pilotName.value} is ready for launch`)

*/

   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
