"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = require("../DataAccess");
var Crypto_1 = require("./../0.crosswalk/utils/Crypto");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var Schema = (function () {
    function Schema() {
    }
    Object.defineProperty(Schema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                username: { type: String, required: '{PATH} is required!', unique: true },
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                createdOn: { type: Date },
                modifiedOn: { type: Date, default: Date.now },
                salt: { type: String },
                hashedPwd: { type: String }
            });
            schema.methods = {
                validPassword: function (passwordToMatch) {
                    return Crypto_1.Crypto.hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
                },
                getFullname: function () {
                    return this.firstName + " " + this.lastName;
                }
            };
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return Schema;
}());
Object.seal(Schema);
exports.UserSchema = mongooseConnection.model('User', Schema.schema);
//# sourceMappingURL=user.schema.js.map