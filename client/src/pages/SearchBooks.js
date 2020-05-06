import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import SearchForm from "../components/searchForm";
import SearchResults from "../components/SearchResults";
function Books() {

  return (

    <Container fluid>
    
        <Nav></Nav>

        <Jumbotron>
          <h1>Search for a Good Book using the Google Books API</h1>
        <Container>
        <Row>
          <Col size="12">
            <SearchForm></SearchForm>
            
          </Col>
        </Row>
      </Container>  
        </Jumbotron>
      <br></br>
      <Container>
       <Jumbotron>
        <SearchResults></SearchResults>
      </Jumbotron>

      </Container>
    </Container>

  );
}


export default Books;
