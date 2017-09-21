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
var base_business_1 = require("./../0.crosswalk/extends/base.business");
var dog_repository_1 = require("./../4.repositories/dog.repository");
var DogBusiness = (function (_super) {
    __extends(DogBusiness, _super);
    function DogBusiness() {
        return _super.call(this, dog_repository_1.DogRepository) || this;
    }
    return DogBusiness;
}(base_business_1.BaseBusiness));
exports.DogBusiness = DogBusiness;
Object.seal(DogBusiness);
//# sourceMappingURL=dog.business.js.map