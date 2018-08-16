// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 1 2 3');

ReactDOM.render(template, document.getElementById('app'));
