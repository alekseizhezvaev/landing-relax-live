'use strict';

import sliderUniversal from './sliderUniversal';

const sliderPortfolioMobile = () => {
    const sliderMobile = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame');
    const slideCountPortfolioTotalSmall = document.getElementById('slideCountPortfolioTotalSmall');
    const arraySliderMobile = [...sliderMobile];
    const slideCountPortfolioCurrentSmall = '#slideCountPortfolioCurrentSmall';
    const right = 'portfolio-arrow-mobile_right';
    const left = 'portfolio-arrow-mobile_left';

    slideCountPortfolioTotalSmall.textContent = arraySliderMobile.length;

    sliderUniversal(arraySliderMobile, right, left, slideCountPortfolioCurrentSmall);

};

export default sliderPortfolioMobile;