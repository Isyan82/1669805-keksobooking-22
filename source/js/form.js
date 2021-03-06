// синхронизация полей формы
const typeOfAccommodation = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timeInElement = document.querySelector('#timein');
const timeOutElement = document.querySelector('#timeout');

const TIMES = ['12:00', '13:00', '14:00'];

const minPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

const avatarElement = document.querySelector('.ad-form-header__upload');
const avatarLoadingField = avatarElement.querySelector('input');
const avatarPreview = avatarElement.querySelector('img');

const adFormPhotoElement = document.querySelector('.ad-form__photo-container');
const adImgLoadingField = adFormPhotoElement.querySelector('input');
const adFotoPreview = adFormPhotoElement.querySelector('.ad-form__photo');


// работа с картой
// скрываем элементы по дз
const disableForms = () => {
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.querySelectorAll('select, input').forEach((it) => it.disabled = true);

  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((it) => it.disabled = true);
};

// открываем элементы по дз
const enableForms = () => {
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.querySelectorAll('select, input').forEach((it) => it.disabled = false);

  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((it) => it.disabled = false);
};


// загрузка аватарки и фото объявления
avatarLoadingField.addEventListener('change', function () {
  changeAvatar(this);
});
function changeAvatar(input) {
  let reader;
  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = (evt) => {
      avatarPreview.setAttribute('src', evt.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
const adFotoElement = document.createElement('img');
adFotoElement.setAttribute('width', 70);
adFotoElement.setAttribute('height', 70);
adFotoPreview.appendChild(adFotoElement);

adImgLoadingField.addEventListener('change', function () {
  changeAdImage(this);
});

function changeAdImage(input) {
  let reader;
  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = function (evt) {
      adFotoElement.setAttribute('src', evt.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}


// функция синхронизации полей /////
const changeFormElements = () => {
  // синхронизация type и price
  typeOfAccommodation.onchange = function () {
    const price = minPrice[this.value];
    priceInput.setAttribute('min', price);

    // устанавливает плейсхолдер, а не значение
    priceInput.setAttribute('placeholder', price);
    if (priceInput.value) {
      priceInput.value = Math.max(price, parseFloat(priceInput.value));
    }
  };
  typeOfAccommodation.dispatchEvent(new Event('change'));

  // синхронизация полей въезда и выезда ////
  // функция синхронизации
  const synchronizeFields = (firstElement, secondElement, firstValue, secondValue, callback) => {
    const firstElementChangeHandler = () => {
      const newFirstValue = secondValue[firstValue.indexOf(firstElement.value)];
      callback(secondElement, newFirstValue)
    };
    firstElement.addEventListener('change', firstElementChangeHandler);

    const secondElementChangeHandler = () => {
      const newSecondValue = firstValue[secondValue.indexOf(secondElement.value)];
      callback(firstElement, newSecondValue)
    };
    secondElement.addEventListener('change', secondElementChangeHandler);
  };
  // колбэк синхронизации
  const syncValue = (element, value) => {
    element.value = value;
  };
  synchronizeFields(timeInElement, timeOutElement, TIMES, TIMES, syncValue);
};

export { changeFormElements, disableForms, enableForms };
