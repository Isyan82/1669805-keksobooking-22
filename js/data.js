import {showAlert} from './util.js'

const getAds = () => {
  return fetch('https://22.javascript.pages.academy/keksobooking/dat')
    .then((response) => response.json())
    .catch(() => {showAlert('При загрузке данных с сервера произошла ошибка запроса')})
};

export { getAds };
