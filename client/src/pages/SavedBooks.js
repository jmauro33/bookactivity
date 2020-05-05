import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function SavedBooks() {

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

    return (
      <Container fluid className="container">
      <Jumbotron />
      <Container>
          <SavedResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
      </Container>
  </Container>

    );
  }


export default SavedBooks;
