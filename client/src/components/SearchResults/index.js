import React from "react";
import {Row, Col} from "../Grid"
import "./style.css";
function SearchResults(props) {

    return (

<div>

        <Row>

            <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{props.book.title}</h5>
                    <p className="card-text">{props.book.author}</p>
                    <p className="card-text">{props.book.description}</p>
                    <a href="#" class="btn btn-primary">Save Book</a>
                </div>
            </div>

        </Row>









</div>
    )
}
export default SearchResults;