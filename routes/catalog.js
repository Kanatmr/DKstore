const express = require('express')
const router = express.Router()
const app = express();
var path = require('path')
const {Router} = require("express");

router
    .route("/")
    .get((req, res) =>
    {
        res.render(path.resolve('views/catalog.ejs'))
    })

    .post((req, res) =>{
        res.send("POST")
    })
module.exports = router;