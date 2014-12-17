'use strict';

var expect = require('chai').expect;
var ProjectsService = require('../../project/project.service.js');

suite('ProjectService test', function () {

    var ProjServ;
    
    setup(function () {
        //need to stub resource
        ProjServ = new project.ProjectsService($resource);
    });

    //Placeholder test
    test('Should return a Project resource object');

});