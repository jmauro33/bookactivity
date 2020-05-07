import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/searchForm";
import SearchResults from "../components/SearchResults";

function Books() {
  const [searchTerm,setSearchTerm]= useState("");
  const [bookResults,setBookResults] =useState([]);
  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(searchTerm);
    API.getBooks(searchTerm)
    .then(function(results){
    console.log(results);
    setBookResults(results);
    })
  }

  return (

    <Container fluid>
    
        

        <Jumbotron>
          <h1>Search for a Good Book using the Google Books API</h1>
        <Container>
        <Row>
          <Col size="12">
            <SearchForm handleFormSubmit = {handleFormSubmit} handleInputChange = {handleInputChange}></SearchForm>
            
          </Col>
        </Row>
      </Container>  
        </Jumbotron>
      <br></br>
      <Container>
        {bookResults && bookResults.map(book => {
          return ( <SearchResults book = {book}></SearchResults> )
        })}
       
      </Container>
    </Container>
  );
}


export default Books;
