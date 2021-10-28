const express = require('express');
const mongoose = require('mongoose');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const cors = require ('cors');

// usar metodos de librerias
const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Database setup
mongoose.connect(process.env.DATABASE,{
    userNewUrlParser: true,
    userCreateIndex:true,
    userUnidiedTopology:true
}).then(()=>{console.log("Conexion de la base de datos exitosa")})

//Routes setup
app.use('/api/category', require('./routes/category'));

//Listen to Port
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Servidor de pentagonum, esta ejecutandose desde el puerto ${port}');
})
