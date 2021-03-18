
import { isEscEvent } from './util.js'

const formElements = document.querySelector('.ad-form')
const mainWindow = document.querySelector('main');

// окно успеха
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
successTemplate.classList.add('visually-hidden');
mainWindow.append(successTemplate);

// оено неудачи
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
errorTemplate.classList.add('visually-hidden');
mainWindow.append(errorTemplate);

const getPostServer = () => {
  // работа с пользовательскими окнами
  // окно успеха
  formElements.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target);
    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        // console.log(response.status);
        // console.log(response.ok)
        if (response.ok === false) {
          alert('Не удалось отправить данные на сервер')
        } else {
          // Объявление об успешной оправке формы
          successTemplate.classList.remove('visually-hidden');

        }
        return response.json();
      })
    // .then((json) => {
    //   console.log('Результат', json)
    // })
  })


  // функция обработчика событи
  const onBodyClick = () => {
    successTemplate.classList.add('visually-hidden');
    errorTemplate.classList.add('visually-hidden');
  }

  // событие нажатия по окну Window
  mainWindow.addEventListener('click', onBodyClick)
  document.addEventListener('keydown', (evt) => {
    if (successTemplate.classList.contains('visually-hidden') === false
      || errorTemplate.classList.contains('visually-hidden') === false) {
      if (isEscEvent(evt)) {
        evt.preventDefault();
        successTemplate.classList.add('visually-hidden');
        errorTemplate.classList.add('visually-hidden');
      }
    }
  });
}


export { getPostServer };
