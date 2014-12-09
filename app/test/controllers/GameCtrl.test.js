'use strict';

var expect = require('chai').expect;
var GameController = require('../../controllers/GameCtrl.js');

suite('GameController test', function () {
    
    var GameCtrl;
    
    setup(function () {

        GameCtrl = new GameController.GameController();
    });

    //Placeholder test
    test('should have a word defined', function (done) {

        expect(GameCtrl.word).to.exist;
        done();
        
    });
    
});