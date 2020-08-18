'use strict';

const repairDb = () => {
    const parentNav = document.querySelector('.popup-repair-types .nav-list-popup-repair');
    const popupRepairTable = document.querySelector('.popup-repair-types-content-table');
    const popupRepairTypesTitle = document.querySelector('.popup-repair-types .popup-repair-types-content__head-title');
    const popupRepairDate = document.querySelector('.popup-repair-types .popup-repair-types-content__head-date');

    const getTrList = (trList, tbody) => {
        trList.forEach((elements) => {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);

            tr.classList.add('mobile-row');

            for (let key in elements) {
                const td = document.createElement('td');
                if (key === 'typeService') {
                    td.classList.add('repair-types-name');

                } else {
                    td.classList.add('repair-types-value');
                }
                td.textContent = elements[key];
                tr.appendChild(td);
            }
        });
    };

    const getTableList = (dataObj) => {
        const tableList = dataObj.map((elem) => {
            return elem.priceList;
        });

        tableList.forEach((element, index) => {
            if (element !== undefined) {
                const table = document.createElement('table');
                const tbody = document.createElement('tbody');
                if (index === 1) {
                    table.classList.add('popup-repair-types-content-table__list');
                } else {
                    table.classList.add('popup-repair-types-content-table__list');
                    table.style.display = 'none';
                }
                table.appendChild(tbody);
                popupRepairTable.appendChild(table);

                getTrList(element, tbody);
            }
        });

    };

    const getNavList = (dataObj) => {
        const navList = dataObj.map((item) => {
            return item.title;
        });
        navList.forEach((element, index) => {
            if (element !== undefined) {
                const nav = document.createElement('button');

                if (index === 1) {
                    nav.classList.add('button_o', 'popup-repair-types-nav__item', 'active');
                } else {
                    nav.classList.add('button_o', 'popup-repair-types-nav__item');
                }

                nav.textContent = element;

                parentNav.appendChild(nav);
            }
        });


    };

    const eventListeners = () => {
        const childsNav = [...parentNav.children];
        const childTable = [...popupRepairTable.children];

        parentNav.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.popup-repair-types-nav__item')) {
                popupRepairTypesTitle.textContent = target.textContent;
                childTable.forEach((table, index, array) => {
                    table.style.display = 'none';
                    if (childsNav.indexOf(target) === index) {
                        array[index].removeAttribute('style');
                    }
                });
            }
        });
    };

    const getObj = () => {
        const request = new XMLHttpRequest();

        request.open('GET', './db/db.json');

        request.setRequestHeader('Content-Type', 'application/json');

        request.send();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);

                getNavList(data);

                getTableList(data);

                eventListeners();

                popupRepairDate.textContent = data[0].date;
            }
        });
    };

    getObj();


};

export default repairDb;