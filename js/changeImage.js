let image = document.querySelector(".image");

document.addEventListener("click", function(event) { 
    if(event.target.classList.contains('sound-item')) {
        image.src = `/assets/images/${event.target.dataset.image}.jpg`
    }
});

document.addEventListener("click", function(event) { 
    // const active = document.querySelectorAll('.sound-item');
    if(event.target.classList.contains('sound-item')) {
        const itemsBtns = document.querySelectorAll('.sound-item');
        itemsBtns.forEach(elem => elem.classList.remove("active-sound-btn"))
        // document.classList.remove("active-sound-btn")
        event.target.classList.add("active-sound-btn");
    }
});