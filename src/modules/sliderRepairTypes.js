'use strict';
import sliderUniversal from './sliderUniversal';

const sliderRepairTypes = () => {
    const repairTypesSlider = document.querySelector('.repair-types-slider');
    const sliderArrowLeft = 'repair-types-arrow_left';
    const sliderArrowRight = 'repair-types-arrow_right';
    const sliderCounterContentTotal = document.querySelector('#repair-counter .slider-counter-content__total');
    const sliderCounterContentCurrent = '#repair-counter .slider-counter-content__current';
    const navListRepair = document.querySelector('.nav-list-repair');
    const sliders = [...repairTypesSlider.children];
    const tabs = [...navListRepair.children];
    let count = 0;

    sliderUniversal(`.types-repair1`, sliderArrowRight, sliderArrowLeft, sliderCounterContentCurrent, count);

    //**Инициализируещее свойство */
    sliderCounterContentTotal.textContent = sliders[0].children.length;

    //**Текущий таб, который выбирает свой слайд */
    const getCurrentSlider = (targetTab) => {
        tabs.forEach(el => el.classList.remove('active'));
        targetTab.classList.add('active');
        sliders.forEach(el => el.style.display = 'block');
        sliders.forEach((el) => {
            //**Сравнивает цифру в класслисте */
            if (el.className.match(/\d+/)[0] !== targetTab.className.match(/\d+/)[0]) {
                el.style.display = 'none';
            } else {
                const slides = [...el.children];
                slides.forEach(el => el.style.display = 'block');
                sliderUniversal(`.${el.className}`, sliderArrowRight, sliderArrowLeft, sliderCounterContentCurrent, count);
                sliderCounterContentTotal.textContent = slides.length;
            }
        });
    };

    //**События на табы */
    tabs.forEach((el) => {
        el.addEventListener('click', (event) => {
            let target = event.target;
            getCurrentSlider(target);
            document.querySelector('#repair-counter .slider-counter-content__current').textContent = 1;
        });
    });

};

export default sliderRepairTypes;