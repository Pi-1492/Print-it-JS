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
];

//const nb_slide = slides.length;
//let parentpoint = document.getElementById("dots");
let flechegauche = document.getElementById("left_arrow");
let flechedroite = document.getElementById("right_arrow");
let indice = 0;
let parcours = 0;
let banniereImage = document.getElementById("banner_img");
let parenttextebanniere = document.getElementById("tagLine");



//for (i=0;i<nb_slide;i++){
//	let nouveaupoint = `
//	<div class="dot" id=slide`+ i +`>
//	</div>
//	`
//parentpoint.innerHTML += nouveaupoint;
//console.log(i);
//}

flechegauche.addEventListener("click", () =>{
	console.log("Vous avez cliqué sur la fléche gauche");
	if(indice === 0){
		indice = 3;
		parcours = 0;
	}
	else {
		indice--;
		parcours = indice + 1;
	}
	let selecteur = document.getElementById("slide"+indice);
	let selecteur_precedent = document.getElementById("slide"+parcours);
	console.log(indice);
	console.log(slides[indice].image);
	selecteur.setAttribute("class","dot_selected");
	selecteur_precedent.setAttribute("class","dot");
	banniereImage.setAttribute("src","./assets/images/slideshow/"+slides[indice].image);

	parenttextebanniere.innerHTML = slides[indice].tagLine;

	
});

flechedroite.addEventListener("click", () =>{
	console.log("Vous avez cliqué sur la fléche droite");
	if(indice === 3){
		indice = 0;
		parcours = 3;
	}
	else {
		indice++;
		parcours = indice - 1;
	}
	let selecteur = document.getElementById("slide"+indice);
	let selecteur_precedent = document.getElementById("slide"+parcours);
	console.log(indice);
	console.log(slides[indice].image);
	selecteur.setAttribute("class","dot_selected");
	selecteur_precedent.setAttribute("class","dot");
	banniereImage.setAttribute("src","./assets/images/slideshow/"+slides[indice].image);
	parenttextebanniere.innerHTML = slides[indice].tagLine;

	

});


