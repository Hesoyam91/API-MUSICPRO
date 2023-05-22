function getData() {
  return new Promise((resolve, reject) => {
    // Realizar solicitud a la API de saludo
    fetch('https://musicpro.bemtorres.win/api/v1/test/saludo')
      .then(response => response.json())
      .then(data => {
        const saludo = data.message;
        console.log('Saludo:', saludo); // Mostrar el saludo en la consola
        
        // Realizar solicitud a la API de saldo
        fetch('https://musicpro.bemtorres.win/api/v1/test/saldo')
          .then(response => response.json())
          .then(data => {
            const saldo = data.saldo;
            console.log('Saldo:', saldo); // Mostrar el saldo en la consola
            
            // Resolver la promesa con los datos
            resolve({ saludo, saldo });
          })
          .catch(error => {
            // Rechazar la promesa en caso de error
            reject(error);
          });
      })
      .catch(error => {
        // Rechazar la promesa en caso de error
        reject(error);
      });
  });
}

// Llamar a la función y manejar los datos obtenidos
getData()
  .then(data => {
    console.log('Datos obtenidos:', data);
    // Puedes utilizar los datos aquí como desees
  })
  .catch(error => {
    console.error('Error:', error);
  });
