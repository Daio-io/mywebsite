var expect = require('chai').expect;
var ProjectService = require('../../Services/ProjectService.js');

suite('ProjectService test', function () {
    
    var ProjServ;
    
    setup(function () {

        //need to stub resource
        ProjServ = new ProjectService.ProjectService(resource);
    });

    //Placeholder test
    test('Should return a Project resource object', function (done) {

        //Placeholder expect
        expect(ProjServ.query()).to.exist;
        done();
        
    });
    
});