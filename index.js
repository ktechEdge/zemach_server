
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const port = 8080;
const app = express();



app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));

var db_M = require('./database');
global.db_pool = db_M.pool;


// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Arduino API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/.js'], // Path to the API docs
};

// Swagger docs setup
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.get('/', function (req, res) {
    res.send('Hello World')

});



const environmental_Data_rtr = require('./routes/environmental');
app.use('/Data', environmental_Data_rtr);


const arduino_rtr = require('./routes/arduino');
app.use('/arduino', arduino_rtr);


const environmental_Avg_rtr = require('./routes/environmental_avg');
app.use('/Data_Avg', environmental_Avg_rtr);

const lastupdate_rtr = require('./routes/lastupdate');
app.use('/lastupdate', lastupdate_rtr);

const plant_rtr = require('./routes/plant');
app.use('/plant', plant_rtr);

const global_param_rtr = require('./routes/global_param');
app.use('/global_param', global_param_rtr);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});






