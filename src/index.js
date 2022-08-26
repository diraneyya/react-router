import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

function Hello (props) {
    return <h2>The hello part of the website had been accessed!</h2>;
}

appRoot.render(
    <BrowserRouter>
        <h1>My router app</h1>

        <Routes>
            <Route path='/hello' element={<Hello />} />
        </Routes>
    </BrowserRouter>
);