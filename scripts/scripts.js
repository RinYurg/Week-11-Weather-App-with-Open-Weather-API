$(document).ready(function(){
	$('#click').click(function(){
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=37073,us&appid=841ababb42c6befe9281221680f40c92",function(data){
			document.getElementById("temp").innerHTML = "";
			document.getElementById("temp").innerHTML += "<h1>" + String(Math.round(Number(data.main.temp) ) ) + "&deg</h1>";
			document.getElementById("weather").innerHTML = "";
			document.getElementById("weather").innerHTML += "<h1>" + data.weather[0].main + "<br><img src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\"></h1>";
			document.getElementById("hum").innerHTML = "";
	 		document.getElementById("hum").innerHTML += "<h1>" + data.main.humidity + "%" + "</h1>";
	 		document.getElementById("pressure").innerHTML = "";
			document.getElementById("pressure").innerHTML += "<h1>" + String(Math.round(Number(data.main.pressure) ) ) + "&deg</h1>";
			document.getElementById("description").innerHTML = "";
			document.getElementById("description").innerHTML += "<h1>" + String(Math.round(Number(data.main.visibility) ) ) + "&deg</h1>";
			document.getElementById("temp_min").innerHTML = "";
			document.getElementById("temp_min").innerHTML += "<h1>" + String(Math.round(Number(data.main.temp_min) ) ) + "&deg</h1>";
			document.getElementById("temp_max").innerHTML = "";
			document.getElementById("temp_max").innerHTML += "<h1>" + String(Math.round(Number(data.main.temp_max) ) ) + "&deg</h1>";
		});	
	});
});


