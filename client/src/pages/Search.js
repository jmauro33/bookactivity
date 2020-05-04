import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Search() {

    function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };

    return (
      <Container fluid>
        <Row>
         <Navbar></Navbar>
            <Jumbotron>
              <h1>Search for a Book</h1>
            </Jumbotron>
          
        </Row>
        <Row>
          <Jumbotron>
            <List>

            </List>
          </Jumbotron>
        </Row>
      </Container>

    );
  }


export default Search;
