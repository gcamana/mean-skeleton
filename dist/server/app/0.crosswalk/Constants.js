"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "DB_CONNECTION_STRING", {
        get: function () {
            var isProd = process.env.NODE_ENV === 'production';
            var env = isProd ? 'production' : 'dev';
            var connections = {
                dev: 'mongodb://mixtura-dev:mixtura-dev@ds161210.mlab.com:61210/mixtura-dev',
                production: 'mongodb://mixtura-dev:mixtura-dev@ds161210.mlab.com:61210/mixtura-dev'
            };
            return connections[env];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "messages", {
        get: function () {
            return {
                error: {
                    BAD_REQUEST: 'Error in your request.',
                    NOT_FOUND: 'Item not found.',
                    AUTHENTICATION_ERROR: 'Authentication error',
                    ACCESS_DENIED: 'Access denied.',
                    DUPLICATE_USERNAME: 'Username already exists.',
                    INVALID_USERNAME: 'You must enter a valid username.',
                    INCORRECT_USERNAME: 'Incorrect username.',
                    INCORRECT_PASSWORD: 'Incorrect password.',
                    NO_FILES_PROVIDED: 'No files provided.'
                },
                info: {}
            };
        },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=Constants.js.map