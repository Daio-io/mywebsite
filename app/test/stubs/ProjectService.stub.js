'use strict';

var Stub = {
    query: function () {
        return [{
                "name": "TestProject",
                "description": "A description",
                "platform": "Android",
                "projectURL": "www.test",
                "imageURL": "test",
                "date": "test"
            },
            {
                "name": "TestProject",
                "description": "A description",
                "platform": "Android",
                "projectURL": "www.test",
                "imageURL": "test",
                "date": "test"
            },
            {
                "name": "TestProject",
                "description": "A description",
                "platform": "Android",
                "projectURL": "www.test",
                "imageURL": "test",
                "date": "test"
            }];
    }

};

exports.ProjStub = Stub;