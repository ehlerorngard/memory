import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";



class MemoryCards extends Component {
  state = {
    cards: { 
      1: { clicked: false },
      2: { clicked: false },
      3: { clicked: false },
      4: { clicked: false },
      5: { clicked: false },
      6: { clicked: false },
      7: { clicked: false },
      8: { clicked: false },
      9: { clicked: false },
      10: { clicked: false },
      11: { clicked: false },
      12: { clicked: false }
    },
    cards2: [
      { id: 13, clicked: false },
      { id: 14, clicked: false },
      { id: 15, clicked: false },
      { id: 16, clicked: false },
      { id: 17, clicked: false },
      { id: 18, clicked: false },
      { id: 19, clicked: false },
      { id: 20, clicked: false },
      { id: 21, clicked: false },
      { id: 22, clicked: false },
      { id: 23, clicked: false },
      { id: 24, clicked: false }
    ],
    points: 0,
    topScore: 0,
    message: ""
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

  updateTopScore = score => {
    this.setState({ topScore: score });
  };

  registerClick = (event) => {
    const cardNum = event.target.value;
    if (this.state.cards.cardNum.clicked !== true) {
      console.log("card __clicked__ false changing to true");

      this.setState((state) => ({ points: state.points + 1 })); 
      let one = this.state.cards.event.target.value;
      let two = one.clicked;
      this.setState({ [two]: true }, () => {
        console.log("this is state: \n", this.state);
      });

    }
    else {
      this.setState({ message: "Sorry!  You already clicked that one." });
      if (this.state.points > this.state.topScore) {
        this.updateTopScore(this.state.points)
          .then(() => {
            this.setState({ points: 0 });
            this.loadCards() });
      }
      else {
        this.setState({ points: 0 });
        this.loadCards();
      }
    }

  };

  componentDidUpdate() {
    console.log("state updated!");
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Memory Game</h1>
            </Jumbotron>
            {this.state.cards2.length ? (
              <div>
                {this.state.cards2.map(card => (
                  <Card key={card.id} value={card.id} onClick={() => this.registerClick()}>


                  </Card>
                ))}
              </div>
            ) : (
              <h3>Nothing to display...  y e t . . . </h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MemoryCards;
