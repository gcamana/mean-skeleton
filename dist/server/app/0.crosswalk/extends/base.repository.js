"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRepository = (function () {
    function BaseRepository(schemaModel) {
        this._model = schemaModel;
    }
    BaseRepository.prototype.query = function (q) {
        return this.promisify(q);
    };
    BaseRepository.prototype.getAll = function (criteria) {
        if (criteria === void 0) { criteria = {}; }
        var query = this._model.find(criteria);
        return this.promisify(query);
    };
    BaseRepository.prototype.findById = function (_id) {
        var query = this._model.findById(_id);
        return this.promisify(query);
    };
    BaseRepository.prototype.findOne = function (criteria) {
        var query = this._model.findOne(criteria);
        return this.promisify(query);
    };
    BaseRepository.prototype.create = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            item['createdOn'] = item['modifiedOn'] = new Date().toISOString();
            _this._model.create(item, function (error, doc) {
                if (error)
                    reject(error);
                resolve(doc);
            });
        });
    };
    BaseRepository.prototype.update = function (_id, item) {
        item['modifiedOn'] = new Date().toISOString();
        var query = this._model.findByIdAndUpdate(_id, item, { new: true });
        return this.promisify(query);
    };
    BaseRepository.prototype.remove = function (_id) {
        var query = this._model.findByIdAndRemove(_id);
        return this.promisify(query);
    };
    BaseRepository.prototype.extendCondition = function (baseCondition, key, op, value) {
        if (!value)
            return baseCondition;
        var operation = {};
        operation[op] = value;
        var newCondition = {};
        newCondition[key] = operation;
        return Object.assign({}, baseCondition, newCondition);
    };
    BaseRepository.prototype.promisify = function (query) {
        return new Promise(function (resolve, reject) {
            query.exec(function (err, docs) {
                if (err)
                    reject(err);
                resolve(docs);
            });
        });
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
Object.seal(BaseRepository);
//# sourceMappingURL=base.repository.js.map