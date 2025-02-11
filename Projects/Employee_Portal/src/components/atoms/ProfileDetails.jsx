import { useSelector } from "react-redux";
import BloodGroupComponent from "../molecules/BloodGroupComponent";
import EduDivComponent from "../molecules/EduDivComponent";
import EmailComponent from "../molecules/EmailComponent";
import MobileNumberComponent from "../molecules/MobileNumberComponent";
import ProjectComponent from "../molecules/ProjectComponent";
import AddressComponent from "../molecules/AddressComponent";
import CityComponent from "../molecules/CityComponent";
import PinCodeComponent from "../molecules/PinCodeComponent";
import EmergencyContactNumberComponent from "../molecules/EmergencyContactNumberComponent";
import NationalityComponent from "../molecules/NationalityComponent";
import AccountNumberComponent from "../molecules/AccountNumberComponent";
import BankNameComponent from "../molecules/BankName";
import BranchLocationComponent from "../molecules/BranchLocationComponent";
import IfscComponent from "../molecules/IfscComponent";
import CancelledChequeComponent from "../molecules/CancelledChequeComponent";
import PANNumberComponent from "../molecules/PANNumberComponent";
import AadharNumberComponent from "../molecules/AadharNumberComponent";
import PassportNumberComponent from "../molecules/PassportNumberComponent";
import DrivingLicenseComponent from "../molecules/DrivingLicenseComponent";
import EducationalCertificatesComponent from "../molecules/EducationalCertificatesComponent";
import ReleaseLettersComponent from "../molecules/ReleaseLettersComponent";
import PaySlipsComponent from "../molecules/PayslipsComponent";
import BankStatementsComponent from "../molecules/BankStatementsComponent";
import Form16_26Component from "../molecules/Form16_26Component";

export default function ProfileDetails(props) {
  const { user, handleUser } = props;

  return (
    <div>
      <div className="profileDetails">
        {/* Official Details */}
        <div className="residenceDetails">
          <EmailComponent user={user} handleUser={handleUser} />
          <MobileNumberComponent user={user} handleUser={handleUser} />
          <EduDivComponent user={user} handleUser={handleUser} />
          <ProjectComponent user={user} handleUser={handleUser} />
          <BloodGroupComponent user={user} handleUser={handleUser} />
          <AddressComponent user={user} handleUser={handleUser} />
          <CityComponent user={user} handleUser={handleUser} />
          <PinCodeComponent user={user} handleUser={handleUser} />
          <EmergencyContactNumberComponent
            user={user}
            handleUser={handleUser}
          />
          <NationalityComponent user={user} handleUser={handleUser} />
        </div>
        <div>
            <h3>Bank Details</h3>
          </div>
        <div className="bankDetails">      
            <AccountNumberComponent user={user} handleUser={handleUser} />
            <BankNameComponent user={user} handleUser={handleUser} />
            <IfscComponent user={user} handleUser={handleUser} />
            <BranchLocationComponent user={user} handleUser={handleUser} />
            <CancelledChequeComponent user={user} handleUser={handleUser} />
            <PANNumberComponent user={user} handleUser={handleUser} />
            <AadharNumberComponent user={user} handleUser={handleUser} />
            <PassportNumberComponent user={user} handleUser={handleUser} />
            <DrivingLicenseComponent user={user} handleUser={handleUser} />
            <EducationalCertificatesComponent user={user} handleUser={handleUser} />
            <ReleaseLettersComponent user={user} handleUser={handleUser} />
            <PaySlipsComponent user={user} handleUser={handleUser} />
            <BankStatementsComponent user={user} handleUser={handleUser} />
            <Form16_26Component user={user} handleUser={handleUser} />
        </div>
      </div>
    </div>
  );
}
