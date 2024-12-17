const express = require("express");
require('dotenv').config();


const { BdMysql } = require("./database");

const app = express();

app.use(express.json());

BdMysql();


app.use('/api/cliente/',require('./routes/cliente.route'))
app.use('/api/producto/',require('./routes/producto.route'))
app.use('/api/proveedor/',require('./routes/proveedor.route'))

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
