import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import { Container } from 'react-bootstrap';


export default class ActorsPage extends Component {
    
    constructor(props) {
        super(props);

        this.searchActors = this.searchActors.bind(this);
    }

    searchActors(searchText) {
        alert(searchText);
    }

    render() {
        return (
            <div>
                <Container>
                    <SearchBox searchPlaceholder="Search Actor" results={["Brad Pitt", "Tom Jhones"]}
                                onSearchChange={this.searchActors}/>
                    <h1>bla bla bla</h1>
                </Container>
            </div>
        )
    }
}
