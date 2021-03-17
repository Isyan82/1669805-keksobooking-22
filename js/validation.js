const setValidation = () => {
  // добавление нужных атрибутов
  const adForm = document.querySelector('.ad-form');
  const features = adForm.querySelector('.features');

  adForm.action = 'https://22.javascript.pages.academy/keksobooking';
  adForm.querySelectorAll('input').forEach((it) => it.required = true)
  features.querySelectorAll('input').forEach((it) => it.required = false)

  // валидация title
  const title = adForm.querySelector('#title');
  title.setAttribute('minlength', '30');
  title.setAttribute('maxlength', '100')

  // валидация цены
  const priceInput = document.querySelector('#price');
  priceInput.setAttribute('max', '1000000');
  // валидация rooms - capacity
  const roomNumber = document.querySelector('#room_number');
  const capacity = document.querySelector('#capacity');
  capacity.querySelectorAll('option').forEach((it) => it.disabled = true);
  capacity.options[2].disabled = false;
  capacity.options[2].selected = true;


  const roomsSincGuest = (rooms, guest) => {
    const optionsMapping = {
      1: [1],
      2: [1, 2],
      3: [1, 2, 3],
      100: [0],
    };
    return () => {
      const value = parseFloat(rooms.value)
      const options = guest.options;
      const optionsLength = options.length;
      const availableOptions = optionsMapping[value];

      for (const option of options) {
        if (availableOptions.indexOf(parseFloat(option.value)) !== -1) {
          option.disabled = false;
          if (parseFloat(option.value) === value || availableOptions.length === 1) {
            option.selected = true;
          }
        } else {
          option.disabled = true;
        }
      }
    };
  }
  roomNumber.addEventListener('change', roomsSincGuest(roomNumber, capacity));
}

export { setValidation };
