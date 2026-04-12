/*    Semester Project
      Bed & Breakfast
      Reviews

      Author: Kylee Parks
      Date:   4/8/2026

      Filename: reviews.js
*/

// Reviewer names
let reviewers = ["Margaret & Tom H.", "Sophia L.", "Danny R.", "Kami & James B.", "Priscilla M.", "Ethan W.", "Dianna S.", "Carlos & Becky G."];

// Reviewer type (Prime/New)
let reviewType = ["P", "", "N", "P", "P", "", "P", ""]

// Star count
let stars = [5, 5, 4, 5, 5, 4, 5, 5];

// Reviewer dates
let reviewDates = ["March 2026", "February 2026", "January 2026", "December 2025", "November 2025", "October 2025", "September 2025", "August 2025"];

// Reviewer comments
let reviews = [
	"Beautiful scenery that grasps the true aspect of nature. Waking up to the garden views every morning was breath taking. Breakfast was very delicious, especially the fresh fruit they provide. We will be back for another stay!",
	"Booked the Greenery Room for a solo retreat and it exceeded my expectations. Very lush plants that are taken care of very well and the view from the window is perfect. Housekeeping did an amazing job. 10/10.",
	"Really lovely B&B with a warm, personal feel you don't get at a hotel. The room was clean and decorated thoroughly. I docked one star because the WiFi is pretty slow, but ended up enjoying the stay.",
	"We chose Secret Garden Getaway for our honeymoon and couldn't have picked a better place to go. The Floral Room's queen bed was incredibly comfortable and the staff left us a surprise basket with local honey and tea. We felt so cared for.",
	"Our garden wedding was perfect! The team handled all of the details of the venue and did an amazing job. Our guests complimented every detail and the food. The arch we stood under had fresh flowers and was simply breathtaking.",
	"Signed up for the flower arrangement workshop on a whim and had the best time. The instructor was knowledgeable and easy to talk to. Got to take home a lovely flower bouquet. This experience was amazing - highly recommend!",
	"I have stayed at many bed and breakfasts over the years and this one takes the cake. Every inch of Secret Garden Getaway was great for pictures and I was taken care of for the whole stay and will be coming back!",
	"The Greenery Room felt like sleeping in a terrarium in a good way. My partner and I loved the boho-natural vibe. We spotted several monarch butterflies!",
];

// Review titles
let reviewTitles = ["My Favorite Getaway", "Perfect Solo Retreat", "Lovely But Slow WiFi", "Best Honeymoon Spot", "Dream Garden Wedding", "Amazing Workshop", "Best B&B I've Stayed At", "Slept Like I Was In A Terrarium"];

// starImages() function | Generates star image based on reviewer rating
function starImages(rating) {
	let imageText = "";
	// Loop from 1 up to the rating number
	for (let i = 1; i <= rating; i++) {
		imageText += "<img src='images/star.png' alt=''>";
	}
	return imageText;
}

// Loop through all reviewers
for (let i = 0; i < reviewers.length; i++) {
	let reviewCode = "";
	
	// Determine table style based on review type (Prime/New)
	if (reviewType[i] === "P") {
		reviewCode += "<table class='prime'>";
	} else if (reviewType[i] === "N") {
		reviewCode += "<table class='new'>";
	} else {
		reviewCode += "<table class='basic'>";
	}
	
	// Table Layout
	reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
	reviewCode += "<tr><th>Review By:</th><td>" + reviewers[i] + "</td></tr>";
	reviewCode += "<tr><th>Review Date:</th><td>" + reviewDates[i] + "</td></tr>";
	reviewCode += "<tr><th>Rating (1-5):</th><td>" + starImages(stars[i]) + "</td></tr>";
	reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
	reviewCode += "</table>";
	
	// Inserts into <article> on reviews.html
	document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeEnd", reviewCode);
}