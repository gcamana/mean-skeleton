"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var DogRoutes_1 = require("./DogRoutes");
var UserRoutes_1 = require("./UserRoutes");
var app = express();
var AllRoutes = (function () {
    function AllRoutes() {
    }
    Object.defineProperty(AllRoutes.prototype, "routes", {
        get: function () {
            app.use('/', new UserRoutes_1.UserRoutes().routes);
            app.use('/', new DogRoutes_1.DogRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return AllRoutes;
}());
exports.AllRoutes = AllRoutes;
//# sourceMappingURL=AllRoutes.js.map