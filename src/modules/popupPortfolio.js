'use strict';

const popupPortfolio = () => {
    const portfolioSlider = document.querySelectorAll('.portfolio .portfolio-slider__wrapper .portfolio-slider__slide-frame');
    const popupPortfolio = document.querySelector('.popup-portfolio');
    const popupPortfolioSlider = document.querySelectorAll('.popup-portfolio .popup-portfolio-slider__slide');
    const portfolioSliderMobile = document.querySelectorAll('.portfolio .portfolio-slider-mobile .portfolio-slider__slide-frame');
    const portfolioSliderMobileSlides = document.querySelector('.portfolio .portfolio-slider-mobile');
    const popupPortfolioText = document.querySelectorAll('.popup-portfolio .popup-portfolio-text');
    const currentSlider = document.getElementById('slideCountPortfolioCurrent');

    const childsSlider = [...portfolioSlider];
    const childsSliderMobile = [...portfolioSliderMobile];
    const childsSliderMobileSlides = [...portfolioSliderMobileSlides.children];

    const removeStyles = () => {
        childsSliderMobileSlides.forEach(slide => {
            slide.removeAttribute('style');
        });
        popupPortfolioSlider.forEach(slide => {
            slide.removeAttribute('style');
        });
        popupPortfolioText.forEach(text => {
            text.removeAttribute('style');
        });
    };

    const getCurrentPopupSlide = (targetSlide) => {
        popupPortfolioSlider.forEach((elem, index) => {
            elem.style.display = 'none';
            if (childsSlider.indexOf(targetSlide) === index ||
                childsSliderMobile.indexOf(targetSlide) === index) {
                elem.style.display = 'block';
                currentSlider.textContent = index + 1;
            }
        });

        popupPortfolioText.forEach((elem, index) => {
            elem.style.display = 'none';
            if (childsSlider.indexOf(targetSlide) === index ||
                childsSliderMobile.indexOf(targetSlide) === index) {
                elem.style.display = 'block';
            }
        });
    };

    document.querySelector('body').addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.portfolio-slider__slide-frame')) {
            popupPortfolio.style.visibility = 'visible';
            getCurrentPopupSlide(target);
        } else if (target.matches('.close') && target.closest('.popup-portfolio')) {
            popupPortfolio.removeAttribute('style');
        }
    });

    removeStyles();

};

export default popupPortfolio;