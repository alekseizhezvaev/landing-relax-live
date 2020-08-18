'use strict';

const sliderPortfolio = () => {
    const portfolioSlider = document.querySelector('.portfolio-slider__wrapper');
    const portfolioArrowRight = document.getElementById('portfolio-arrow_right');
    const portfolioArrowLeft = document.getElementById('portfolio-arrow_left');
    const sliders = [...portfolioSlider.children];
    let position = 0,
        minPosition;

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;

        if (widthWindow > 1024) {
            minPosition = 2;
        } else if (widthWindow <= 768) {
            minPosition = 4;
        } else {
            minPosition = 3;
        }
    };


    const getRightSlide = () => {
        sliders[position - 1].style.display = 'none';
    };

    const getLeftSlide = () => {
        sliders[position].removeAttribute('style');
    };


    portfolioArrowRight.addEventListener('click', () => {
        position++;
        checkResponse();
        if (position === minPosition) {
            portfolioArrowRight.style.display = 'none';
        }
        portfolioArrowLeft.style.display = 'flex';
        getRightSlide();
    });

    portfolioArrowLeft.addEventListener('click', () => {
        position--;
        checkResponse();
        if (position === 0) {
            portfolioArrowLeft.style.display = 'none';
        }
        portfolioArrowRight.style.display = 'flex';
        getLeftSlide();
    });


};

export default sliderPortfolio;