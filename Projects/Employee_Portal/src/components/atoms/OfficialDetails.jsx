

export default function OfficialDetails({user, setUser, handleUser}) {

  
    return (
        <div>
            <div className="officialDetails">
                {/* Official Details */}
                <div className="emailDiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="userEmail" value={user.userEmail} onChange={handleUser} />
                </div>
                <div className="mobileNumberDiv">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <div>
                        <select name="" id="" className="selctOption" >
                            <option value="">+91</option>
                        </select>
                        <input type="number" name="userPhoneNumber" id="" className="mobileNumberInput"  value={user.userPhoneNumber} onChange={handleUser}  />
                    </div>
                </div>
                <div className="eduDiv">
                    <label htmlFor="">Education Completion Date</label>
                    <input type="date" name="eduCompDate" id="" value={user.eduCompDate}     onChange={handleUser} />
                </div>
                <div className="projectDiv">
                    <label htmlFor="">Project</label>
                    <div>
                        <input type="text" name="" id="" className="projectInput" />
                        <select name="" id="" className="selctOption"  >
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="jobRoleDiv">
                    <label htmlFor="">Job Role</label>
                    <div>
                        <input type="text" name="" id="" className="jobRoleInput" />
                        <select name="" id="" className="selctOption">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="expDiv">
                    <div className="totalExpDiv">
                        <label htmlFor="">
                            Total Experience
                        </label>
                        <input type="text" />
                    </div>
                    <div className="relExpDiv">
                        <label htmlFor="">
                            Relevant Experience
                        </label>
                        <input type="text" />
                    </div>

                </div>
                <div className="noticePeriodDiv">
                    <label htmlFor="">Notice Period</label>
                    <div>
                        <input type="number" name="" id="" className="inputEnterValue" />
                        <input type="text" name="" id="" className="readOnlyInput" placeholder="Days" readOnly />
                    </div>
                </div>
                <div className="joiningDateDiv">
                    <label htmlFor="">Joining Date</label>

                    <input type="date" name="" id="" className="joiningDateInput" />

                </div>
                <div className="currentCtcDiv">
                    <label htmlFor="">Current CTC</label>
                    <div>
                        <input type="number" name="" id="" className="inputEnterValue" />
                        <input type="text" name="" id="" className="readOnlyInput" placeholder="INR per year" readOnly />
                    </div>
                </div>
                <div className="expectedCtcDiv">
                    <label htmlFor="">Expected CTC</label>
                    <div>
                        <input type="number" name="" id="" className="inputEnterValue" />
                        <input type="text" name="" id="" className="readOnlyInput" placeholder="INR per year" readOnly />
                    </div>
                </div>
                <div className="uploadResumeDiv">
                    <label htmlFor="">Upload Resume</label>
                    <div className="uploadResumeInputDiv">

                        <input type="file" name="" id="" className="uploadResumeInput" />
                    </div>
                </div>
                <div className="idProofDiv">
                    <label htmlFor="">ID Proof</label>
                    <div>
                        <select name="" id="" className="selctOption">
                            <option value="" >Select Type</option>
                        </select>
                        <input type="file" name="" id="" className="idProofInput" />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}