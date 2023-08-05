import './index.css';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers';

const store = createStore(reducer);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>
);