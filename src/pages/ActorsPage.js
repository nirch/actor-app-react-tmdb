import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import { Container } from 'react-bootstrap';


export default class ActorsPage extends Component {
    

    render() {
        return (
            <div>
                <Container>
                    <SearchBox searchPlaceholder="Search Actor"/>
                </Container>
            </div>
        )
    }
}
