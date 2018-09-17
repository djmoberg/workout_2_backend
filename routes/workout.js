var express = require('express');
var router = express.Router();

var fs = require('fs')

router.get("/store", (req, res, next) => {
    fs.readFile("store.json", "utf8", (err, data) => {
        if (err) res.sendStatus(500)
        console.log(JSON.parse(data))
        res.json(JSON.parse(data))
    })
})

router.put("/store", (req, res, next) => {
    let data = JSON.stringify(req.body, null, 4)
    console.log(data)

    fs.writeFile("store.json", data, (err) => {
        if (err) console.log(err)
        console.log("Store saved")
        res.sendStatus(200)
    })
})

module.exports = router;
