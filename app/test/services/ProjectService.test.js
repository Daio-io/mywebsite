'use strict';

var expect = require('chai').expect;
var ProjectsService = require('../../Services/ProjectsService.js');

suite('ProjectService test', function () {

    var ProjServ;
    
    setup(function () {
        //need to stub resource
        ProjServ = new ProjectsService.ProjectsService($resource);
    });

    //Placeholder test
    test('Should return a Project resource object', function (done) {

        //Placeholder expect
        expect(ProjServ.query()).to.exist;
        done();

    });

});