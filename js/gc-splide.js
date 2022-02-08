document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        updateOnMove: true,
        cover:true, 
        heightRatio:0.50,
        type: 'loop',
        padding: '12rem',
        gap: '1.5rem',
        autoplay: true,
        
        
    }).mount();
});


