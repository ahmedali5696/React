import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router basename='/resume/projects/gosto'>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
