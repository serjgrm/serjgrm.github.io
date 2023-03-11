'use strict';
window.addEventListener('DOMContentLoaded',()=>{
    // Language shifting
    const langTrigger = document.querySelector('.promo__lang'),
          langRu = document.querySelectorAll('.ru'),
          langEn = document.querySelectorAll('.en');  
    langTrigger.addEventListener('click',(e)=>{
        if (e.target.classList.contains('en')) {
            langEn.forEach(item=>{
                item.classList.add('hide');
            });
            langRu.forEach(item=>{
                item.classList.remove('hide');
            });
        } else if (e.target.classList.contains('ru')){
            langRu.forEach(item=>{
                item.classList.add('hide');
            });
            langEn.forEach(item=>{
                item.classList.remove('hide');
            });
        }
    });
    const aside = document.querySelectorAll('aside a');
    function hideLinks () {
        if (document.documentElement.clientHeight + document.documentElement.scrollTop >= 
            document.documentElement.scrollHeight - 40){
                aside.forEach(item=>{
                    item.classList.add('hide');
                });
        } else {
            aside.forEach(item=>{
                item.classList.remove('hide');
            });
        }
    }
    window.addEventListener('scroll',hideLinks);


    // Portfolio description technologies used. 

    const portfolioItems = document.querySelectorAll('.portfolio__item'),
          portfolioItemDescriptions = document.querySelectorAll('.portfolio__item__descr');

    // const techUsedGenerallyArray = ['html','css','js','react','sass','scss','git',
    // 'bootstrap','responsive creation','photoshop','figma','flex','webpack','ajax','CRA','class components',
    // 'function components', 'jsx', 'setState', 'Life cycle hooks', 'API', 'React hooks', 'Custom hooks', 
    // 'React router', 'React-helmet', 'Finite state machine'
    // ];

    const html = document.querySelector('[data-tech="html"]'),
          css = document.querySelector('[data-tech="css"]'),
          js = document.querySelector('[data-tech="js"]'),
          react = document.querySelector('[data-tech="react"]'),
          sass = document.querySelector('[data-tech="sass"]'),
          scss = document.querySelector('[data-tech="scss"]'),
          git = document.querySelector('[data-tech="git"]'),
          bootstrap = document.querySelector('[data-tech="bootstrap"]'),
          responsiveCreation = document.querySelector('[data-tech="responsive-creation"]'),
          photoshop = document.querySelector('[data-tech="photoshop"]'),
          figma = document.querySelector('[data-tech="figma"]'),
          marcy = document.querySelector('[data-tech="marcy"]'),
          flex = document.querySelector('[data-tech="flex"]'),
          webpack = document.querySelector('[data-tech="webpack"]'),
          ajax = document.querySelector('[data-tech="ajax"]'),
          CRA = document.querySelector('[data-tech="CRA"]'),
          jsx = document.querySelector('[data-tech="jsx"]'),
          setState= document.querySelector('[data-tech="setState"]'),
          lifeCycleHooks = document.querySelector('[data-tech="life-cycle-hooks"]'),
          functionComponents = document.querySelector('[data-tech="function-components"]'),
          classComponents = document.querySelector('[data-tech="class-components"]'),
          API = document.querySelector('[data-tech="API"]'),
          reactHooks = document.querySelector('[data-tech="react-hooks"]'),
          customHooks = document.querySelector('[data-tech="custom-hooks"]'),
          reactRouter = document.querySelector('[data-tech="react-router"]'),
          reactHelmet = document.querySelector('[data-tech="react-helmet"]'),
          finiteStateMachine = document.querySelector('[data-tech="finite-state-machine"]');

    const allTech = [html,css,js,react,sass,scss,git,bootstrap,responsiveCreation,
            photoshop,figma,marcy,flex,webpack,ajax,CRA,jsx,setState,lifeCycleHooks,functionComponents,API,
            reactHooks,customHooks,reactRouter,reactHelmet,finiteStateMachine,classComponents];

    const techUber = ['bootstrap','js','html','css','responsive-creation','sass','photoshop', 'flex', 'git','marcy'],
          techFood = ['photoshop','js','webpack','html','css','responsive-creation','sass','flex', 'git','figma','ajax'],
          techCRUD = ['css','git','js','react','CRA','CRUD','class-components','jsx','setState','responsive-creation'],
          techMarvel = ['setState','css','git','react','js','life-cycle-hooks','function-components','API', 'react-hooks', 'custom-hooks', 
          'react-router', 'react-helmet', 'finite-state-machine','class-components','jsx','responsive-creation'];

    const portfolioItemTechs = [techUber,techFood,techCRUD,techMarvel]; 
            


    const showItem = (item,i) => {
        item.style.transform = 'scale(1.1)'
    }
    const hideItem = (item,i) => {
        item.style.transform = 'scale(1)'
    }
    allTech.forEach(itemAll=>{
        itemAll.addEventListener('mouseover',()=>{
            portfolioItemTechs.forEach((itemPort,i)=>{
                itemPort.forEach(iP=>{
                    if (iP == itemAll.getAttribute('data-tech')){
                        showItem(portfolioItems[i],i)
                    }
                })
            })
        })
        itemAll.addEventListener('mouseout',()=>{
            portfolioItemTechs.forEach((itemPort,i)=>{
                itemPort.forEach(iP=>{
                    if (iP == itemAll.getAttribute('data-tech')){
                        hideItem(portfolioItems[i],i)
                    }
                })
            })
        })

    })





    




    // Portfolio description Modal 
    const animateDescrManualy = (item) =>{
            item.animate([
                {opacity:0},
                {opacity:1}
            ],{
                iterations:1,
                duration: 700
            })
    }
    portfolioItems.forEach((item,i)=>{
        item.addEventListener('mouseover',()=>{
            portfolioItemDescriptions[i].style.display='block';
            portfolioItemDescriptions[i].style.opacity='1';
            animateDescrManualy(portfolioItemDescriptions[i]);
        })
    })
    portfolioItems.forEach((item,i)=>{
        item.addEventListener('mouseout',()=>{
            portfolioItemDescriptions[i].style.display='none';
            portfolioItemDescriptions[i].style.opacity='0'
        })
    })
    portfolioItemDescriptions.forEach((item,i)=>{
        item.addEventListener('mouseover',()=>{
            portfolioItemDescriptions[i].style.display='block';
            portfolioItemDescriptions[i].style.opacity='1';
        })
    })
    portfolioItemDescriptions.forEach((item,i)=>{
        item.addEventListener('mouseout',()=>{
            portfolioItemDescriptions[i].style.display='none';
        })
    })
});



