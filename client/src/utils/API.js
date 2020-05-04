import axios from "axios";

export default {
  
  getBooks: function() {
    return axios.get("/api/googlebooks");
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
