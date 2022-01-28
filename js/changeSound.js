let audio = document.querySelector(".audio");

document.addEventListener("click", function(event) { 
    if(event.target.classList.contains('sound-item')) {
        image.src = `/assets/images/${event.target.dataset.image}.jpg`
    }
});