const button = document.querySelector("button")

button.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          console.log("Latitud: " + lat + ", Longitud: " + lng);
        });
      } else {
        console.log("Geolocalización no está disponible en este navegador.");
      }
   
})