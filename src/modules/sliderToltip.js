'use strict';
const sliderTooltip = (sliderItems, rightArrow, leftArrow) => {
    /** Slider */
    const slider = document.querySelector(sliderItems);
    const right = document.getElementById(rightArrow);
    const left = document.getElementById(leftArrow);
    const items = [...slider.children];
    const initialSlider = [...items.slice(items.length - 1, items.length), ...items.slice(0, items.length - 1)];
    let count = 0;

    const makeActiveItem = (nodes) => {
        /** Происходит мутация nodes за счет ссылки на объект */
        nodes.forEach((el, index) => {
            if (index === 1) {
                el.classList.add('active-item');
                if (items.length === 4) {
                    el.classList.add('custom-active-item');
                }
            }
            else {
                el.classList.remove('active-item');
                el.classList.remove('custom-active-item');
            }
        });
    };

    const setChildsToSlider = (nodes) => {
        /** TODO: clear childs */
        slider.innerHTML = '';
        nodes.forEach(item => slider.appendChild(item));
    };

    /** Проставляем первый active-itemn */
    makeActiveItem(initialSlider)
    /** Вставляем начальный массив элементов */
    setChildsToSlider(initialSlider);

    right.addEventListener('click', () => {
        count++;

        if (count === items.length) {
            count = 0;
        }

        const newItems = [...items.slice(count - 1, items.length), ...items.slice(0, count - 1)];
        makeActiveItem(newItems);
        setChildsToSlider(newItems);
    });

    left.addEventListener('click', () => {
        count--;

        if (count === -items.length + 1) {
            count = 1;
        }

        const newItems = [...items.slice(count - 1, items.length), ...items.slice(0, count - 1)];
        makeActiveItem(newItems);
        setChildsToSlider(newItems);
    });
};

export default sliderTooltip;