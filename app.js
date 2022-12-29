const express = require('express');
const app =  express();
require('dotenv').config()
const webouter = require('./src/routes/web');


app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs')


app.use('/',  require('./src/routes/web'));
// app.get('/', (req, res) =>{
//     res.end("parth ");
// })


app.listen(process.env.SERVER_PORT, function() {
   console.log(`Server started on port: localhost:${process.env.SERVER_PORT}`);
});
