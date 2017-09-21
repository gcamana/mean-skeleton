"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var Schema = (function () {
    function Schema() {
    }
    Object.defineProperty(Schema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: { type: String, required: '{PATH} is required!' },
                color: { type: String, required: true },
                createdOn: { type: Date },
                modifiedOn: { type: Date, default: Date.now },
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return Schema;
}());
Object.seal(Schema);
exports.DogSchema = mongooseConnection.model('Dog', Schema.schema);
//# sourceMappingURL=dog.schema.js.map