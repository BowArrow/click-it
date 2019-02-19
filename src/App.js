import React, { Component } from 'react';
import { Container, Row, Col } from './components/Grid';
import Card from "./components/Card";
import Nav from "./components/Nav";
import characters from "./characters.json";
import './App.css';

const shuffle = sourceArray => {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

class App extends Component {

  state = {
    characters,
    score: 0
  }
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleResetCount = () => {
    this.setState({ count: 0 })
  };

  handleClick = e => {
    e.preventDefault();

    this.shuffleChars();
    this.handleReset();
  }

  shuffleChars = () => {
    this.setState({ characters: shuffle(characters) })
  }

  handleReset() {
    this.forceUpdate()
  }


  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Card
                id={character.id}
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
