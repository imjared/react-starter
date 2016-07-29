import React from 'react';
import './style/index.scss';

const App = React.createClass({

    displayName: 'App',

    render() {
        return (
            <div className="container-fluid">
                <h2>Hello my friends</h2>
            </div>
        );
    }

});

module.exports = App;
