exports.index =  function (req, res) {
    
    res.status(200).sendfile('./index.html');
       
};
                            