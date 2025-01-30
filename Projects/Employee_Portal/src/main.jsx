
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const rootElement = document.getElementById('root')

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create a React root
    root.render(
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/*" element={<App />}></Route>
                </Routes>
            </Router>
        </Provider>
    )
}
