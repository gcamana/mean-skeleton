"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseBusiness = (function () {
    function BaseBusiness(docRepository) {
        this.docRepository = docRepository;
        this._docRepository = new docRepository();
    }
    BaseBusiness.prototype.query = function () {
        return this._docRepository.getAll();
    };
    BaseBusiness.prototype.findById = function (_id) {
        return this._docRepository.findById(_id);
    };
    BaseBusiness.prototype.findOne = function (criteria) {
        return this._docRepository.findOne(criteria);
    };
    BaseBusiness.prototype.create = function (item) {
        return this._docRepository.create(item);
    };
    BaseBusiness.prototype.update = function (_id, item) {
        return this._docRepository.update(_id, item);
    };
    BaseBusiness.prototype.remove = function (_id) {
        return this._docRepository.remove(_id);
    };
    return BaseBusiness;
}());
exports.BaseBusiness = BaseBusiness;
Object.seal(BaseBusiness);
//# sourceMappingURL=base.business.js.map