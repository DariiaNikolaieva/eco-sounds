const soundsBtnList = document.querySelector('.sound-btn-container');
const soundBtnActive = document.querySelectorAll('.menu-item');
const soundBtn = document.querySelector('.menu-item');
const soundListContainer = document.querySelector('.sound-list-container')
let soundList;

const winterItems = [`<li class='winter-item'><button class='sound-item' data-image='winter1'>winter1</button></li><li class='winter-item'><button class='sound-item' data-image='winter2'>winter2</button></li><li class='winter-item'><button class='sound-item' data-image='winter3'>winter3</button></li>`];
const springItems = [`<li class='spring-item'><button class='sound-item' data-image='spring1'>spring1</button></li>`];
const summerItems = [`<li class='summer-item'><button class='sound-item' data-image='summer1'>summer1</button></li>`];
const autumnItems = [`<li class='autumn-item'><button class='sound-item' data-image='autumn1'>autumn1</button></li>`];

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
}

soundsBtnList.addEventListener('click', changeSoundList);