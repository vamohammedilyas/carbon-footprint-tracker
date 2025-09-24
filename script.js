document.getElementById("footprintForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let carKm = parseFloat(document.getElementById("car").value) || 0;
  let electricity = parseFloat(document.getElementById("electricity").value) || 0;
  let meals = parseFloat(document.getElementById("meals").value) || 0;

  // Approximate emission factors 
  let carEmission = carKm * 0.21;       // kg CO2 per km
  let electricityEmission = electricity * 0.85; // kg CO2 per kWh
  let mealsEmission = meals * 2.5;      // kg CO2 per non-veg meal

  let total = (carEmission + electricityEmission + mealsEmission).toFixed(2);

  let tips = "";
  if (total < 10) {
    tips = "Great job 🌱! You're keeping your carbon footprint low.";
  } else if (total < 30) {
    tips = "Not bad! 🚴 Try cycling more and saving electricity.";
  } else {
    tips = "⚠️ High footprint! Consider switching to renewables and reducing meat intake.";
  }

  document.getElementById("result").innerHTML = `
    Your daily carbon footprint: <b>${total} kg CO₂</b><br><br>
    ${tips}
  `;
});
