import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";



class MemoryCards extends Component {
  state = {
    cards: [],
  };


  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {

    // LOGIC to load all the cards
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {


  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Memory Game</h1>
            </Jumbotron>
            {this.state.cards.length ? (
              <div>
                {this.state.cards.map(card => (
                  <Card key={card.id}>

                      <strong>
                        {card.id} by {card.id}
                      </strong>

                    <DeleteBtn onClick={() => this.deletecard(card.id)} />
                  </Card>
                ))}
              </div>
            ) : (
              <h3>Nothing to Display...  y e t . . . </h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MemoryCards;
