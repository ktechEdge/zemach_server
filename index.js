
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

const environmentalDataRoutes = require('./routes/environmental');
app.use('/environmental-data', environmentalDataRoutes);

const arduinoRoutes = require('./routes/arduino');
app.use('/arduino-devices', arduinoRoutes);

const environmentalAvgRoutes = require('./routes/environmental_avg');
app.use('/environmental-data-avg', environmentalAvgRoutes);

const lastUpdateRoutes = require('./routes/lastupdate');
app.use('/last-updates', lastUpdateRoutes);

const plantRoutes = require('./routes/plant');
app.use('/plants', plantRoutes);

const globalParamRoutes = require('./routes/global_param');
app.use('/global-parameters', globalParamRoutes);


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});






