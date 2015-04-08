var express           = require('express'),
    app               = express();
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    anglesController = require('./server/controllers/main-controller');

mongoose.connect('mongodb://localhost:27017/third-mean-demo')

app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/images', express.static(__dirname + '/client/images'));

app.use('/views', express.static(__dirname + '/client/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

//REST API
app.get('/api/angles', anglesController.list);
app.post('/api/angles', anglesController.create);

app.listen(3000, function() {
    console.log('I\'m Listening...');
});