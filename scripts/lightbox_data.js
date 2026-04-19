"use strict";
/*    Semester Project
      Bed & Breakfast
      Image Gallery

      Author: Kylee Parks
      Date:   4/16/2026

      Filename: lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "Image Gallery";

// Names of the image files shown in the slideshow
let imgFiles = ["images/garden.png", "images/greenery_room.png", "images/floral_room.png", "images/greenhouse_workshop.png", "images/wedding.png", "images/pink_flower.png", "images/monarchs.png", "images/flower_field.png", "images/live_music_night.png", "images/chefs.png"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Complimentary breakfast on the patio";
imgCaptions[1]="Greenery room with boho decorations";
imgCaptions[2]="Floral room with pink roses decorations";
imgCaptions[3]="Greenhouse and workshop";
imgCaptions[4]="Wedding altar with hand-picked flowers";
imgCaptions[5]="Pink flower with morning dew";
imgCaptions[6]="Monarchs gathering by their favorite tree";
imgCaptions[7]="Beautiful flower field walk";
imgCaptions[8]="Live music nights!";
imgCaptions[9]="Our professional chefs making delicious breakfast for our guests";

// Count of images in the slideshow
let imgCount = imgFiles.length;