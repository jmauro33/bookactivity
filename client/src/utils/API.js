import axios from "axios";

export default {
  
  getBooks: function(search) {
    return axios.get("/api/googlebooks",{params:{q:"title:"+search}});
  },
  
  getBook: function(id) {
    return axios.get("/api/googlebooks/" + id);
  },
  
  deleteBook: function(id) {
    return axios.delete("/api/googlebooks/" + id);
  },
  
  saveBook: function(bookData) {
    return axios.post("/api/googlebooks", bookData);
  }
};
