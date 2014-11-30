exports.error500 = function (err, req, res, next) {
    // pass in err to log the error to the console
    console.error(err.stack);
    res.status(500);

};

exports.error404 = function (req, res) {
    res.render('404');
    res.status(404);

};