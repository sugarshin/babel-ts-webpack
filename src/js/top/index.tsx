import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{name: string}, {}> {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

ReactDOM.render(<App name="aoi sato" />, document.querySelector('.root'));
