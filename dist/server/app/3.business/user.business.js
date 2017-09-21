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
var Crypto_1 = require("./../0.crosswalk/utils/Crypto");
var base_business_1 = require("./../0.crosswalk/extends/base.business");
var user_repository_1 = require("./../4.repositories/user.repository");
var UserBusiness = (function (_super) {
    __extends(UserBusiness, _super);
    function UserBusiness() {
        var _this = _super.call(this, user_repository_1.UserRepository) || this;
        _this._userRepository = new user_repository_1.UserRepository();
        return _this;
    }
    UserBusiness.prototype.create = function (user) {
        if (user.password) {
            user.salt = Crypto_1.Crypto.createSalt();
            user.hashedPwd = Crypto_1.Crypto.hashPwd(user.salt, user.password);
            delete user.password;
        }
        return this._userRepository.create(user);
    };
    UserBusiness.prototype.update = function (_id, user) {
        if (user.password) {
            user.salt = Crypto_1.Crypto.createSalt();
            user.hashedPwd = Crypto_1.Crypto.hashPwd(user.salt, user.password);
            delete user.password;
        }
        return this._userRepository.update(_id, user);
    };
    return UserBusiness;
}(base_business_1.BaseBusiness));
exports.UserBusiness = UserBusiness;
Object.seal(UserBusiness);
//# sourceMappingURL=user.business.js.map