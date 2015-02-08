'use strict';

/**
 * @function reverse
 * @returns {Function}
 * @description Filter function to reverse any set of items in an ng-repeat
 */
exports.reverse = function() {
    return function(items) {
        return items.slice().reverse();
    };
};