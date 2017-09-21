"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var Crypto = (function () {
    function Crypto() {
    }
    Crypto.createSalt = function () {
        return crypto.randomBytes(128).toString('base64');
    };
    Crypto.hashPwd = function (salt, pwd) {
        var hmac = crypto.createHmac('sha1', salt);
        hmac.setEncoding('hex');
        hmac.write(pwd);
        hmac.end();
        return hmac.read();
    };
    return Crypto;
}());
exports.Crypto = Crypto;
//# sourceMappingURL=Crypto.js.map