var file = require("../models/file.js");

exports.showIndex = function(req,res){
    file.getAllAlbums(function(err,allAlbums){
        if (err) {
            res.send(err);
            return;
        }
        res.render("index",{
            "albums":allAlbums
        });
    })
};

exports.showAlbum = function(req,res){
    var albumName = req.params.albumName;
    file.getAllimagesByAlbumName(albumName,function(err,imagesArray){
        if (err) {
            res.send(err);
            return;
        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        })
    });
};

