//npx nodemon index
//extension rest client

//requerir modulo express y gardarlo en variable (es una funcion)
const express = require('express');

//requerir menu 
const menu = require('./menu.json');


//llamamos a funcion express
const app = express();
//escuchamos a puerto
const port = 9000;

//para recibirr request tipo post (envian json en vez de texto)
app.use(express.json());


//ej1
app.get('/menu', function (req, res) {
  res.json(menu);
});

//ej2
//los : significan parametro
app.get('/menu/:id', function (req, res) {
  //guardar parametro
  const id = req.params.id;

  if (!req.params.id) return res.status(404).json ({error: 'falta el id del producto'});

  const item = (menu.find(e => e.id === id));

  if (!item) return res.status(404).json ({error: 'item not found'});
  
  res.json(item);

});

//ej3
app.get('/principales', function (req, res) {
  res.json(menu.filter((e) => e.tipo === "principal"));
});

//ej4
app.get('/postres', function (req, res) {
  res.json(menu.filter((e) => e.tipo === "postre"));
});

//ej5
app.get('/bebidas', function (req, res) {
  res.json(menu.filter((e) => e.tipo === "bebida"));
});

//ej6
app.post('/pedido', function (req, res) {
  const precio = req.body.productos;
  
  if (!precio) return  res.status(404).json ({error: 'no se pidieron productos'});

 precio.map( 
 (item) => menu.find((i) => i.id === item.id).precio * item.cantidad
 )
 .reduce((a, b) => a + b);
 
 //no se como returnear bien
  res.json(item);
});



//escuche a puerto y cuando se prende que corra esto
app.listen(port, () => {
    console.log (`> server running on port ${port}`);
});




