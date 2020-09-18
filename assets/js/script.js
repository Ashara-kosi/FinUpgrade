let preloader = document.querySelector(".spinner-wrapper");

let preloaderFunction = () =>{

        preloader.style.display = 'none';   
}

window.addEventListener('load', preloaderFunction)

$('.owl-carousel').owlCarousel({
     loop:true,
    margin:10,
    nav:true,
    responsive:{
        300:{
            items:1
       },
         1000:{
            items:3
        }
     }
})