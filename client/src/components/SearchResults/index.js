import React from "react";
import {Row, Col} from "../Grid"
import "./style.css";
function SearchResults(props) {

    return (

<div>

        <Row>

            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{props.book.title}</h5>
                    <p class="card-text">{props.book.author}</p>
                    <p class="card-text">{props.book.description}</p>
                    <a href="#" class="btn btn-primary">Save Book</a>
                </div>
            </div>

        </Row>









</div>
    )
}
export default SearchResults;