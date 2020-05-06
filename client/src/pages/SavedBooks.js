import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function SavedBooks() {

    return (
      <Container fluid className="container">
        <Nav></Nav>
      <Jumbotron />
      <Container>
          <SavedResults></SavedResults>
        
      </Container>
  </Container>

    );
  }


export default SavedBooks;
