const db = require("../models");
const axios = require ("axios");
module.exports = {
    
    findBooks: function(req, res){
        axios.get("https://www.googleapis.com/books/v1/volumes")
        .then(function(results){
           const bookResults = results.data.items.filter(function(item){
                if(item.volumeInfo.title && items.volumeInfo.authors && items.volumeInfo.description)
             return true
            })
        .map(function(results){
            return {title:results.volumeInfo.title,authors:results.volumeInfo.authors,description:volumeInfo.description}
        })
         res.json(bookResults);
        })

    }






}