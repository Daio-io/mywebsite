exports.index =  function (req, res) {
    
    res.render('index');
       
};

exports.partial = function (req, res) {
  
    res.render(req.params.file);
    
};
                            