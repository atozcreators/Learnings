import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
