
import { createMap, reInit } from './map.js'
import { getAds } from './data.js'
import { changeFormElements } from './form.js'
import { setValidation } from './validation.js'
import { setPublicationAdHandler } from './server.js'
import { filterByHousingType, filterByHousingRooms, filterByHousingGuests, filterByHousingPrice, filterByHousingFeatures } from './filter.js'
changeFormElements();
setValidation();
setPublicationAdHandler();

const SHOW_ADS_COUNTS = 10;

const filtersFormElement = document.querySelector('.map__filters');
const housingPriceElement = filtersFormElement.querySelector('#housing-price');
const housingTypeElement = filtersFormElement.querySelector('#housing-type');
const housingRoomsElement = filtersFormElement.querySelector('#housing-rooms');
const housingGuestsElement = filtersFormElement.querySelector('#housing-guests');
const housingFeaturesElement = filtersFormElement.querySelector('#housing-features');
const housingFeaturesInputs = housingFeaturesElement.querySelectorAll('.map__checkbox');


///// фильтрация
getAds().then((ads) => {
  createMap(ads.slice(0, SHOW_ADS_COUNTS)) // это я тут допилил, потому, что по заданию количество меток ограничено сразу при выводе на карту.
  const applyAllFilters = () => {
    let filtered = filterByHousingFeatures(ads, Array.from(housingFeaturesInputs).filter(el => el.checked).map(el => el.value));
    filtered = filterByHousingType(filtered, housingTypeElement.value);
    filtered = filterByHousingPrice(filtered, housingPriceElement.value);
    filtered = filterByHousingRooms(filtered, housingRoomsElement.value);
    filtered = filterByHousingGuests(filtered, housingGuestsElement.value);
    reInit(filtered.slice(0, SHOW_ADS_COUNTS))
  }
  housingFeaturesInputs.forEach(el => {
    el.addEventListener('change', () => {
      applyAllFilters()
    })
  })
  housingTypeElement.addEventListener('change', applyAllFilters);
  housingPriceElement.addEventListener('change', applyAllFilters);
  housingRoomsElement.addEventListener('change', applyAllFilters);
  housingGuestsElement.addEventListener('change', applyAllFilters);
});



