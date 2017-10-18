console.log('App is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!'
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCountApp();
};

const minusOne = () => {
  count--;
  renderCountApp();
};

const reset = () => {
  count = 0;
  renderCountApp();
};

const appRoot = document.getElementById('app');

const renderCountApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCountApp();
