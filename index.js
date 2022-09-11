"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3002;
/* instalar --save-dev @types/node si no reconoce process */
app.get("/users", function (req, res) {
    res.json({
        users: []
    });
});
app.post("/users", function (req, res) {
    res.status(201).json({
        message: "ok",
        id: 1234
    });
});
app.get("users/:userId/products", function (req, res) {
    res.json({
        products: []
    });
});
app.listen(port, function () {
    console.log("express iniciado en ", port);
});
