import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/searchForm";

function Books() {

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})


  useEffect(() => {
    loadBooks()
  }, [])


  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };


  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({

      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

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
        <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
      </Container>
    </Container>

  );
}


export default Books;
