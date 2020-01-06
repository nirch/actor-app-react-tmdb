import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import { Container } from 'react-bootstrap';


export default class ActorsPage extends Component {
    

    render() {
        return (
            <div>
                <Container>
                    <SearchBox searchPlaceholder="Search Actor"/>
                    <h1>bla bla bla</h1>
                </Container>
            </div>
        )
    }
}
