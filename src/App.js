import {Routes, Route} from 'react-router-dom';

import './App.css';

//Components
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*PUBLIC ROUTES */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        {/*PRIVATE ROUTES */}
        <Route element={<RequiredAuth />}>
            <Route path="/" element={<h1>Hello world</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
