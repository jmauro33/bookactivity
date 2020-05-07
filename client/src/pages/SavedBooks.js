import React, { useState, useEffect } from "react";

import Jumbotron from "../components/Jumbotron";

import SavedResults from "../components/SavedResults";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function SavedBooks() {

    return (
      <Container fluid className="container">
       
      <Jumbotron />
      <Container>
          <SavedResults></SavedResults>
        
      </Container>
  </Container>

    );
  }


export default SavedBooks;
