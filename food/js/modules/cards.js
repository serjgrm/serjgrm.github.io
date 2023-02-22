function cards() {

    class MenuCards {
        constructor(img, altimg, title, descr, price) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price * 41;
        }
        render() {
            const card = document.createElement('div');
            card.classList.add('menu__item');
            card.innerHTML = `
                <img src=${this.img} alt=${this.altimg}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            document.querySelector(".menu .container").append(card);
        }
    }
    async function getResource(url) {
        const menus = await fetch(url);
        return await menus.json();
    }
    getResource('http://localhost:3000/menu')
        .then(data => data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCards(
                img,
                altimg,
                title,
                descr,
                price
            ).render();
        }));
}
module.exports = cards;


