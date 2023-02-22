
import {closeModal,openModal,modalMain} from './modal';
const modalThanks = document.querySelector('.modal__thanks'),
      modalError = document.querySelector('.modal__error');

function forms () {
    const forms = document.querySelectorAll('form');
        forms.forEach(form=>{
            form.addEventListener('submit',(e)=> {

                e.preventDefault();
                postData(form);
            });
        });
    async function getResource (url,data){
        const posst = await fetch(url,{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: data
        });
        return await posst.json();
    }
        function postData (form){    
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            getResource('http://localhost:3000/requests',json)
            .then(()=>{
                closeModal(modalMain);
                openModal(modalThanks);
            }).catch(()=>{
                closeModal(modalMain);
                closeModal(modalThanks);
                openModal(modalError);
            }).finally(()=>{
                form.reset();
            });
        }
}
export default forms;
export {modalThanks,modalError};








