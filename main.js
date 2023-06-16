const button = document.querySelector("button");
const test = document.querySelector("#test");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        test.innerHTML = data.address.road;
        console.table(data.address);
      })
      .catch(() => {
        console.log("Error");
      });
  });
});
