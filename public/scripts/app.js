'use strict';

console.log('app.js is running ok!');

// JSX Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'this is some info'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
