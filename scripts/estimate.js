/*    Semester Project
      Bed & Breakfast
      Estimate

      Author: Kylee Parks
      Date:   4/8/2026

      Filename: estimate.js
*/

// Declare constants
const SINGLE_RATE  = 80;
const DOUBLE_RATE  = 150;
const TRIPLE_RATE  = 200;
const BREAKFAST_PRICE = 14;
const WORKSHOP_PRICE  = 25;
const PARKING_PRICE   = 5;

// Event handlers
document.getElementById("room_greenery").onclick = calculateEstimate;
document.getElementById("room_floral").onclick = calculateEstimate;
document.getElementById("guests").onclick = calculateEstimate;
document.getElementById("nights").onclick = calculateEstimate;
document.getElementById("breakfast").onclick = calculateEstimate;
document.getElementById("workshop").onclick = calculateEstimate;
document.getElementById("parking").onclick = calculateEstimate;

// calculateEstimate() function
function calculateEstimate() {
	let roomRadio = document.querySelector('input[name="room"]:checked');

	// Stop if no room is selected yet
	if (!roomRadio) return;

	// Read selections
	let guests = parseInt(document.getElementById("guests").value);
	let nights = parseInt(document.getElementById("nights").value);
	let breakfast = document.getElementById("breakfast").checked;
	let workshop = document.getElementById("workshop").checked;
	let parking = document.getElementById("parking").checked;

	// Pick nightly rate based on number of guests
	let nightlyRate;
	if (guests === 1) nightlyRate = SINGLE_RATE;
	else if (guests === 2) nightlyRate = DOUBLE_RATE;
	else nightlyRate = TRIPLE_RATE;

	// Calculate costs
	let roomCost = nightlyRate * nights;
	let breakfastCost = breakfast ? BREAKFAST_PRICE * guests * nights : 0;
	let workshopCost = workshop  ? WORKSHOP_PRICE * guests : 0;
	let parkingCost = parking   ? PARKING_PRICE * nights : 0;
	let total = roomCost + breakfastCost + workshopCost + parkingCost;

	// Display results
	document.getElementById("line_room").innerHTML = formatCurrency(roomCost);
	document.getElementById("line_breakfast").innerHTML = formatCurrency(breakfastCost);
	document.getElementById("line_workshop").innerHTML = formatCurrency(workshopCost);
	document.getElementById("line_parking").innerHTML = formatCurrency(parkingCost);
	document.getElementById("summary_total").innerHTML = formatCurrency(total);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
	return "$" + value.toFixed(2);
}