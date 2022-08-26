import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Routes, Route, BrowserRouter as ReactRouter, Outlet, useParams, Navigate } from 'react-router-dom';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

function Hello(props) {
    const { name } = useParams();

    return <h2>Hello {name}</h2>;
}

function HelloWithIntention(props) {
    const { name1, name2 } = useParams();

    return <h2>{name1} is saying hello to {name2}</h2>;
}

appRoot.render(
    <ReactRouter>
        <h1>My router app</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hello'>Hello section</Link></li>
                <li><Link to='/hello/Orwa'>Hello subsection</Link></li>
                <li><Link to='/hello/Orwa/Peter'>Hello with intention subsection</Link></li>
                <li><Link to='/hello/Orwa/Peter/Sergii'>Hello from the other side subsection</Link></li>
                <li><Link to='/something-else'>Invalid section</Link></li>
            </ul>
        </nav>

        <Routes>

            <Route
                path='/'
                element={<h1>Welcome to the homepage</h1>} />

            <Route 
                path='/hello' 
                element={<div><h1>Hello section</h1><Outlet /></div>}>

                <Route path=':name' element={<Hello />} />
                <Route path=':name1/:name2' element={<HelloWithIntention />} />
                <Route path='*' element={<h2>Hello from the other side.</h2>} />
            </Route>

            <Route
                path='/*' 
                element={<h1>404</h1>} />
            
        </Routes>

    </ReactRouter>
);