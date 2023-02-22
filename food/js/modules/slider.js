function slider (){
    const sliderContent = document.querySelectorAll('.offer__slide'),
        sliderPrev = document.querySelector('.offer__slider-prev'),
        sliderNext = document.querySelector('.offer__slider-next'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
    let num = 0,
        offset = 0;

    function currentSlider(i) {
        if (sliderContent.length < 10) {
            current.textContent = `0${i + 1}`;
        } else {
            current.textContent = i + 1;
        }
    }
    currentSlider(num);
    if (sliderContent.length < 10) {
        total.textContent = `0${sliderContent.length}`;
        current.textContent = `0${num + 1}`;
    } else {
        total.textContent = sliderContent.length;
        current.textContent = num + 1;
    }
    slidesField.style.width = 100 * sliderContent.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    sliderContent.forEach((slide) => {
        slide.style.width = width;
    });
    sliderNext.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (sliderContent.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (num == sliderContent.length - 1) {
            num = 0;
        } else {
            num++;
        }
        currentSlider(num);
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[num].style.opacity = 1;

    });
    sliderPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (sliderContent.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (num == 0) {
            num = sliderContent.length - 1;
        } else {
            num--;
        }
        currentSlider(num);
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[num].style.opacity = 1;
    });
    const slider = document.querySelector('.offer__slider');
    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);
    for (let i = 0; i < sliderContent.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            num = slideTo;
            currentSlider(num - 1);
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.style.opacity = 0.5);
            dots[num - 1].style.opacity = 1;
            console.log(slideTo);
        });
    });
}
export default slider;