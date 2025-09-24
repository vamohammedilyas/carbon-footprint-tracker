# 🌍 EcoTrack — Carbon Footprint Tracker

[Live Demo](https://vamohammedilyas.github.io/carbon-footprint-tracker/)  

A web app that lets users estimate their daily carbon footprint based on car travel, electricity usage, and diet. It also gives simple tips to reduce emissions.

---

## 🧩 Features

- Input fields for:
  - Kilometers traveled by car
  - Electricity usage (kWh)
  - Number of non-vegetarian meals per day  
- Calculates an approximate daily carbon footprint in **kg CO₂**  
- Displays tailored tips based on the footprint  
- Clean, responsive UI  
- Live deployment on GitHub Pages  

---


## 🛠️ Technologies Used

- **HTML** — for content and form elements  
- **CSS** — for styling, layout, responsiveness  
- **JavaScript** — for logic, calculations, interaction  

---

---

## 🧮 How It Works (Logic)

1. The user enters:
   - Distance traveled by car (in km)  
   - Electricity usage (in kWh)  
   - Number of non-veg meals per day  
2. JavaScript takes those inputs and multiplies by emission factors:
   - `carEmission = km × 0.21 kg CO₂ per km`  
   - `electricityEmission = kWh × 0.85 kg CO₂ per kWh`  
   - `mealsEmission = meals × 2.5 kg CO₂ per non-veg meal`  
3. Total footprint = sum of all emissions (rounded)  
4. Based on the total, a tip message is shown:
   - Low footprint → praise  
   - Moderate → suggestions  
   - High → caution + advice  

---

## Project Structure

```bash
---Basic_demo_ecommerce_app/
│
├── index.html # Main HTML file
├── style.css # CSS styles for layout and design
├── script.js # JavaScript logic for interactivity
├── README.md # Project documentation




