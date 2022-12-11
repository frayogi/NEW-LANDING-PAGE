'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
    return (typeof payload === 'object') && (payload.isAxiosError === true);
};



//////////////////
// WEBPACK FOOTER
// ./lib/helpers/isAxiosError.js
// module id = 26
// module chunks = 0