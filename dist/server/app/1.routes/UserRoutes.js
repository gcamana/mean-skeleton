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
var user_controller_1 = require("./../2.controllers/user.controller");
var router = express.Router();
var UserRoutes = (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes() {
        return _super.call(this, 'users', user_controller_1.UserController) || this;
    }
    return UserRoutes;
}(base_route_1.BaseRoutes));
exports.UserRoutes = UserRoutes;
Object.seal(UserRoutes);
//# sourceMappingURL=UserRoutes.js.map