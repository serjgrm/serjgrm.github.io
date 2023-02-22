function calc (){


// const result = document.querySelector('.calculating__result span');
// let sex, height, weight, age, ratio;
//     if (localStorage.getItem('sex')){
//         sex = localStorage.getItem('sex');
//     } else {
//         sex = 'female';
//         localStorage.setItem('sex','female');
//     }
//     if (localStorage.getItem('ratio')){
//         ratio = localStorage.getItem('ratio');
//     } else {
//         ratio = 1.375;
//         localStorage.setItem('ratio',1.375);
//     }
//     function initLocalSettings (selector,activeClass){
//         const elements = document.querySelectorAll(selector);
//     }
// function calcTotal() {
//     if (!sex || !height || !weight || !age || !ratio){
//         result.textContent = '____';
//         return;
//     }
//     if (sex === 'female'){
//         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
//     } else {
//         result.textContent = Math.round(( 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
//     }
// }
// calcTotal();
// function getStaticInformation (parentSelector,activeClass){
//     const elements = document.querySelectorAll(`${parentSelector} div`);
//     document.querySelector(parentSelector).addEventListener('click',(e)=>{

//         if (e.target.getAttribute('data-ratio')){
//             ratio = +e.target.getAttribute('data-ratio');
//             localStorage.setItem('ratio',+e.target.getAttribute('data-ratio'));
//         }   else {
//             sex = e.target.getAttribute('id');
//             localStorage.setItem('sex',e.target.getAttribute('id'));
//         }
//         console.log(ratio, sex);
//         elements.forEach(elem=>{
//             elem.classList.remove(activeClass);
//             if (e.target == elem){
//                 elem.classList.add(activeClass);
//             }
//         });
//         calcTotal();
//     });
// }

// getStaticInformation('#gender','calculating__choose-item_active');
// getStaticInformation('.calculating__choose_big','calculating__choose-item_active');
// function getDynamicInformation(selector){
//     const input = document.querySelector(selector);
//     input.addEventListener('input',()=>{
//         if (input.value.match(/\D/g)) {
//             input.style.border = '1px solid red';
//         } else {
//             input.style.border = '';
//         }
//         switch(input.getAttribute('id')){
//             case 'height':
//                 height = +input.value;
//                 break;
//             case 'weight':
//                 weight = +input.value;
//                 break;
//             case 'age':
//                 age = +input.value;
//                 break;
//         }
//         calcTotal();
//     });
// }

// getDynamicInformation('#height');
// getDynamicInformation('#weight');
// getDynamicInformation('#age');


// Мой вариант калькулятора 
const calcWrapper = document.querySelector('.calculating__field'),
      gender = document.querySelector('#gender'),
      genderChildren = document.querySelectorAll('#gender .calculating__choose-item'),
      load = document.querySelector('.calculating__choose_big'),
      loadChildren = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),
      calcRes = document.querySelector('.calculating__result span'),
      calcInputs = document.querySelectorAll('.calculating__choose_medium input');

let height,weight,age,state,active;
active = 1.375;
    function calcToggle (par, child){
        par.addEventListener('click',(e)=>{
            if (e.target.classList.contains('calculating__choose-item')){
                child.forEach(item=>{
                    item.classList.remove('calculating__choose-item_active');
                });
                e.target.classList.add('calculating__choose-item_active');
                if (e.target.id === 'male' || e.target.id === 'female'){
                    state = e.target.id;
                }  else if (e.target.getAttribute('data-ratio')){
                    active = +e.target.getAttribute('data-ratio');
                }
            }
            res();

        });
    };
    calcToggle(gender, genderChildren);
    calcToggle(load, loadChildren);
   function calcInput (input){
    input.forEach((item)=>{
        item.addEventListener('input',(e)=>{
            if (e.target.id == 'height'){
                height = +e.target.value;
            } else if (e.target.id == 'weight'){
                weight = +e.target.value;
            } else if (e.target.id == 'age'){
                age = +e.target.value;
            } 
            res();

        });
    });
   }
calcInput(calcInputs);
function res (){
    if (!height || !weight || !age || !state || !active){
        calcRes.textContent = '___';
    } else if (state == 'male'){
        calcRes.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * active); 
    }  else {
        calcRes.textContent = Math.round((448.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * active); 
    }
}
res();
}

export default calc;
