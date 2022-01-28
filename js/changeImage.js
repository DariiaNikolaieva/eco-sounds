let image = document.querySelector(".image");

document.addEventListener("click", function(event) { 
    if(event.target.classList.contains('sound-item')) {
        image.src = `/assets/images/${event.target.dataset.image}.jpg`
    }
});

document.addEventListener('click', e => console.log(e.target))