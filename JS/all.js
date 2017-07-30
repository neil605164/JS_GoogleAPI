var map;
var marker;

function initMap() {
	var uluru = {lat: 24.306670, lng: 120.681862}
	var divmap = document.getElementById('map');
	map = new google.maps.Map(divmap, {
		center: uluru,
		zoom: 14
	});

	// for(var i=0; i<data.length; i++){
	// 	marker = new google.maps.Marker(data[i]);
	// }
}
