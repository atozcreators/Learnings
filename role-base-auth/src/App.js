import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './presentation/pages/login'
import Login from './presentation/pages/login';
import Admin from './presentation/pages/admin/admin'
import './App.css';
import User from './presentation/pages/user/user';
import ViewUsers from './presentation/pages/user/view-users';
import ViewComplaints from './presentation/pages/admin/view-complaints';

import { Provider } from 'react-redux';
import { store } from './infrastructure/redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='admin' element={<Admin />} />
          <Route path='view-users' element={<ViewUsers />} />
          <Route path='view-complaints' element={<ViewComplaints />} />
          <Route path='user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
