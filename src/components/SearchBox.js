import React, { Component } from 'react'
import { Form } from 'react-bootstrap';


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
            <div>
                <Form.Control type="text" placeholder={searchPlaceholder} />
             </div>
        )
    }
}
