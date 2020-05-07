const db = require("../models");
const axios = require ("axios");
module.exports = {
    
    findBooks: function(req, res){
        console.log(req.query);
        axios.get("https://www.googleapis.com/books/v1/volumes",{params:req.query})
        .then(function(results){
           const bookResults = results.data.items.filter(function(item){
                if(item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.description)
             return true
            })
        .map(function(results){
            console.log(results);
            return {title:results.volumeInfo.title,authors:results.volumeInfo.authors,description:results.volumeInfo.description}
        })
         res.json(bookResults);
        })

    }






}