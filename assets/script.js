const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des éléments du carrousel
const carousel = document.querySelector('#banner');
const prevArrow = carousel.querySelector('.arrow_left');
const nextArrow = carousel.querySelector('.arrow_right');

const img1 = carousel.querySelector('#banner-img1');
const img2 = carousel.querySelector('#banner-img2');
const img3 = carousel.querySelector('#banner-img3');
const img4 = carousel.querySelector('#banner-img4');

const tagLine = carousel.querySelector('.tagLine');

const dot1 = carousel.querySelector('#dot1');
const dot2 = carousel.querySelector('#dot2');
const dot3 = carousel.querySelector('#dot3');
const dot4 = carousel.querySelector('#dot4');


// Écouteur d'événement pour la flèche précédente
prevArrow.addEventListener('click', function() {
  // Code pour naviguer vers l'image précédente dans le carrousel
 var activeimagePrev = carousel.querySelector(".active");
 var nameimagePrev = carousel.querySelector(".active").src.split("/")[11];
 var activedot = carousel.querySelector(".dot_selected");
 switch (nameimagePrev) {
 	case slides[0].image:
		activeimagePrev.classList.remove("active");
		img4.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot4.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[3].tagLine);
	break;
	case slides[1].image:
		activeimagePrev.classList.remove("active");
		img1.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot1.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[0].tagLine);
	break;
	case slides[2].image:
		activeimagePrev.classList.remove("active");
		img2.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot2.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[1].tagLine);
	break;
	case slides[3].image:
		activeimagePrev.classList.remove("active");
		img3.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot3.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[2].tagLine);
	break;
}
});

// Écouteur d'événement pour la flèche suivante
nextArrow.addEventListener('click', function() {
  // Code pour naviguer vers l'image suivante dans le carrousel
  var activeimageNext = carousel.querySelector(".active");
  var nameimageNext = carousel.querySelector(".active").src.split("/")[11];
  var activedot = carousel.querySelector(".dot_selected");
  switch (nameimageNext) {
	  case slides[0].image:
		activeimageNext.classList.remove("active");
		img2.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot2.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[1].tagLine);
	 break;
	 case slides[1].image:
		activeimageNext.classList.remove("active");
		img3.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot3.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[2].tagLine);
	 break;
	 case slides[2].image:
		activeimageNext.classList.remove("active");
		img4.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot4.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[3].tagLine);
	 break;
	 case slides[3].image:
		activeimageNext.classList.remove("active");
		img1.classList.add("active");
		
		activedot.classList.remove("dot_selected");
		dot1.classList.add("dot_selected");
		
		tagLine.setHTMLUnsafe(slides[0].tagLine);
	 break;
  }
});