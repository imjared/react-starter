import React, { Component } from 'react';

import './index.scss';

export default class App extends Component {

  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }

}
