import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter,  Route, Routes,Navigate} from 'react-router-dom';
import Nav from "./pages/Nav";

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
            }/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="*" element={<Navigate to="/" replace />}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
