'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Language shifting and sidelinks scroll hiding
    (() => {
        const langTrigger = document.querySelector('.promo__lang');
        const langRu = document.querySelectorAll('.ru');
        const langEn = document.querySelectorAll('.en');
        
        langTrigger.addEventListener('click', (e) => {
            if (e.target.classList.contains('en')) {
                langEn.forEach(item => {
                    item.classList.add('hide');
                });
                langRu.forEach(item => {
                    item.classList.remove('hide');
                });
            } else if (e.target.classList.contains('ru')) {
                langRu.forEach(item => {
                    item.classList.add('hide');
                });
                langEn.forEach(item => {
                    item.classList.remove('hide');
                });
            }
        });
        
        const aside = document.querySelectorAll('aside a');
        
        function hideLinks() {
            if (document.documentElement.clientHeight + document.documentElement.scrollTop >=
                document.documentElement.scrollHeight - 40) {
                aside.forEach(item => {
                    item.classList.add('hide');
                });
            } else {
                aside.forEach(item => {
                    item.classList.remove('hide');
                });
            }
        }
        
        window.addEventListener('scroll', hideLinks);
    })();

    // Portfolio cards interaction

    const uberCard = document.querySelector('.card__uber');
    const foodCard = document.querySelector('.card__food');
    const pulsCard = document.querySelector('.card__puls');
    const chessCard = document.querySelector('.card__chess');
    const myBikeCard = document.querySelector('.card__myBike');
    const crudCard = document.querySelector('.card__crud');
    const smartVisionCard = document.querySelector('.card__smart-vision');

    const allCards = [uberCard, foodCard, pulsCard, chessCard, myBikeCard, crudCard, smartVisionCard];

    const hideAllTech = () => {
      document.querySelectorAll('[data-tech]').forEach(item => {
        item.classList.remove('hover-tech');
      });
    };
    
    const hideAllCards = () => {
      document.querySelectorAll('.portfolio__item').forEach(item => {
        item.classList.remove('active-card');
      });
    };

    const showTech = (card) => {
      hideAllTech();

      const cardTechnologies = card.getAttribute('data-tech');
      cardTechnologies.split(' ').forEach(tech => {
        document.querySelector(`[data-tech="${tech}"]`).classList.add('hover-tech')
      })
    };

    const showCard = (card) => {
      hideAllCards();
      
      card.classList.add('active-card')
    };

    const showCardsByTech = (tech) => {
      allCards.forEach(card => {
        if (card.getAttribute('data-tech').includes(tech.getAttribute('data-tech'))) {
          card.classList.add('active-card');
          tech.classList.add('hover-tech');
        }
      })
    }

    const showCardAndTech = (card) => {
      if (card.classList.contains('active-card')) {
        hideAllTech();
        hideAllCards();
      } else {
        showTech(card);
        showCard(card);
      }
    };

    allCards.forEach(card => {
      card.addEventListener('click', () => showCardAndTech(card))
    });

    const html = document.querySelector('[data-tech="html"]'),
      css = document.querySelector('[data-tech="css"]'),
      js = document.querySelector('[data-tech="js"]'),
      react = document.querySelector('[data-tech="react"]'),
      typeScript = document.querySelector('[data-tech="typeScript"]'),
      OOP = document.querySelector('[data-tech="OOP"]'),
      sass = document.querySelector('[data-tech="sass"]'),
      scss = document.querySelector('[data-tech="scss"]'),
      git = document.querySelector('[data-tech="git"]'),
      BEM = document.querySelector('[data-tech="BEM"]'),
      jQuery = document.querySelector('[data-tech="jQuery"]'),
      responsiveCreation = document.querySelector('[data-tech="responsive-creation"]'),
      flex = document.querySelector('[data-tech="flex"]'),
      grid = document.querySelector('[data-tech="grid"]'),
      webpack = document.querySelector('[data-tech="webpack"]'),
      functionComponents = document.querySelector('[data-tech="function-components"]'),
      API = document.querySelector('[data-tech="API"]'),
      reactHooks = document.querySelector('[data-tech="react-hooks"]');

    const allTech = [html, css, js, react, typeScript, OOP, sass, scss, git, BEM, jQuery,
      responsiveCreation, flex, grid, webpack, functionComponents, API, reactHooks
    ];

    const showCardsByTechHandle = (tech) => {
      if (tech.classList.contains('hover-tech')) {
        hideAllCards();
        hideAllTech();
      } else {
        if (allTech.some(tech => tech.classList.contains('hover-tech'))) {
          hideAllCards();
          hideAllTech();
          showCardsByTech(tech);
        } else {
          showCardsByTech(tech)
        }
      }
    };

    allTech.forEach(tech => {
      tech.addEventListener('click', () => showCardsByTechHandle(tech))
    })
});

