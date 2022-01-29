const soundsBtnList = document.querySelector('.sound-btn-container');
const soundBtnActive = document.querySelectorAll('.menu-item');
const soundBtn = document.querySelector('.menu-item');
const soundListContainer = document.querySelector('.sound-list-container');
const text = document.querySelector('.img-text');
const audioPlayerContainer = document.querySelector('.audio-player');
let soundList;

const winterItems = [`<li class='winter-item'><button class='sound-item active-sound-btn' data-image='winter1'>Snow steps</button></li><li class='winter-item'><button class='sound-item' data-image='winter2'>Fireplace roar</button></li><li class='winter-item'><button class='sound-item' data-image='winter3'>Penguin scream</button></li>`];
const springItems = [`<li class='spring-item'><button class='sound-item active-sound-btn' data-image='spring1'>Birdsong</button></li><li class='spring-item'><button class='sound-item' data-image='spring2'>Fresh rain</button></li><li class='spring-item'><button class='sound-item' data-image='spring3'>Bees buzzing</button></li>`];
const summerItems = [`<li class='summer-item'><button class='sound-item active-sound-btn' data-image='summer1'>Seashore</button></li><li class='summer-item'><button class='sound-item' data-image='summer2'>Cricket sound</button></li><li class='summer-item'><button class='sound-item' data-image='summer3'>Poultry yard</button></li>`];
const autumnItems = [`<li class='autumn-item'><button class='sound-item active-sound-btn' data-image='autumn1'>Foliage</button></li><li class='autumn-item'><button class='sound-item' data-image='autumn2'>Freezing rain</button></li><li class='autumn-item'><button class='sound-item' data-image='autumn3'>Flocks of cranes</button></li>`];

const changeSoundList = function (event) {
    if(soundList) {
        soundListContainer.removeChild(soundList);
    }
    text.remove();
    soundList = document.createElement('ul');
    soundList.classList.add('sound-list');
    audioPlayerContainer.classList.remove('hidden');
    if (event.target.dataset.sound === 'winter') {
        soundList.innerHTML = winterItems;
        image.src = './assets/images/winter1.jpg';
        audio.src = './assets/sounds/winter1.mp3';
        audio.play();
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");  
    } else if (event.target.dataset.sound === 'spring') {
        soundList.innerHTML = springItems;
        image.src = './assets/images/spring1.jpg';
        audio.src = './assets/sounds/spring1.mp3';
        audio.play();
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
    } else if (event.target.dataset.sound === 'summer') {
        soundList.innerHTML = summerItems;
        image.src = './assets/images/summer1.jpg';
        audio.src = './assets/sounds/summer1.mp3';
        audio.play();
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
    } else if (event.target.dataset.sound === 'autumn') {
        soundList.innerHTML = autumnItems;
        image.src = './assets/images/autumn1.jpg';
        audio.src = './assets/sounds/autumn1.mp3';
        audio.play();
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
    }
    soundListContainer.appendChild(soundList);
}

const changeClassActive = function (event) {
    soundBtnActive.forEach((elem) => {
      elem.classList.remove("active-menu-btn");
    });
    event.target.classList.add("active-menu-btn");
  };

soundsBtnList.addEventListener('click', changeSoundList);
soundsBtnList.addEventListener('click', changeClassActive);