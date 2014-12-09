'use strict';

var expect = require('chai').expect;
var ProjectController = require('../../controllers/ProjectCtrl.js');

suite('ProjectController test', function () {

    var ProjectCtrl;
    var projServStub;

    setup(function () {

        // Stub the service
        projServStub = require('../stubs/ProjectService.stub.js').ProjStub;
        
        // Create new controller
        ProjectCtrl = new ProjectController.ProjectController(projServStub);

    });

    test('should have array of projects defined on scope', function (done) {

        for (var i = 0; i < ProjectCtrl.projects.length; i++) {
            expect(ProjectCtrl.projects[i].name).to.exist;
            expect(ProjectCtrl.projects[i].description).to.exist;
            expect(ProjectCtrl.projects[i].platform).to.exist;
            expect(ProjectCtrl.projects[i].projectURL).to.exist;
            expect(ProjectCtrl.projects[i].imageURL).to.exist;
            expect(ProjectCtrl.projects[i].date).to.exist;
        }

        done();

    });

});