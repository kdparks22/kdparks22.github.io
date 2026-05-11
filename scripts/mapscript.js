/*  Semester Project
      Bed & Breakfast
      Map Script

      Author: Kylee Parks
      Date:   5/6/2026

      Filename: mapscript.js
*/


// Coordinates
var lat = 33.9137;
var lon = -98.4934;

// Initialize Map
var map = L.map('map').setView([lat, lon], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add Marker
var marker = L.marker([lat, lon]).addTo(map);
marker.bindPopup("<b>Secret Garden Getaway</b><br>Loading weather...").openPopup();

// Weather Fetch
fetch("https://api.weather.gov/points/" + lat + "," + lon)
	.then(function(res) { return res.json(); })
	.then(function(data) { return fetch(data.properties.forecast); })
	.then(function(res) { return res.json(); })
	.then(function(weather) {
		var current = weather.properties.periods[0];
		marker.setPopupContent("<b>Secret Garden Getaway</b><br>" + current.temperature + "°F and " + current.shortForecast);
	})
	.catch(function(err) {
		marker.setPopupContent("<b>Secret Garden Getaway</b><br>Weather unavailable");
	});