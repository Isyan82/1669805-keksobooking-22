
/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Источник: https://learn.javascript.ru/number */
const getRandomFloat = (min, max, precision = 2) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};
/* Функция, возвращающая случайное целое число из переданного диапазона включительно.
Источник: https://www.turbopro.ru/index.php/yazyk-programmirovaniya-java/7685-8-generatsiya-sluchajnykh-chisel-v-zadannom-diapazone */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error(`Неправильно заданы аргументы  ${min}  не может быть больше, чем ${max}`)
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// функция случайного выбора элемента из значений
const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];
// Функция вставки случайного числа в строку
const addLeadingZero = (num) => `0${num}`.slice(-2);

// функция выбора случайного колличества элементов без повторений
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
// функция склонения окончаний
const transformEnding = (number, textForms) => {
  number = Math.abs(number) % 100; const number1 = number % 10;
  if (number > 10 && number < 20) { return textForms[2]; }
  if (number1 > 1 && number1 < 5) { return textForms[1]; }
  if (number1 == 1) { return textForms[0]; }
  return textForms[2];
}

// окно с алертом об ошибке запроса с сервера
const showAlert = (message) => {
  const mainWindow = document.querySelector('main');
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.position = 'fixed';
  alertContainer.style.width = '400px';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.margin = 'auto';
  alertContainer.style.marginTop = '180px';
  alertContainer.style.border = '4px solid black';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '28px';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  mainWindow.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export { getRandomFloat, getRandomInteger, addLeadingZero, getRandomItem, makeUniqueRandomIntegerGenerator, transformEnding, showAlert, isEscEvent };

