fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=76c5201cae2f252adb536c184e190803')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });