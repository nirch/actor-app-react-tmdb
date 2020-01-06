import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import { Container, Row, Col } from 'react-bootstrap';
import ActorComp from '../components/ActorComp';
import ActorModel from '../model/ActorModel';


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
                            <ActorComp actor={new ActorModel("Brad Pitt", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg")}/>
                        </Col>
                        <Col md={4}>
                            <ActorComp actor={new ActorModel("Brad Pitt", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg")}/>
                        </Col>
                        <Col md={4}>
                            <ActorComp actor={new ActorModel("Brad Pitt", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg")}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
