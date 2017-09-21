"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var compress = require("compression");
var morgan = require("morgan");
var cors = require("cors");
var Express = (function () {
    function Express() {
    }
    Express.init = function (app) {
        app.use(compress());
        app.use(bodyParser.json({ limit: '5mb' }));
        app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
        app.use(morgan('dev'));
        app.use(cors({ origin: '*' }));
    };
    return Express;
}());
exports.Express = Express;
//# sourceMappingURL=Express.js.map