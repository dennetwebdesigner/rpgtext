import { imgsServer } from './consts.js'

const titleEl = document.querySelector('#titleContainer h1');
const imgLogoEl = document.querySelector('#logo');
const imgAbove = document.querySelector('#imgAbove');
const loadingEl = document.querySelector('#loading');
const inputsEl = document.querySelectorAll('input');
const btnActionsEl = document.querySelector('#btnActions');
const btnActionEl = document.querySelector('#btnAction');
const moreEl = document.querySelector('#more');


imgLogoEl.src = `${imgsServer}/swordsLogo.png`
imgAbove.src = `${imgsServer}/rpgMesa.png`

window.onload = () => {
    loadingEl.style.display = 'none'
    titleEl.style.opacity = '1'
    titleEl.style['margin-right'] = "0";
    imgLogoEl.style['margin-top'] = "-10%";
    imgLogoEl.style.opacity = '1'
    inputsEl.forEach(input => {
        input.style.opacity = '1'
        input.style.width = "100%";
    })
    btnActionsEl.style.opacity = '1'
    btnActionEl.style.opacity = '1'
    btnActionEl.style['margin-right'] = '0';
    moreEl.style.opacity = '1'
}