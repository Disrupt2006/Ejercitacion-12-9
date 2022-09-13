//npx nodemon index
//extension rest client

//requerir modulo express y gardarlo en variable (es una funcion)
const express = require('express');
//llamamos a funcion express
const app = express();
//escuchamos a puerto
const port = 9000;

//llamamos a app y cuando tenga ruta /, llama a la funcion
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//escuche a puerto y cuando se prende que corra esto
app.listen(port, () => {
    console.log (`> server running on port ${port}`);
});




