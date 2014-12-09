'use strict';

var expect = require('chai').expect;
var ProjectController = require('../../controllers/ProjectCtrl.js');

suite('ProjectController test', function () {

    var ProjectCtrl;
    var projServStub = require('../stubs/ProjectService.stub.js').ProjStub;

    setup(function () {

        //Need to stub ProjectService
        ProjectCtrl = new ProjectController.ProjectController(projServStub);

    });

    //Placeholder test
    test('should have a projects defined', function (done) {

        for (var i = 0; i < ProjectCtrl.projects.length; i++) {
            expect(ProjectCtrl.projects[i].stuff).to.equal('stuuf');
        }

        done();

    });

});