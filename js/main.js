import { createMap } from './map.js'
import { getAds } from './data.js'
import { changeFormElements } from './form.js'
import { setValidation } from './validation.js'
getAds().then((ads) => createMap(ads));
changeFormElements();
setValidation();


// const submitButton = document.querySelector('.ad-form__submit');

const formElements = document.querySelector('.ad-form')

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

// formElements.addEventListener('submit', (evt) => {
//   evt.preventDefault()
//   const formData = new FormData(evt.target);
//   fetch(
//     'https://22.javascript.pages.academy/keksobooking',
//     {
//       method: 'POST',
//       body: formData,
//     }
//   )

//     .then((response) => {
//       console.log(response.status);
//       console.log(response.ok)
//       // if (response.ok == false) {
//       //   showAlert('Не удалось отправить данные на сервер')
//       // } else {
//       //   // Объявление об успешной оправке формы
//       //    // Находим фрагмент с содержимым темплейта
//       //   const templateFragment = document.querySelector('#success').content;
//       //   const mainWindow = document.querySelector('main');
//       //   mainWindow.appendChild(templateFragment);
//       // };
//       return response.json();
//     })
//     .then((json) => {
//       console.log('Результат', json)
//     })
// })

// mainWindow.addEventListener('click', (evt) => {
//   templateFragment.classList.add('hidden');
// })
// templateFragment.addEventListener((evt) => {
//   isEscEvent()
// })
