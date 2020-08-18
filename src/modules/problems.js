'use strict';
import sliderTooltip from './sliderToltip';

/**
     * Description for makeDownTooltipNodes
     * @param {HTMLElement} iconBtn 
     * @param {'add'|'remove'} action 
     */
const makeDownTooltipNodes = (iconBtn, action) => {
    const parentIconBtn = iconBtn.parentNode; /** as .formula-item */
    const popupNode = parentIconBtn.querySelector('.problems-item-popup');

    popupNode.classList[action]('custom-down-tooltip-item-popup');
};

const makeUpTooltipNodes = (iconBtn, action) => {
    const parentIconBtn = iconBtn.parentNode; /** as .formula-item */
    const popupNode = parentIconBtn.querySelector('.problems-item-popup');

    popupNode.classList[action]('custom-up-problems-item-popup');
};

const problems = () => {

    const problemSlider = '.problems-slider';
    const problemRight = 'problems-arrow_right';
    const problemLeft = 'problems-arrow_left';

    sliderTooltip(problemSlider, problemRight, problemLeft);

    const iconAsBtns = document.querySelectorAll('.tablet-hide .problems-item__icon');
    const activeBtns = document.querySelectorAll('.tablet-hide .problems-item__icon-inner');
    const svgWrap = document.querySelectorAll('.tablet-hide .svg-wrap svg');

    iconAsBtns.forEach((iconBtn, index) => {
        iconBtn.addEventListener('mouseenter', function () {
            const currentPopup = this.querySelector('.problems-item-popup');

            if (currentPopup.getBoundingClientRect().top < 0) {
                makeDownTooltipNodes(this, 'add');
            } else if (currentPopup.getBoundingClientRect().bottom > 900) {
                makeUpTooltipNodes(this, 'add');
            } else {
                currentPopup.classList.add('custom-up-tooltip-item-popup');
            }
            activeBtns.forEach((elem, indexActive) => {
                if (index === indexActive) {
                    elem.classList.add('active-item');
                }
            });
            svgWrap.forEach((elem, indexActive) => {
                if (index === indexActive) {
                    elem.style.transform = 'rotate(45deg)';
                    elem.children[0].style.fill = '#fff';
                }
            });
        });

        iconBtn.addEventListener('mouseout', function () {
            const currentPopup = this.querySelector('.problems-item-popup');

            if (currentPopup.classList.contains('custom-down-tooltip-item-popup')) {
                makeDownTooltipNodes(this, 'remove');
            } else if (currentPopup.classList.contains('custom-up-problems-item-popup')) {
                makeUpTooltipNodes(this, 'remove');
            } else {
                currentPopup.classList.remove('custom-up-tooltip-item-popup');
            }

            activeBtns.forEach((elem, indexActive) => {
                if (index === indexActive) {
                    elem.classList.remove('active-item');
                }
            });
            svgWrap.forEach((elem, indexActive) => {
                if (index === indexActive) {
                    elem.removeAttribute('style');
                    elem.children[0].removeAttribute('style');
                }
            });
        });
    });
};


export default problems;