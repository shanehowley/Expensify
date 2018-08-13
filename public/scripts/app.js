'use strict';

var Visibility = false;

var toggleVisibilty = function toggleVisibilty() {
   Visibility = !Visibility;
   render();
};

var render = function render() {
   var jsx = React.createElement(
      'div',
      null,
      React.createElement(
         'h1',
         null,
         'Visibility Toggle'
      ),
      React.createElement(
         'button',
         { onClick: toggleVisibilty },
         Visibility ? 'Hide details' : 'Show details'
      ),
      Visibility && React.createElement(
         'div',
         null,
         React.createElement(
            'p',
            null,
            'Hey these are some are details '
         )
      )
   );
   ReactDOM.render(jsx, document.getElementById('app'));
};
render();
