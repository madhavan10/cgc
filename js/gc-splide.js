document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        updateOnMove: true,
        cover:true, 
        heightRatio:0.50,
        type: 'loop',
        padding: '15%',
        gap: '6%',
        autoplay: true,       
    }).mount();
});


