const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const ejs = require('ejs')
const port = 3000
app.set('view engine', 'ejs')
var path = require('path')


app.use(bodyParser.urlencoded({extended: true}))
app.use('/public', express.static(__dirname+"/public"))
app.use('js', express.static(__dirname+"/js"))
app.use('/', require('./routes/root'))
app.use('/catalog', require('./routes/catalog'))
app.use('/register', require('./routes/register'))




app.listen(port, function(req,res){
     console.log(`http://localhost:${port}`)
})