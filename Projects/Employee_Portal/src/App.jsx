import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';  
import ResumePage from './pages/ResumePage';
import LoginOtpPage from './pages/LoginOtpPage';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<LoginPage />}></Route>
          <Route path="/authOtpLogin" element={<LoginOtpPage />}></Route>
          <Route path="/resume" element={<ResumePage  />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default App
