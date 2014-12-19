var assert = require('chai').assert;
var http = require('http');
var rest = require('restler');

suite('API tests', function () {

    var baseUrl = 'http://localhost:3000';

    // Basic sample object to use for post and testing get data assertions
    var blogpost = {
        title: "A blog post title",
        short: "blog short description",
        full: "blog post full description"
    };


    test('should be able to send and add a blog post to the API', function (done) {
        postMessage(blogpost).on('complete',
            function (data) {
                rest.get(baseUrl + '/api/blogs/' + data.id).on('complete', function (response) {
                    assert(response.title === blogpost.title);
                    assert(response.short === blogpost.short);
                    assert(response.full === blogpost.full);
                    assert.isDefined(response.dateCreated);
                    done();
                });
            });
    });

    test('I should be able to get all blogposts from the API', function (done) {
        postMessage(blogpost);
        postMessage(blogpost);
        postMessage(blogpost).on('complete', function (data) {
            rest.get(baseUrl + '/api/blogs').on('complete', function (response) {
                assert(response.length >= 3);
                done();
            });
        });

    });

    test('I should be able to get blogpost by id from API', function (done) {
        postMessage(blogpost).on('complete',
            function (response) {
                assert.match(response.id, /\w/, 'id must be set');
                done();

            });
    });

    test('I should be able to delete a blogpost from the API', function (done) {
        postMessage(blogpost).on('complete',
            function (data) {
                deleteSample(data.id).on('complete', function (response) {
                    assert(response.deleted === 1);
                    done();
                })
            });
    });

    test('I should get an error when trying to get a blogpost which does not exist', function (done) {
        var fakeId = 'this_is_not_an_id';
        rest.get(baseUrl + '/api/blogs/' + fakeId).on('complete', function (response) {
            assert(response.status === 'error');
            done();
        });
    });


    function postMessage(postData) {
        return rest.post(baseUrl + '/api/blogs', {
            data: postData
        })
    };

    function deleteSample(id) {
        return rest.del(baseUrl + '/api/blogs/' + id);
    };


});