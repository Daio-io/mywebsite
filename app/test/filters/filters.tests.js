'use strict';

var expect = require('chai').expect;
var Filters = require('../../filters/filters.js');

var itemsObject = [

    {
        "iteminitem": "item1"
    },

     {
        "iteminitem": "item2"
    },

     {
        "iteminitem": "item3"
    }
];

suite('Filters test', function () {


    test('reverse filter should reverse items', function (done) {

        var reverse = Filters.reverse();

        var reversed = reverse(itemsObject);

        for (var i = 0; i < reversed.length; i ++){

            expect(reversed[i]).to.eql(itemsObject[itemsObject.length - (1 + i)]);
        }

        done();

    });
});