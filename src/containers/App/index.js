import React from 'react';

import './index.scss';

const App = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div className="container-fluid" id="app">
        <marquee><h2>😊 change App/index.js to get started 😊</h2></marquee>
      </div>
    );
  }

});

module.exports = App;
