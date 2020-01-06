import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import { Container, Row, Col } from 'react-bootstrap';
import ActorComp from '../components/ActorComp';
import ActorModel from '../model/ActorModel';
import Axios from 'axios'


export default class ActorsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            actorSearchResults: [],
            actors: []
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
            const searchURL = "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + searchText;
            Axios.get(searchURL).then(response => {
                this.setState({
                    actorSearchResults: response.data.results.map(result => result.name)
                })
            });

            // this.setState({
            //     actorSearchResults: this.state.actorSearchResults.concat(searchText)
            // })

        }

    }

    addActor(index) {
        this.setState({
            actors: this.state.actors.concat(new ActorModel("Brad Pitt", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg"))
        })
    }

    render() {
        const { actorSearchResults, actors } = this.state;

        const actorComps = actors.map((actor, index) => 
            <Col md={4} key={index}>
                <ActorComp actor={actor}/>
            </Col>)

        return (
            <div>
                <Container>
                    <SearchBox searchPlaceholder="Search Actor" results={actorSearchResults}
                        onSearchChange={this.searchActors} onSelectedResult={this.addActor} />
                    <Row>
                        {actorComps}
                    </Row>
                </Container>
            </div>
        )
    }
}
