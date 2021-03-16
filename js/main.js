import { createMap } from './map.js'
import { getAds } from './data.js'
import { changeFormElements } from './form.js'
import { setValidation } from './validation.js'
const SIMILAR_ADS_COUNT = 10;
const ads = getAds(SIMILAR_ADS_COUNT);
createMap(ads);
changeFormElements();
setValidation();



