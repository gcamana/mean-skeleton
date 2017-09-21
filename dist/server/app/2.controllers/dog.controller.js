"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./../0.crosswalk/Constants");
var dog_business_1 = require("./../3.business/dog.business");
var DogController = (function () {
    function DogController() {
    }
    DogController.prototype.query = function (req, res) {
        try {
            new dog_business_1.DogBusiness().query()
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    DogController.prototype.findById = function (req, res) {
        try {
            new dog_business_1.DogBusiness().findById(req.params._id)
                .then(function (result) { return res.json({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: Constants_1.Constants.messages.error.NOT_FOUND }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    DogController.prototype.create = function (req, res) {
        try {
            var item = req.body;
            new dog_business_1.DogBusiness().create(item)
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    DogController.prototype.update = function (req, res) {
        try {
            var item = req.body;
            new dog_business_1.DogBusiness().update(req.params._id, item)
                .then(function (result) { return res.send({ success: true, result: result }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    DogController.prototype.remove = function (req, res) {
        try {
            new dog_business_1.DogBusiness().remove(req.params._id)
                .then(function (result) { return res.send({ success: true }); })
                .catch(function (error) { return res.send({ success: false, error: error }); });
        }
        catch (e) {
            console.log(e);
            res.send({ success: false, error: Constants_1.Constants.messages.error.BAD_REQUEST });
        }
    };
    return DogController;
}());
exports.DogController = DogController;
Object.seal(DogController);
//# sourceMappingURL=dog.controller.js.map