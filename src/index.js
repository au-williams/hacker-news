import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
