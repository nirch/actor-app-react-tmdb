import React, { Component } from 'react'
import { Form, ListGroup } from 'react-bootstrap';
import './SearchBox.css';



// Props
// searchPlaceholder. a string for the placeholder to show in the search input
// results. an array of results that the componenet will render
// onSearchChange. callback function to parent notifying that the search text has changed
// onSelectedResult. callback function to parent notifying on the selected result (index from the results prop)
// State
// searchText
export default class SearchBox extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { searchPlaceholder } = this.props;


        return (
            <div className="search-box">
                <Form.Control type="text" placeholder={searchPlaceholder} />
                <ListGroup className="search-results">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
