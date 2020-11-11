'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
import smoothscroll from 'smoothscroll-polyfill';
elementClosest(window);
smoothscroll.polyfill();

import telephones from './modules/telephones';
import burgerMenu from './modules/burgerMenu';
import valid from './modules/valid';
import popupPrivacy from './modules/popupPrivacy';
import formula from './modules/formula';
import sliderRepairTypes from './modules/sliderRepairTypes';
import sliderPortfolio from './modules/sliderPortfolio';
import { SliderTabs } from './modules/sliderTabs';
import problems from './modules/problems';
import documents from './modules/documents';
import reviews from './modules/reviews';
import popupDocuments from './modules/popupDocuments';
import designs from './modules/designs';
import popupDesigns from './modules/popupDesigns';
import popupConsulation from './modules/popupConsulation';
import scheme from './modules/scheme';
import accordion from './modules/accordion';
import { carousel } from './modules/carousel';
import sendForm from './modules/sendForm';
import repairDb from './modules/repayrDb';
import popupPortfolio from './modules/popupPortfolio';
import sliderPopupPortfolio from './modules/sliderPopupPortfolio';
import sliderPortfolioMobile from './modules/sliderPortfolioMobile';


document.addEventListener('DOMContentLoaded', () => {

    //**Слайдер для табов*/
    SliderTabs();

    //**Список телефонов */
    telephones();

    //**Бургер меню */
    burgerMenu();

    //**Маска для телефона */
    valid();

    //**Модальное окно */
    popupPrivacy();

    //*Подсказка */
    formula();

    //**Слайдер виды ремонта */
    sliderRepairTypes();

    //**Слайдер портфолио */
    sliderPortfolio();

    //**Модальное окно с портфолио */
    popupPortfolio();

    //**Слайдер модального окна портфолио */
    sliderPopupPortfolio();

    //**Слайдер модального окна портфолио (Мобильная версия) */
    sliderPortfolioMobile();

    //**Модальное окно портфолио */
    popupDocuments();

    //**Проблемы */
    problems();

    //**Документы */
    documents();

    //**Дизайнерские решения */
    designs();

    //**Клиенты */
    reviews();

    //**Модальное окно дизайнов */
    popupDesigns();

    //**Модальное окно консультации ( При клике на кнопку "Проконсультироваться") */
    popupConsulation();

    //**Табы "Как мы работаем" */
    scheme();

    //**Аккордеон */
    accordion();

    //**Слайдер карусел "компании" */
    carousel();

    //**Отправка форм */
    sendForm();

    //*Подгрузка данных для "Полный список услуг и цен" */
    repairDb();
});