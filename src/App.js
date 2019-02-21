import React, { Component } from 'react';
import { Container, Row } from './components/Grid';
import Card from "./components/Card";
import Nav from "./components/Nav";
import characters from "./characters.json";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters,
      count: 0,
      topCount: 0
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }


  checkIfClicked(id) {
    let clickedCard = this.state.characters.filter(character => character.id === id)[0];
    let charsCopy =  this.state.characters.slice().sort(function(a, b){return 0.5 - Math.random()});
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      charsCopy[charsCopy.findIndex(char => char.id === id)] = clickedCard;

      this.setState({
        characters: charsCopy,
        count: this.state.count + 1,
        topCount: (this.state.count + 1 > this.state.topCount ? this.state.count + 1 : this.state.topCount)
      });
    } else {
      let resetChars = this.state.characters.map(char => {
        return {
          id: char.id,
          image: char.image,
          clicked: false
        }
      });
      this.setState({
        characters: resetChars,
        count: 0
      })
    }
    }

  render() {
    return (
      <div>
        <Nav count={this.state.count} topCount={this.state.topCount} />
        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Card
                checkIfClicked={this.checkIfClicked}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
