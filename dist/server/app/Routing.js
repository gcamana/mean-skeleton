"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var AllRoutes_1 = require("./1.routes/AllRoutes");
var Routing = (function () {
    function Routing() {
    }
    Routing.init = function (app) {
        app.use('/', express.static(__dirname + '/../../client'));
        app.use('/api', new AllRoutes_1.AllRoutes().routes);
        app.use(function (req, res, next) {
            if (path.extname(req.path).length > 0) {
                // normal static file request
                next();
            }
            else {
                // redirect all html requests to `index.html`
                res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
            }
        });
    };
    return Routing;
}());
exports.Routing = Routing;
//# sourceMappingURL=Routing.js.map