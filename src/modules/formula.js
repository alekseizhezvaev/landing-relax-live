'use strict';
import sliderTooltip from './sliderToltip';

/**
     * Description for makeDownTooltipNodes
     * @param {HTMLElement} iconBtn 
     * @param {'add'|'remove'} action 
     */
const makeDownTooltipNodes = (iconBtn, action) => {
    const parentIconBtn = iconBtn.parentNode; /** as .formula-item */
    const popupNode = parentIconBtn.querySelector('.formula-item-popup');
    const spanNode = parentIconBtn.querySelector('.formula-item__icon span');
    spanNode.classList[action]('custom-down-tooltip-item__icon');

    parentIconBtn.classList[action]('custom-down-tooltip-item', 'active-item');
    popupNode.classList[action]('custom-down-tooltip-item-popup');
    iconBtn.classList[action]('custom-down-tooltip-item__icon');
};

const formula = (span, callback) => {
    const formulaSlider = '.formula-slider';
    const formulaRight = 'formula-arrow_right';
    const formulaLeft = 'formula-arrow_left';

    sliderTooltip(formulaSlider, formulaRight, formulaLeft);

    const iconAsBtns = document.querySelectorAll('.tablet-hide .formula-item__icon');

    iconAsBtns.forEach((iconBtn, index) => {
        iconBtn.addEventListener('mouseenter', function () {
            const currentPopup = this.querySelector('.formula-item-popup');

            if (currentPopup.getBoundingClientRect().top < 0) {
                makeDownTooltipNodes(this, 'add', span);
            } else {
                currentPopup.classList.add('custom-up-tooltip-item-popup');
                if (callback) {
                    callback('add', index);
                } else {
                    iconBtn.parentNode.classList.add('active-item');
                }

            }
        });

        iconBtn.addEventListener('mouseout', function () {
            const currentPopup = this.querySelector('.formula-item-popup');

            if (currentPopup.classList.contains('custom-down-tooltip-item-popup')) {
                makeDownTooltipNodes(this, 'remove', span);
            } else {
                currentPopup.classList.remove('custom-up-tooltip-item-popup');
                if (callback) {
                    callback('remove', index);
                } else {
                    iconBtn.parentNode.classList.remove('active-item');
                }
            }
        });
    });
};

export default formula;