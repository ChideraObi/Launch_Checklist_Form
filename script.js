window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) { //do these things on submit
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]"); 
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         
      } else if (typeof pilotName.value !== 'string' || typeof copilotName.value !== 'string' || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Form is invalid. Please try again.");
         
      } else {
         faultyItems.style.visibility = "visible"; 
         
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            //Accesses the linked JSON in response
            response.json().then( function(json) {
               const div = document.getElementById("missionTarget");
            //Populates data into HTML fields 
               div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}"> 
               `;
            });
         });

         launchStatus.innerHTML = `Shuttle is Ready for Launch`;
         launchStatus.style.color = "green";

         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

         if (fuelLevel.value < 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
            
            fuelStatus.innerHTML = `Fuel level is too low for launch`;
         } else {
            fuelStatus.innerHTML = `Fuel level is high enough for launch`;
         }
         if (cargoMass.value > 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "red";
            
            cargoStatus.innerHTML = `Cargo mass is too high for launch`;
         } else {
            cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
         }
      }
   
         
         
         
   });
});

