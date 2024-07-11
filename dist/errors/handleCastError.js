"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cast Error Thrower
const handleCastError = (err) => {
    const errorSources = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Cast Error, wrong request',
        errorSources,
    };
};
exports.default = handleCastError;
