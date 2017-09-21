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
var mongoose = require("mongoose");
var base_repository_1 = require("./../0.crosswalk/extends/base.repository");
var dog_schema_1 = require("./../5.schemas/dog.schema");
var User = mongoose.model('Dog');
var DogRepository = (function (_super) {
    __extends(DogRepository, _super);
    function DogRepository() {
        return _super.call(this, dog_schema_1.DogSchema) || this;
    }
    return DogRepository;
}(base_repository_1.BaseRepository));
exports.DogRepository = DogRepository;
Object.seal(DogRepository);
//# sourceMappingURL=dog.repository.js.map