// 1.載入JSON資料
// 2.整理資料，資料中須含有『經度』，『緯度』，『title』
// 3.呼叫Google map API
// 4.顯示 Mark

window.addEventListener('load', API_Connect, false);

function API_Connect() {
	var API = "https://github.com/neil605164/JS_GoogleAPI/blob/master/JSON/car_park.json";
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		console.log(xhr);
	if (this.readyState == 4 && this.status == 200) {
		DataChange(this.responseText);
	}
};
xhr.open("GET", API, true);
xhr.send();
}

function DataChange(data) {
	console.log(data);
}

// var map;
// var marker;
//
// function initMap() {
// 	var uluru = {lat: 24.306670, lng: 120.681862}
// 	var divmap = document.getElementById('map');
// 	map = new google.maps.Map(divmap, {
// 		center: uluru,
// 		zoom: 14
// 	});
//
// 	for(var i=0; i<data.length; i++){
// 		marker = new google.maps.Marker(data[i]);
// 	}
// }
