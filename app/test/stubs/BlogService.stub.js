'use strict';

var Stub = {
    query: function () {
        return [{
                "id": "an id",
                "title": "Blog title",
                "short": "short blog description",
                "full": "<div>A bit of HTML code</div><p></p><div>Here is a bit of <code>code</code>/div>",
            },
            {
                "id": "an id",
                "title": "Blog title",
                "short": "short blog description",
                "full": "<div>A bit of HTML code</div><p></p><div>Here is a bit of <code>code</code>/div>",
            },
            {
                "id": "id",
                "title": "Blog title",
                "short": "short blog description",
                "full": "<div>A bit of HTML code</div><p></p><div>Here is a bit of <code>code</code>/div>",
            }];
    },
    
    get: function(idObject) {
        if (idObject.id === 'id')
            return {
                "id": "id",
                "title": "Blog title",
                "short": "short blog description",
                "full": "<div>A bit of HTML code</div><p></p><div>Here is a bit of <code>code</code>/div>",
            }    
        else return undefined;
    }
};

exports.BlogStub = Stub;