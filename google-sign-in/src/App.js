import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './presentation/pages/login';
import Home from './presentation/pages/home'

import { Provider } from 'react-redux';
import { store } from './infrastructure/redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
