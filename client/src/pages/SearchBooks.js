import React, { useState, useEffect } from "react";
import SavedBtn from "../components/SavedBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import SearchForm from "../components/searchForm";
import SearchBtn from "../components/SearchBtn";
import SearchResults from "../components/SearchResults";
function Books() {

  return (

    <Container fluid>
    
        <Navbar></Navbar>
        <Jumbotron>
          <h1>Search for a Good Book using the Google Books API</h1>
        <Container>
        <Row>
          <Col size="12">
            <SearchForm></SearchForm>
            
            
            <SearchBtn></SearchBtn>
          </Col>
        </Row>
      </Container>  
        </Jumbotron>
      <br></br>
      <Container>
       
        <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton} />
        <SavedBtn></SavedBtn>

      </Container>
    </Container>

  );
}


export default Books;
