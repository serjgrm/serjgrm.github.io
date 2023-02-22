'use strict';
import {modalThanks,modalError} from './forms';

function openModal(modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimer);
    window.removeEventListener('scroll', showModalByScroll);
}
function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';

}
const modalMain = document.querySelector('.modal__main');

function showModalByScroll() {
    if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1) {
        openModal(modalMain);
        window.removeEventListener('scroll', showModalByScroll);
    }
}

function modal() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalClose = document.querySelectorAll('.modal__close');


    modalTrigger.forEach(item => {
        item.addEventListener('click',()=>openModal(modalMain));
    });

    modalClose.forEach(item=>{
        item.addEventListener('click', ()=>{
            closeModal(modalMain);
            closeModal(modalThanks);
            closeModal(modalError);
        });
    });
    
    document.documentElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__main') || e.target.classList.contains('modal__thanks') || e.target.classList.contains('modal__error')) {
            closeModal(e.target);
        }
    });

    window.addEventListener('scroll', showModalByScroll);
    // const modalTimer = setTimeout(openModal,5000);
}

export default modal;
export {openModal,closeModal,modalMain}; 
