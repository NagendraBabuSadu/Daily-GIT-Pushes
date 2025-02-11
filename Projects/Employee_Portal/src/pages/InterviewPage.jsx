import HR_1 from '../assets/images/HR_1.jpg';
import { useNavigate } from 'react-router-dom';

export default function InterviewPage(){
    const navigate = useNavigate();


    function navigateToResume() {
        navigate("/resume");
    }

    return(
        <div className="interviewPage" style={{
            display: 'flex', 
            flexDirection: "column",
            justifyContent: 'center',
            alignItems:'center'
            
        }}>
            <h2>Interview Page</h2>
            <img style={{
                width: "800px"
            }} src={HR_1} alt="hr_bg" />
            <div>
                <button type='button' className='saveButton' style={{
                    marginTop: "3rem", 
                    transition: 'ease-in-out 500ms',
                    cursor: 'pointer'
                }} onClick={navigateToResume}>Next</button>
            </div>
        </div>
    )
}