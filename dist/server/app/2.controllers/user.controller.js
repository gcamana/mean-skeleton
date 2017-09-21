"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./../0.crosswalk/Constants");
var user_business_1 = require("./../3.business/user.business");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.query = function (req, res) {
        try {
            new user_business_1.UserBusiness().query()
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    UserController.prototype.findById = function (req, res) {
        try {
            new user_business_1.UserBusiness().findById(req.params._id)
                .then(function (result) { return res.json({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: Constants_1.Constants.messages.error.NOT_FOUND }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    UserController.prototype.create = function (req, res) {
        try {
            var user = req.body;
            new user_business_1.UserBusiness().create(user)
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) {
                if (error.toString().indexOf('E11000') > -1) {
                    error = Constants_1.Constants.messages.error.DUPLICATE_USERNAME;
                }
                res.send({ success: false, error: error });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    UserController.prototype.update = function (req, res) {
        try {
            var item = req.body;
            new user_business_1.UserBusiness().update(req.params._id, item)
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    UserController.prototype.remove = function (req, res) {
        try {
            new user_business_1.UserBusiness().remove(req.params._id)
                .then(function (result) { return res.send({ success: true }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    return UserController;
}());
exports.UserController = UserController;
Object.seal(UserController);
//# sourceMappingURL=user.controller.js.map