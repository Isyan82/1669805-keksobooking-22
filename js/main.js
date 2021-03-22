
import { createMap, reInit } from './map.js'
import { getAds } from './data.js'
import { changeFormElements } from './form.js'
import { setValidation } from './validation.js'
import { setPublicationAdHandler } from './server.js'
import { filterByHousingType } from './filter.js'

const SHOW_ADS_COUNTS = 10;

const filtersFormElement = document.querySelector('.map__filters')
const housingTypeElement = filtersFormElement.querySelector('#housing-type');



getAds().then((ads) => {
  createMap(ads.slice(0, SHOW_ADS_COUNTS)) // это я тут допилил, потому, что по заданию количество меток ограничено сразу при выводе на карту.
  housingTypeElement.addEventListener('change', (evt) => {
    evt.preventDefault()
    const filteredAds = filterByHousingType(ads, housingTypeElement.value );
    reInit(filteredAds.slice(0, SHOW_ADS_COUNTS))
  })
});
changeFormElements();
setValidation();
setPublicationAdHandler();

