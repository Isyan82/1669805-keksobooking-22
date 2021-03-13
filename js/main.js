import { createMap } from './map.js'
import { getAds } from './data.js'
import { changeFormElements } from './form.js'
const SIMILAR_ADS_COUNT = 10;
const ads = getAds(SIMILAR_ADS_COUNT);
createMap(ads);
changeFormElements();


const form = document.querySelectorAll('form');
form[0].action = 'https://22.javascript.pages.academy/keksobooking';
form[1].action = 'https://22.javascript.pages.academy/keksobooking';
form[0].method = 'POST';
form[1].method = 'POST';
form[0].enctype = 'multipart/form-data';

const avatar = document.querySelector('#avatar');


console.log(avatar)
