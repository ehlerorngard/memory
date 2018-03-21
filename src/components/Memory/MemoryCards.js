import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import Nav from "../Nav";
import update from "immutability-helper";

class MemoryCards extends Component {
  state = {
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
    console.log("component did mount");
  }

  loadCards = () => {
    console.log("cards LOADED");

    const scrambledarray = this.state.cards2.map(obj => {return obj});

    console.log("before starting, scrambledarray: ", scrambledarray);


    scrambledarray.sort(function(a, b){return 0.5 - Math.random()});
    console.log("scrambledarray NOW: ", scrambledarray);

  //   for (let i = 0; i < oldarray.length; i++) {
  //     console.log("old array length: ", oldarray.length);
  //     console.log("old array: ", oldarray);

  //     let randex = Math.floor(Math.random() * oldarray.length);
  //     console.log("randindex ", randex);
  //     let next = oldarray.splice(randex, 1);
  //     console.log("ØØØ___ØØØ objects remaining in oldarray: ", oldarray.length);
  //     console.log("next: ", next[0]);
  //     console.log("the scrambledarray BEFORE: ", scrambledarray);      
  //     scrambledarray.push(next[0]);
  //     console.log("the scrambledarray: ", scrambledarray);
  //     console.log("state 0 ", this.state.cards2[0]);
  //     console.log("STATE: ", this.state.cards2);
  //   }

    setTimeout(this.setState({ cards2: scrambledarray }), 1);
  };

  updateTopScore = (score, cb) => {
    this.setState({ topScore: score });
    this.setState({ points: 0 });
    cb();
  };

  unclickAll = event => {
    console.log("is this WORKING????");
    const barray = this.state.cards2.map(obj => {
      let obj2 = {};
      obj2.id = obj.id;
      obj2.clicked = false;
      console.log("obj2: ", obj2);
      return obj2;
    });
    console.log("BARRAY: ", barray);
    this.setState({ cards2: barray }, () => {
      console.log("UNCLICKED?????", this.state.cards2);
    });

    // for (let i = 0; i < this.state.cards2.length; i++) {
    //   console.log("card i ", this.state.cards2[i]);
    //   if (this.state.cards2[i].clicked) {
    //     this.setState(
    //       {cards2: update(this.state.cards2, {[i]: {clicked: {$set: false}}})
    //       }, () => {console.log("newSTATE: ", this.state.cards2)});
    //   }
    // }
  }

  registerClick = (ident) => {

    const index = this.state.cards2.findIndex(x => x.id===ident);
    console.log("the clicked card's index: ", index);
    console.log("this.cards2[index] __ ", this.state.cards2[index]);
    console.log("this.cards2[index].clicked __ ", this.state.cards2[index].clicked);
    
    if (this.state.cards2[index].clicked !== true) {
      this.setState({ message: "Nice work!" });
      this.setState((state) => ({ points: state.points + 1 }), function() {
        console.log("new points total: ", this.state.points)
      }); 
      console.log("the OBJECT____|||| of that index: ", this.state.cards2[index]);

      this.setState(
        {cards2: update(this.state.cards2, {[index]: {clicked: {$set: true}}})
        }, () => {
          console.log("^^^^^^^^^ state: ", this.state);
          this.loadCards();

        });
    }
    else {
      this.setState({ message: "Sorry!  You already clicked that one." });
      if (this.state.points > this.state.topScore) {
        this.updateTopScore(this.state.points, () => {
            this.unclickAll();
            console.log("all clicked should be false now .... \nstate: ", this.state);
          });
        this.loadCards(); 

      }
      else {
        this.setState({ points: 0 }, () => {
          this.unclickAll();
        });
        this.loadCards();
      }
    }

  };

  componentDidUpdate() {
    console.log("state updated!");
  }

  render() {
    return (
      <div>
        <Nav 
          points={this.state.points} 
          topScore={this.state.topScore}
          message={this.state.message} />
        <Container fluid>
          <Row>
            <Col size="md-12 sm-12">
              <Jumbotron>
                <h1>Memory Game</h1>
              </Jumbotron>
              {this.state.cards2.length ? (
                <Container fluid>
                  {this.state.cards2.map(card => (
                    <Card 
                      key={card.id} 
                      value={card.id} 
                      onClick={() => this.registerClick(card.id)}>
                    </Card>
                  ))}
                </Container>
              ) : (
                <h3>Nothing to display...  y e t . . . </h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MemoryCards;
