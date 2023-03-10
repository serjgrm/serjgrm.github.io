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


    // Portfolio description 

    const portfolioItems = document.querySelectorAll('.portfolio__item'),
          portfolioItemDescriptions = document.querySelectorAll('.portfolio__item__descr');

    portfolioItems.forEach((item,i)=>{
        item.addEventListener('mouseover',()=>{
            portfolioItemDescriptions[i].style.display='block';
            portfolioItemDescriptions[i].style.opacity='1'
        })
    })

    portfolioItems.forEach((item,i)=>{
        item.addEventListener('mouseout',()=>{
            portfolioItemDescriptions[i].style.display='none'
            portfolioItemDescriptions[i].style.opacity='0'
        })
    })











});



