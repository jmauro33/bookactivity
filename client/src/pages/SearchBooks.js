import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import List from "../components/List";
import SearchForm from "../components/searchForm";
import SearchResults from "../components/SearchResults";
function Books() {

  
  return (

    <Container fluid>
    
        <Navbar></Navbar>
        <Jumbotron>
          <h1>Search for a Book</h1>

        </Jumbotron>

      
      <Container>
        <Row>
          <Col size="12">
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton} />
      </Container>
    </Container>

  );
}


export default Books;
