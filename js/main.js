import { createMap } from './map.js'
import { getAds } from './data.js'
import { changeFormElements, disableForms } from './form.js'
import { setValidation } from './validation.js'
import { setPublicationAdHandler } from './server.js'
disableForms()
getAds().then((ads) => createMap(ads));
changeFormElements();
setValidation();
setPublicationAdHandler();


