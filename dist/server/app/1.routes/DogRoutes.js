"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var base_route_1 = require("./../0.crosswalk/extends/base.route");
var dog_controller_1 = require("./../2.controllers/dog.controller");
var router = express.Router();
var DogRoutes = (function (_super) {
    __extends(DogRoutes, _super);
    function DogRoutes() {
        return _super.call(this, 'dogs', dog_controller_1.DogController) || this;
    }
    return DogRoutes;
}(base_route_1.BaseRoutes));
exports.DogRoutes = DogRoutes;
Object.seal(DogRoutes);
//# sourceMappingURL=DogRoutes.js.map