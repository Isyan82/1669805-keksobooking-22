import { createCustomPopup } from './popup.js'
import { enableForms } from './form.js'

const initLatLng = {
  lat: 35.68361,
  lng: 139.75363,
};

//создание карты
const createMap = (ads) => {
  /* global L:readonly */
  const map = L.map('map-canvas')

    .on('load', () => {
      enableForms()
    })
    .setView(initLatLng, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  // создание красной метки
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    initLatLng,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);

  // вставка дефолтных координат в поле адреса
  const precisionFloat = 5;
  const inputAdress = document.querySelector('#address');
  inputAdress.value = `${(mainPinMarker._latlng.lat).toFixed(precisionFloat)}, ${(mainPinMarker._latlng.lng).toFixed(precisionFloat)}`

  //вставка координат после перемещения метки в поле адреса
  mainPinMarker.on('moveend', (evt) => {
    const latlng = evt.target.getLatLng();
    inputAdress.value = `${latlng.lat.toFixed(precisionFloat)}, ${latlng.lng.toFixed(precisionFloat)}`;
  });


  // создание синих меток
  const points = ads;

  points.forEach((point) => {
    const { location } = point;
    const lat = location.lat;
    const lng = location.lng;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        () => createCustomPopup(point),
        {
          keepInView: true,
        },
      );
  });
  return () => {
    mainPinIcon.setLatLng(initLatLng)
  }

};

export { createMap, initLatLng };
