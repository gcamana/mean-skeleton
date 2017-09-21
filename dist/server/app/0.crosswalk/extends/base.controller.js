"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./../../0.crosswalk/Constants");
var BaseController = (function () {
    function BaseController(baseBusiness) {
        this._docBusiness = new baseBusiness();
    }
    BaseController.prototype.query = function (req, res) {
        try {
            this._docBusiness.query()
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    BaseController.prototype.findById = function (req, res) {
        try {
            this._docBusiness.findById(req.params._id)
                .then(function (result) { return res.json({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: Constants_1.Constants.messages.error.NOT_FOUND }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    BaseController.prototype.create = function (req, res) {
        try {
            var item = req.body;
            this._docBusiness.create(item)
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    BaseController.prototype.update = function (req, res) {
        try {
            var item = req.body;
            this._docBusiness.update(req.params._id, item)
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    BaseController.prototype.remove = function (req, res) {
        try {
            this._docBusiness.remove(req.params._id)
                .then(function (result) { return res.send({ success: true }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map