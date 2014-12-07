var expect = require('chai').expect;
var ProjectController = require('../../controllers/ProjectCtrl.js');

suite('ProjectController test', function () {
    
    var ProjectCtrl;
    
    setup(function () {

        //Need to stub ProjectService
        ProjectCtrl = new ProjectController.ProjectController(ProjectService);
        
    });

    //Placeholder test
    test('should have a word defined', function (done) {

        done();
        
    });
    
});