import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function SavedBooks() {

    return (
      <Container fluid className="container">
        <Navbar></Navbar>
      <Jumbotron />
      <Container>
          <SavedResults></SavedResults>
          <DeleteBtn></DeleteBtn>
      </Container>
  </Container>

    );
  }


export default SavedBooks;
