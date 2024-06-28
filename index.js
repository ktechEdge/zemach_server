const express = require('express');
const port = 8080;
const app = express();
const swaggerjsdoc= require('swagger-jsdoc');
const  swaggerui = require('swagger-ui-express');


app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));

var db_M = require('./database');
global.db_pool = db_M.pool;


app.get('/', function (req, res) {
    res.send('Hello World')

});

const options = {
    definition: {
        openapi: "3.0.0",
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const spacs = swaggerjsdoc(options)
app.use(
    "/api-doc",
    swaggerui.serve,
    swaggerui.setup(spacs)
)

const environmental_Data_rtr = require('./routes/environmental');
app.use('/Data', environmental_Data_rtr);


const arduino_rtr = require('./routes/arduino');
app.use('/arduino', arduino_rtr);


const LastUpdate_rtr = require('./routes/LastUpdate');
app.use('/LastUpdate', LastUpdate_rtr);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});






