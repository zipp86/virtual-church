import React from 'eact';
import ReactDOM from 'eact-dom';
import App from './App';

const App = () => {
  return (
    <div>
      <h1>Church of the Wilderness</h1>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);