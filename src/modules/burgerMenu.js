'use strict';
import popupRepairTypes from './popupRepairTypes';

const burgerMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    //**Плавная прокрутка */
    const animateScrollTargetMenu = (target) => {
        if (target.matches('.button-footer')) {
            target = target.children[0];
        }

        const blockId = target.getAttribute('href');

        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        popupDialogMenu.removeAttribute('style');
    };

    document.querySelector('body').addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.menu__icon')) {
            popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
        }
        if (target.closest('.popup-dialog-menu')) {
            if (target.matches('.close-menu')) {
                popupDialogMenu.removeAttribute('style');
            }
            if (target.getAttribute('href') && target.classList[1] !== 'no-overflow') {
                event.preventDefault();
                animateScrollTargetMenu(target);
            }
        }
        if (target.closest('.button-footer')) {
            event.preventDefault();

            animateScrollTargetMenu(target);
        }

        if (target.textContent.trim() === 'Полный список услуг и цен') {
            //**Полный список */
            popupRepairTypes();
            popupDialogMenu.removeAttribute('style');
        }
    });
};


export default burgerMenu;