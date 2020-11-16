import ymaps from 'ymaps';

export const contactsMaps = () => {
  if (document.querySelector('.page--contacts')) {
    let mapCenter;
    const mapBlock = document.getElementById('map');

    // console.log(JSON.parse(decodeURIComponent(mapBlock.dataset.coordinates)));

    const getMapCenter = () => {
      // variables.scss
      // $breakpoint-small: 640px;  // Phone landscape
      // $breakpoint-medium: 960px;  // Tablet Landscape
      // $breakpoint-large:1200px; // Desktop
      // $breakpoint-xlarge:1600px; // Large Screens

      // mapCenter = JSON.parse(decodeURIComponent(mapBlock.dataset.coordinates));

      if (window.innerWidth >= 1200) {
        mapCenter = [56.349619, 43.79827];
      } else if (window.innerWidth >= 640) {
        mapCenter = [56.349619, 43.80327]; // 0 0.005
        mapCenter[1] += 0.005;
      } else {
        mapCenter = [56.351919, 43.80727]; // 0.0023 0.009
        mapCenter[0] += 0.0023;
        mapCenter[1] += 0.009;
      }
      // console.log(mapCenter);
      return mapCenter;
    };

    ymaps
      .load(
        'https://api-maps.yandex.ru/2.1/?apikey=7831c6db-8a7f-49d5-a7b7-c567b1e05675&lang=ru_RU'
      )
      .then((maps) => {
        const myMap = new maps.Map('map', {
          center: getMapCenter(),
          zoom: 16,
          controls: [],
        });
        myMap.controls.add('zoomControl', {
          left: 5,
          top: 60,
        });
        myMap.behaviors.disable('scrollZoom');

        var myPlacemark1 = new maps.Placemark(
          [56.349619, 43.80727],
          {
            hintContent: 'ул. Торфяная, 30',
            balloonContent: '603139, г. Нижний Новгород, ул.Торфяная, 30 ',
          },
          {
            iconLayout: 'default#image',
            iconImageHref:
              '/local/templates/transsignal/assets/icon_geo@2x.png',
            iconImageSize: [48, 58],
            iconImageOffset: [-24, -58],
          }
        );
        myMap.geoObjects.add(myPlacemark1);
      })
      .catch((error) => console.log('Failed to load Yandex Maps', error));
  }
};
