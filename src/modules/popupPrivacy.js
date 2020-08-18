'use strict';

const popupPrivacy = () => {
    const poppupPrivacy = document.querySelector('.popup-privacy');

    document.querySelector('body').addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.link-privacy')) {
            poppupPrivacy.style.visibility = 'visible';
            document.querySelector('body').style.overflow = 'hidden';
        } else if (target.matches('.close') && target.closest('.popup-privacy')) {
            poppupPrivacy.removeAttribute('style');
            document.querySelector('body').removeAttribute('style');
        }
    });

};

export default popupPrivacy;