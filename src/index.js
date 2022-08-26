import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Routes, Route, BrowserRouter as ReactRouter } from 'react-router-dom';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

appRoot.render(
    <ReactRouter>
        <h1>My router app</h1>
        <nav>
            <ul>
                <li><Link to='/hello'>Hello section</Link></li>
                <li><Link to='/about'>About section</Link></li>
            </ul>
        </nav>

        <Routes>

            <Route 
                path='/hello'
                element={<h2>The hello part had been accessed!</h2>} />
            
            <Route 
                path='/about'
                element={<h2>The about 🎂 section had been accessed!</h2>} />

        </Routes>

    </ReactRouter>
);