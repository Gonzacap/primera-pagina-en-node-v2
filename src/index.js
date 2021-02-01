const express = require('express');
const path = require('path');
const app = express();


//settings

app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));


//middlewares



//routers

app.use(require('./routes/index.js'));


//static files

app.use(express.static(path.join(__dirname,'/public')));


/*app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'/views/index.html'));
    res.render('index');
});*/


//staticfiles



app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});