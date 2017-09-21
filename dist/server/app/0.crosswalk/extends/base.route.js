"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var BaseRoutes = (function () {
    function BaseRoutes(Identity, DocController) {
        this.Identity = Identity;
        this.DocController = DocController;
        this._identity = Identity;
        this._docController = new DocController();
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            var controller = this._docController;
            router.get("/" + this._identity, controller.query);
            router.get("/" + this._identity + "/:_id", controller.findById);
            router.post("/" + this._identity, controller.create);
            router.put("/" + this._identity + "/:_id", controller.update);
            router.delete("/" + this._identity + "/:_id", controller.remove);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
exports.BaseRoutes = BaseRoutes;
Object.seal(BaseRoutes);
//# sourceMappingURL=base.route.js.map