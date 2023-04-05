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

    // Portfoli
    const html = document.querySelector('[data-tech="html"]'),
          css = document.querySelector('[data-tech="css"]'),
          js = document.querySelector('[data-tech="js"]'),
          react = document.querySelector('[data-tech="react"]'),
          sass = document.querySelector('[data-tech="sass"]'),
          scss = document.querySelector('[data-tech="scss"]'),
          git = document.querySelector('[data-tech="git"]'),
          BEM = document.querySelector('[data-tech="BEM"]'),
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
          finiteStateMachine = document.querySelector('[data-tech="finite-state-machine"]'),
          jQuery = document.querySelector('[data-tech="jQuery"]'),
          typeScript = document.querySelector('[data-tech="typeScript"]'),
          OOP = document.querySelector('[data-tech="OOP"]'),
          redux = document.querySelector('[data-tech="redux"]');



    const allTech = [html,css,js,react,sass,scss,git,bootstrap,responsiveCreation,
            photoshop,figma,marcy,flex,webpack,ajax,CRA,jsx,setState,lifeCycleHooks,functionComponents,API,
            reactHooks,customHooks,reactRouter,reactHelmet,finiteStateMachine,classComponents,BEM,jQuery,typeScript,
            OOP,redux
        ];

    const techUber = ['BEM','bootstrap','js','html','css','responsive-creation','sass','photoshop', 'flex', 'git','marcy'],
          techFood = ['BEM','photoshop','js','webpack','html','css','responsive-creation','sass','flex', 'git','figma','ajax'],
          techCRUD = ['css','git','js','react','CRA','CRUD','class-components','jsx','setState','responsive-creation'],
          techMarvel = ['scss','setState','css','git','react','js','life-cycle-hooks','function-components','API', 'react-hooks', 'custom-hooks', 
          'react-router', 'react-helmet', 'finite-state-machine','class-components','jsx','responsive-creation'],
          techPuls = ['scss','jQuery','BEM','bootstrap','js','html','css','responsive-creation','photoshop', 'flex', 'git','marcy'],
          techChess = ['html','css','typeScript','OOP','react'],
          techRedux = ['react','redux','html','css','js'];

    const portfolioItemsTechs = [techUber,techFood,techCRUD,techMarvel,techPuls,techChess,techRedux];    

    const showItem = (item,i) => {
        item.style.transform = 'scale(1.1)'
    }

    const hideItem = (item,i) => {
        item.style.transform = ''
    }

    const technologiesShowProject = (tech)=>{
        tech.forEach(itemAll=>{
            itemAll.addEventListener('mouseover',()=>{
                portfolioItemsTechs.forEach((itemPort,i)=>{
                    itemPort.forEach(iP=>{
                        if (iP == itemAll.getAttribute('data-tech')){
                            showItem(portfolioItems[i],i)
                        }
                    })
                })
            })
            itemAll.addEventListener('mouseout',()=>{
                portfolioItemsTechs.forEach((itemPort,i)=>{
                    itemPort.forEach(iP=>{
                        if (iP == itemAll.getAttribute('data-tech')){
                            hideItem(portfolioItems[i],i)
                        }
                    })
                })
            })
        })
    }
    technologiesShowProject(allTech)


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


    const portfolioItems = document.querySelectorAll('.portfolio__item'),
          portfolioItemDescriptions = document.querySelectorAll('.portfolio__item__descr');



    const descrShow = ()=>{
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
    }
    descrShow()






    // After hover on Portfolio image function technologiesShow will show all 
    // technologies use during project creation
    const technologiesShow = (num)=>{
        allTech.forEach(((techFromAll,i)=>{
            portfolioItemsTechs[num].forEach((targetTech,j)=>{
                if(techFromAll.getAttribute('data-tech') === targetTech){
                    techFromAll.style.color = 'red';
                    techFromAll.style.fontSize = '23px';  
                }
            })
        }))
    }
    const technologiesHide = (num)=>{
        allTech.forEach(((techFromAll,i)=>{
            portfolioItemsTechs[num].forEach((targetTech,j)=>{
                if(techFromAll.getAttribute('data-tech') === targetTech){
                    techFromAll.style.color = '';
                    techFromAll.style.fontSize = '';

                }
            })
        }))
    }
    portfolioItems.forEach((item,i)=>{
        item.addEventListener('mouseover',()=>technologiesShow(i))
    })
    portfolioItems.forEach((item,i)=>{
        item.addEventListener('mouseout',()=>technologiesHide(i))
    })
});



