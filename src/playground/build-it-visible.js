const appRoot = document.getElementById('app');

let clicked = false;

const toggleVisibility = () => {
  clicked = !clicked;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{clicked ? 'Hide details' : 'Show details'}</button>
      {clicked && <p>Hey, these are the details!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
