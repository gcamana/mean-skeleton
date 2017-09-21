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
var user_schema_1 = require("./../5.schemas/user.schema");
var User = mongoose.model('User');
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, user_schema_1.UserSchema) || this;
    }
    return UserRepository;
}(base_repository_1.BaseRepository));
exports.UserRepository = UserRepository;
Object.seal(UserRepository);
//# sourceMappingURL=user.repository.js.map