import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './Containers/App/';
import configureStore from './redux';

const store = configureStore();

render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root')
);
