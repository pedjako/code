// listen for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  var x = document.getElementById("location");
  var url;
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  
  function showPosition(position) {
    var latCurrent =  position.coords.latitude;
    var lonCurrent = position.coords.longitude;
    //current weather data uri for one location by geographic coordinates
    url = "http://api.openweathermap.org/data/2.5/weather?lat=" +latCurrent+ "&lon="+lonCurrent+"&APPID=d39871f02d87874dd7b240f783235ae7";
    //XMLHttpRequest
    var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          var weatherData = JSON.parse(request.responseText);
          myFunction(weatherData);
        } 
        function myFunction(data) {
          document.getElementById("location").innerHTML = data.name;
          document.getElementById("sky").innerHTML = data.weather[0].description + '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"/>';
          document.getElementById("wind").innerHTML = data.wind.speed;
          var temp = Math.round(data.main.temp - 273.15);
          document.getElementById("temperature").innerHTML = temp + "&deg" + 'C';
        }  
      }
      request.open("GET", url);
      request.send(null);
  }
  
    //call getLocation to, well, get location
    getLocation();
});
/*{"coord":{"lon":35.86,"lat":34.86},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":298.15,"pressure":1014,"humidity":65,"temp_min":298.15,"temp_max":298.15},"visibility":10000,"wind":{"speed":4.1,"deg":280},"clouds":{"all":40},"dt":1445439600,"sys":{"type":1,"id":7169,"message":0.0153,"country":"SY","sunrise":1445399251,"sunset":1445439254},"id":172880,"name":"Arwad","cod":200}*/


