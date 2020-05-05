import React, { useState, useEffect } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import List from "../components/List";
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
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <SearchBtn></SearchBtn>
          </Col>
        </Row>
      </Container>  
        </Jumbotron>
      <br></br>
      <Container>
        <List></List>

        <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton} />
        <SaveBtn></SaveBtn>

      </Container>
    </Container>

  );
}


export default Books;
