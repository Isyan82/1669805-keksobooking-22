import {showAlert} from './util.js'

const getAds = () => {

  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .catch((err) => {showAlert('При загрузке данных с сервера произошла ошибка запроса')})
};

export { getAds };
