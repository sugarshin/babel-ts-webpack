import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

render(<App name="aoi sato" />, document.querySelector('.root'));
