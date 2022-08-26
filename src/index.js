import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Routes, Route, BrowserRouter as ReactRouter, Outlet } from 'react-router-dom';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

appRoot.render(
    <ReactRouter>
        <h1>My router app</h1>
        <nav>
            <ul>
                <li><Link to='/hello'>Hello section</Link></li>
                <li><Link to='/hello/orwa'>Hello orwa subsection</Link></li>
                <li><Link to='/something-else'>Invalid section</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route 
                path='/hello' 
                element={<div><h2>Hello section</h2><Outlet /></div>}>
                    
                <Route path=':name' element={<h3>Hello :name</h3>} />
            </Route>

            <Route
                path='/*' 
                element={<h2>404</h2>} />
            
        </Routes>

    </ReactRouter>
);