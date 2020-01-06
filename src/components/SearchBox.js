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
        const { searchPlaceholder, results } = this.props;

        const listGroupItems = results.map(result => <ListGroup.Item action>{result}</ListGroup.Item>);
        
        // let listGroupItems = [];
        // for (var i = 0; i < results.length; i++) {
        //     listGroupItems.push(<ListGroup.Item>{results[i]}</ListGroup.Item>)
        // }

        return (
            <div className="search-box">
                <Form.Control type="text" placeholder={searchPlaceholder} />
                <ListGroup className="search-results">
                    {listGroupItems}
                </ListGroup>
            </div>
        )
    }
}
