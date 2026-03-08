function calculateCarbon() {
  var transportation = parseFloat(document.getElementById("transportation").value);
  var energy = parseFloat(document.getElementById("energy").value);
  var diet = parseFloat(document.getElementById("diet").value);


  var carbonFootprint = (transportation * 0.2) + (energy * 0.15) + (diet * 2.5);
  
  document.getElementById("result").innerHTML = "<h3>Your estimated carbon footprint:</h3><p>" + carbonFootprint + " metric tons CO2e per year</p>";
}






