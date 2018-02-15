$(document).ready(function() {
      
      /* Maps */
    
        var map = new GMaps({
            div: '.map',
            lat: 55.6111693,
            lng: 12.3679516,
            zoom: 15
    });
            map.addMarker({
            lat: 55.61285,
            lng: 12.355,
            title: 'Ishøj',
            infoWindow: {
            content: '<p>Our Headquaters</p>'
        }
    });

});
    