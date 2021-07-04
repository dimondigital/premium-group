ymaps.ready(init);

function init() {

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [48.458031, 35.054643],
        zoom: 17,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([48.458031, 35.054643], {
        balloonContent: '<p>Здесь расположен наш офис</p>'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    });

    myMap.geoObjects.add(myPlacemark);
}