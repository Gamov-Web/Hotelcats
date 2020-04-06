ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [59.938635, 30.323118],
            zoom: 17,
            controls: ['zoomControl','routeButtonControl','typeSelector']
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Санкт-Петербург, ул Большая Конюшенная, д 19'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map_point.svg',
            iconImageSize: [64, 116],
            iconImageOffset: [-33, -65]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom'); 
});