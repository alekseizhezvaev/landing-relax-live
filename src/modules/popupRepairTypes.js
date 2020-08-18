'use strict';

const popupRepairTypes = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'visible';
    document.querySelector('body').style.overflow = 'hidden';

    repairTypes.addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.close') && target.closest('.popup-repair-types')) {
            repairTypes.removeAttribute('style');
            document.querySelector('body').removeAttribute('style');
        }
    });
};

export default popupRepairTypes;