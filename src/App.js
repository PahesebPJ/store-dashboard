import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

//Components
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*PUBLIC ROUTES */}
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/*PRIVATE ROUTES */}
        <Route element={<RequiredAuth />}>
            <Route path="dashboard/*" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
