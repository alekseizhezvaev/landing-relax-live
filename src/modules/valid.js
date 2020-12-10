'use strict';

const maskPhone = (elem, masked = '+7 (___) ___-__-__') => { //маска для валидации номера телефона
    const mask = (event) => {
        const keyCode = event.keyCode;
        const template = masked,
            def = template.replace(/\D/g, ""),
            val = elem.value.replace(/\D/g, "");
        let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i !== -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, elem.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(elem.value) || elem.value.length < 5 || keyCode > 47 && keyCode < 58) {
            elem.value = newValue;
        }
        if (event.type === "blur" && elem.value.length < 5) {
            elem.value = "";
        }
    };

    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
};

const valid = () => {
    const inputs = document.querySelectorAll('input');

    const phoneNumbers = document.querySelectorAll('[name="phone"]');

    phoneNumbers.forEach(el => {
        maskPhone(el);
        el.value = el.value.replace(/[^\d]/g, '');
    });

    inputs.forEach(el => {
        el.addEventListener('input', () => {
            if (el.name === 'name') {
                el.value = el.value.replace(/[^а-яА-Я a-zA-Z ёЁ]/, '');
            }
        });
    });
};

export default valid;