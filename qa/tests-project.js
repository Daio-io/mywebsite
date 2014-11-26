var assert = require('chai').assert;
var rest = require('restler');
var inserted = {}
// require('../index.js');

suite('API tests', function () {

    var baseUrl = 'http://localhost:3000';

    // Basic sample object to use for post and testing get data assertions
    var project = {
        name: 'a project',
        description: 'project x',
        projectURL: 'url/to/project',
        imageURL: 'url/to/image',
        date: 'a date'
    };

    var dodgyData = {
        wrong: 'This',
        things: 'is not',
        sent: 'right'
    };

    test('should be able to send and add a project to the API', function (done) {
        postMessage(project).on('success',
            function (data) {
                inserted.project = data.id;
                rest.get(baseUrl + '/api/projects/' + data.id).on('success', function (response) {
                    assert(response.name === project.name);
                    assert(response.description === project.description);
                    assert(response.projectURL === project.projectURL);
                    assert(response.imageURL === project.imageURL);
                    assert(response.date === project.date);
                    done();
                });
            });
    });

    test('I should be able to get all projects from the API', function (done) {
        postMessage(project);
        postMessage(project);
        postMessage(project).on('success', function (data) {
            rest.get(baseUrl + '/api/projects').on('success', function (response) {
                assert(response.length >= 3);
                done();
            });
        });

    });


    test('I should be able to get project by id from API', function (done) {
        postMessage(project).on('success',
            function (response) {
                inserted.sample = response.id;
                assert.match(response.id, /\w/, 'id must be set');
                done();

            });
    });

    test('I should be able to delete a project from the API', function (done) {
        postMessage(project).on('success',
            function (data) {
                inserted.sample = data.id;
                deleteSample(data.id).on('success', function (response) {
                    assert(response.deleted === 1);
                    done();
                })
            });
    });

    test('I should get an error if I send the wrong data', function (done) {
        postMessage(dodgyData).on('success',
            function (data) {
                assert(data.statusCode.should.equal(404));
                done();
            });
    });

    function postMessage(postData) {
        return rest.post(baseUrl + '/api/projects', {
            data: postData
        })
    };

    function deleteSample(id) {
        return rest.del(baseUrl + '/api/projects/' + id);
    };


});