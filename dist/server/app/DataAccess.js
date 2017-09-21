"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Constants_1 = require("./0.crosswalk/Constants");
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log('\x1b[33m', '------------------------------------------------------');
            console.log('\x1b[33m', '              Connected to mongodb.');
            console.log('\x1b[33m', '------------------------------------------------------');
        });
        this.mongooseInstance = mongoose.connect(Constants_1.Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
//# sourceMappingURL=DataAccess.js.map