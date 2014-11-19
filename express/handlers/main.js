exports.index =  function (req, res) {
    
    res.render('index');
       
};

exports.partial = function (req, res) {
  
    var directory = req.params.directory;
    var file = req.params.file;
    res.render(directory + '/' + file);
    
};
                            