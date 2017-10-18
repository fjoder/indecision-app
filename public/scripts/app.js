'use strict';

console.log('App is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!'
};

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options && app.options.length > 0 ? 'Here are your options' : 'No options',
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCountApp();
};

var minusOne = function minusOne() {
  count--;
  renderCountApp();
};

var reset = function reset() {
  count = 0;
  renderCountApp();
};

var appRoot = document.getElementById('app');

var renderCountApp = function renderCountApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
