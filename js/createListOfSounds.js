const soundsBtnList = document.querySelector('.sound-btn-container');
const soundBtnActive = document.querySelectorAll('.menu-item');
const soundBtn = document.querySelector('.menu-item');
const soundListContainer = document.querySelector('.sound-list-container')
let soundList;

const winterItems = [`<li class='winter-item'><button class='sound-item'>winter1</button></li>`];
const springItems = [`<li class='spring-item'><button class='sound-item'>spring1</button></li>`];
const summerItems = [`<li class='summer-item'><button class='sound-item'>summer1</button></li>`];
const autumnItems = [`<li class='autumn-item'><button class='sound-item'>autumn1</button></li>`];

const changeSoundList = function (event) {
    if(soundList) {
        soundListContainer.removeChild(soundList);
    }
    soundList = document.createElement('ul');
    soundList.classList.add('sound-list');
    if (event.target.dataset.sound === 'winter') {
        soundList.innerHTML = winterItems;
    } else if (event.target.dataset.sound === 'spring') {
        soundList.innerHTML = springItems;
    } else if (event.target.dataset.sound === 'summer') {
        soundList.innerHTML = summerItems;
    } else if (event.target.dataset.sound === 'autumn') {
        soundList.innerHTML = autumnItems;
    }
    soundListContainer.appendChild(soundList);
    
    const changeImgBtn = document.querySelector(".sound-item");
    const image = document.querySelector(".image");
    
    changeImgBtn.addEventListener("click", changeImage);
}

soundsBtnList.addEventListener('click', changeSoundList);