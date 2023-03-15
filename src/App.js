import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleClick}>
          {this.state.clicked ? "Thanks" : "Click me"}
        </button>
      </div>
    );
  }
}