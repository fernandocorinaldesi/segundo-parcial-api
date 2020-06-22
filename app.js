// ###### FRAMEWORKS Y LIBRERIAS GENERALES
const express = require('express');
const bodyparser = require( 'body-parser');
const cors = require('cors')
const userRouter  = require('./routes/tutorialesrouter');

const PORT = process.env.PORT || 3001;

// ###### INICIO EXPRESS
const app = express();

// ###### SET EXPRESS CUESTIONES GENERALES
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

// ###### SET EXPRESS CORS PARA LA API
app.use(cors());

// ###### ENDPOINTS
app.use('/api/tutoriales', userRouter);

// ###### INICIO DE LA APP
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
})