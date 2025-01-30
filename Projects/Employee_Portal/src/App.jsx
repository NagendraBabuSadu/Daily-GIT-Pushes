import './App.css';
import {  Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Resume from './pages/ResumePage';

function App() {

  return (
    <>
      <div>
        <Routes>
            <Route path="*" element={<LoginPage />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
