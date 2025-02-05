import { useUserContext } from "../../contexts/UserContext";
import CurrentCtcComponent from "../molecules/CurrentCtcComponent";
import EduDivComponent from "../molecules/EduDivComponent";
import EmailComponent from "../molecules/EmailComponent";
import ExpectedCtcComponent from "../molecules/ExpectedCtcComponent";
import ExperienceComponent from "../molecules/ExperienceComponent";
import IdProofComponent from "../molecules/IdProofComponent";
import JobRoleComponent from "../molecules/JobRoleComponent";
import JoiningDateComponent from "../molecules/JoiningDateComponent";
import MobileNumberComponent from "../molecules/MobileNumberComponent";
import NoticePeriodComponent from "../molecules/NoticePeriodComponent";
import ProjectComponent from "../molecules/ProjectComponent";
import UploadResumeComponent from "../molecules/UploadResumeComponent";

export default function OfficialDetails() {
  const { user, handleUser } = useUserContext();

  return (
    <div>
      <div className="officialDetails">
        {/* Official Details */}
        <EmailComponent />
        <MobileNumberComponent />
        <EduDivComponent />
        <ProjectComponent />
        <JobRoleComponent />
        <ExperienceComponent />
        <NoticePeriodComponent />
        <JoiningDateComponent />
        <CurrentCtcComponent />
        <ExpectedCtcComponent />
        <UploadResumeComponent />
        <IdProofComponent />

      </div>
    </div>
  );
}
