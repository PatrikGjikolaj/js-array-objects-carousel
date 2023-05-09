const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


document.querySelector("#slideText h1").innerText = images[0].title;
document.querySelector("#slideText h2").innerText = images[0].text;

const slideUno = `<img class="img-fluid" src="${images[0].image}" alt="${images[0].title}"></img>`;
document.getElementById("imgVista").innerHTML = slideUno;

let thumbnails = "";
for (let i = 0; i < images.length; i++) {
    const element = images[i];

    thumbnails += `<img class="img-fluid" src="${images[i].image}" alt="${images[i].title}"></img>`;
    // thumbnails += currentThumb;
}

// document.getElementById("imgNascosta").innerHTML += thumbnails;

let currentSlide = 0;

document.getElementById("btnBack").addEventListener("click", function() {
    if (currentSlide == 0) {   
        currentSlide = images.length - 1;
        cambiaFoto(currentSlide)
    }else{
        cambiaFoto(currentSlide-1);
    }
});



document.getElementById("btnForward").addEventListener("click", function() {

    if (currentSlide == images.length-1) {   
        currentSlide = 0;
        cambiaFoto(currentSlide)
    }else{
        cambiaFoto(currentSlide+1)
    }
});

function cambiaFoto(toSlide) {

    if (toSlide >= 0 && toSlide <= images.length) {
        currentSlide = toSlide;
        const currentObj = images[toSlide];
        document.getElementById("imgVista").src = currentObj.image;
        document.querySelector("#slideText h1").innerText = currentObj.title;
        document.querySelector("#slideText h2").innerText = currentObj.text;
        console.log(toSlide)
    }
}




























// images.forEach((elements, index, array) => {
        
//     nuovoDiv = document.createElement("h1");
//     nuovoDiv1 = document.createElement("p");
//     nuovoDiv2 = document.createElement("img");
//     nuovoDiv.innerText = elements.title;
//     nuovoDiv1.innerText = elements.text;
//     nuovoDiv2.src = elements.image;
//     griglia.appendChild(nuovoDiv);
//     griglia.appendChild(nuovoDiv1);
//     griglia.appendChild(nuovoDiv2);
//     nuovoDiv.classList.add("scheda", "my-3", "titolo");
//     nuovoDiv1.classList.add("scheda", "my-3", "descrizione");
//     nuovoDiv2.classList.add("scheda", "my-3");

// });

    // nuovoDiv.classList.add("hidden");
    // nuovoDiv1.classList.add("hidden");
    // nuovoDiv2.classList.add("hidden");



// for (let i = 0; i < images.length; i++) {

//     nuovoDiv.classList.add("hidden");
//     nuovoDiv1.classList.add("hidden");
//     nuovoDiv2.classList.add("hidden");
// } 


// let btnBack = document.getElementById("btnBack");

// let slideCorrente = 0;
// let ultimaSlideConTastoNext = 5;

// btnBack.addEventListener("click", function(){

//     console.log("Current Slide: ", slideCorrente);

//     if(slideCorrente>0) {
//         for (let c = 0; c < images.length; c++) {
//                 const slide = images[c];

//             if(c == slideCorrente-1 ) {
//                 slide.classList.remove("hidden");
//             } else {
//                 slide.classList.add("hidden");
//             }
//         }
        
//         slideCorrente--;
//     }
// });

// let bntForward = document.getElementById("btnForward");

// bntForward.addEventListener("click", function(){

//     console.log("Current Slide: ", slideCorrente);

//     if(slideCorrente < ultimaSlideConTastoNext) {
//         for (let c = 0; c < slideEls.length; c++) {
//             const slide = slideEls[c];

//             if(c == slideCorrente+1 ) {
//                 slide.classList.remove("hidden");
//             } else {
//                 slide.classList.add("hidden");
//             }
//         }
//         slideCorrente++;
//     }

// });