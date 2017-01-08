import React from 'react';

import './index.scss';

const App = React.createClass({

  displayName: 'App',

  render() {
    return (
      <div className="container-fluid" id="app">
        <marquee><h2>hello world</h2></marquee>
      </div>
    );
  }

});

module.exports = App;
