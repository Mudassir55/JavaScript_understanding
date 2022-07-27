'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');
const openmodal = document.querySelectorAll('.show-modal')

for (let i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    });
    closemodal.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
    overlay.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    })

    //for esc key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                overlay.classList.add('hidden')
            }
        }
    })

}