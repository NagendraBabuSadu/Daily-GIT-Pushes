import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ResumePage from './pages/ResumePage';
import LoginOtpPage from './pages/LoginOtpPage';
import ProfilePage from './pages/ProfilePage';
import InterviewPage from './pages/InterviewPage';
import LayoutPage from './pages/LayoutPage';

function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path="/home" element={<LoginPage />}> </Route>
          <Route path="/authOtpLogin" element={<LoginOtpPage />}></Route>
          <Route path='/' element={<LayoutPage />}>
            <Route path="resume" element={<ResumePage />} />
            <Route path="profilePage" element={<ProfilePage />} />
            <Route path="interviewPage" element={<InterviewPage />} />
          </Route>

        </Routes>


      </div>
    </>
  )
}

export default App
