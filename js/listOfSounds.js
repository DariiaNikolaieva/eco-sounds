const soundsBtnList = document.querySelector('.sound-btn-container');
const soundBtnActive = document.querySelectorAll('.menu-item');
const soundBtn = document.querySelector('.menu-item');
const soundListContainer = document.querySelector('.sound-list-container')
let soundList

const winterItems = [`<li class='winter-item'>winter1</li><li class='winter-item'>winter2</li><li class='winter-item'>winter3</li>`];
const springItems = [`<li class='spring-item'>spring1</li><li class='spring-item'>spring2</li><li class='spring-item'>spring3</li>`];
const summerItems = [`<li class='summer-item'>summer1</li><li class='summer-item'>summer2</li><li class='summer-item'>summer3</li>`];
const autumnItems = [`<li class='autumn-item'>autumn1</li><li class='autumn-item'>autumn2</li><li class='autumn-item'>autumn3</li>`];

const changeSoundList = function (event) {
    if(soundList) {
        soundListContainer.removeChild(soundList);
    }
    soundList = document.createElement('ul');
    soundList.classList.add(`${event.target.dataset.sound}-list`);
    console.log(event.target.dataset.sound)
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