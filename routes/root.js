const express = require('express')
const router = express.Router()
const ejs = require('ejs')
const app = express();
var path = require('path')
const {Router} = require("express");

app.set('view engine', 'ejs')
router
    .route("/")
    .get((req, res) =>
{
    res.render(path.resolve('views/index.ejs'))
})

.post((req, res) =>{
    res.send("POST")
})
module.exports = router

