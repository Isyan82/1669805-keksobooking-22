import { createMap } from './map.js'
import { getAds } from './data.js'
import { changeFormElements } from './form.js'
import { setValidation } from './validation.js'
import { getPostServer } from './server.js'

getAds().then((ads) => createMap(ads));
changeFormElements();
setValidation();
getPostServer();


