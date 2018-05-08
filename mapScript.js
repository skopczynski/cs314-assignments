function initMap() {
    var uluru = {lat: 47.660183, lng: -117.420344};
    var roadOne = {lat: 47.622182, lng: -116.649042};
    var roadTwo = {lat: 47.452174, lng: -116.785565};
    var roadThree = {lat: 47.402839, lng: -116.661635};
    var roadFour = {lat: 47.571798, lng: -116.442307};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru
    });
    var markerOne = new google.maps.Marker({
        position: roadOne,
        map: map
    });
    var markerTwo = new google.maps.Marker({
        position: roadTwo,
        map: map
    });
    var markerThree = new google.maps.Marker({
        position: roadThree,
        map: map
    });
    var markerFour = new google.maps.Marker({
        position: roadFour,
        map: map
    });
    markerOne.addListener('click', function() {
        infowindowOne.open(map, markerOne);
      });
    markerTwo.addListener('click', function() {
    infowindowTwo.open(map, markerTwo);
    });
    markerThree.addListener('click', function() {
    infowindowThree.open(map, markerThree);
    });
    markerFour.addListener('click', function() {
    infowindowFour.open(map, markerFour);
    });
    var contentStringOne = 
    '<h3 id="firstHeading" class="firstHeading">Marker One</h3>';
    var contentStringTwo = 
    '<h3 id="firstHeading" class="firstHeading">Marker Two</h3>';
    var contentStringThree = 
    '<h3 id="firstHeading" class="firstHeading">Marker Three</h3>';
    var contentStringFour = 
    '<h3 id="firstHeading" class="firstHeading">Marker Four</h3>';
    var infowindowOne = new google.maps.InfoWindow({
        content: contentStringOne
    });
    var infowindowTwo = new google.maps.InfoWindow({
    content: contentStringTwo
    });
    var infowindowThree = new google.maps.InfoWindow({
    content: contentStringThree
    });
    var infowindowFour = new google.maps.InfoWindow({
    content: contentStringFour
    });
}