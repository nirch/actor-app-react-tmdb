import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import { Container, Row, Col } from 'react-bootstrap';
import ActorComp from '../components/ActorComp';


export default class ActorsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            actorSearchResults: ["Brad Pitt", "Tom Jhones"]
        }

        this.searchActors = this.searchActors.bind(this);
        this.addActor = this.addActor.bind(this);
    }

    searchActors(searchText) {

        // let newActorSearchResults = [];
        // for (var i = 0; i < this.state.actorSearchResults.length; i++) {
        //     newActorSearchResults.push(this.state.actorSearchResults[i])
        // }
        // newActorSearchResults.push(searchText);

        // this.setState({
        //     actorSearchResults: newActorSearchResults
        // })

        if (searchText === "") {
            this.setState({
                actorSearchResults: []
            })
        } else {
            this.setState({
                actorSearchResults: this.state.actorSearchResults.concat(searchText)
            })

        }

    }

    addActor(index) {
        alert(this.state.actorSearchResults[index]);
    }

    render() {
        const { actorSearchResults } = this.state;


        return (
            <div>
                <Container>
                    <SearchBox searchPlaceholder="Search Actor" results={actorSearchResults}
                        onSearchChange={this.searchActors} onSelectedResult={this.addActor} />
                    <Row>
                        <Col md={4}>
                            <ActorComp/>
                        </Col>
                        <Col md={4}>
                            <ActorComp/>
                        </Col>
                        <Col md={4}>
                            <ActorComp/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
