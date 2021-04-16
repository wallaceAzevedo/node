const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_react',{
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(getHello());
});

const productRouter = require('./src/routes/product-route');
app.use('/user', userRouter);

const userRouter = require('./src/routes/user-route');
app.use('/product', productRouter);

app.listen(4000, function(){
    console.log('Hello Express listen on port 4000');
});