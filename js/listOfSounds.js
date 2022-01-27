const soundsBtnList = document.querySelector('.sound-btn-container');
const soundBtnActive = document.querySelectorAll('.menu-item');
const soundBtn = document.querySelector('.menu-item');
const soundListContainer = document.querySelector('.sound-list-container')
let soundList

const changeSoundList = function (event) {
    if(soundList) {
        soundListContainer.removeChild(soundList);
    }
    console.log(event.target)
    soundList = document.createElement('ul');
    soundList.classList.add(`${event.target.dataset.sound}-list`);
    soundListContainer.appendChild(soundList)
}

soundsBtnList.addEventListener('click', changeSoundList);