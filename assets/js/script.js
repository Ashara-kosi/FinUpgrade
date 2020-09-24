let preloader = document.querySelector(".spinner-wrapper");

let preloaderFunction = () =>{

        preloader.style.display = 'none';   
}
const next = document.querySelector(".carousel-next");
const prev = document.querySelector(".carousel-prev")

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        prev,
        next
    ],
    responsive:{
        300:{
            items:1
       },
         1000:{
            items:3
        }
     }
})