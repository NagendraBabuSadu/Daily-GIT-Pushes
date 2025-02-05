import { useUserContext } from "../../contexts/UserContext";

export default function JobRoleComponent() {
  const { user, handleUser } = useUserContext();
  return (
    <div className="jobRoleDiv">
      <label htmlFor="">Job Role</label>
      <div>
        <input
          list="roleOptions"
          name="jobRole"
          id="jobRoleInput"
          className="jobRoleInput"
          placeholder="Select a Job Role"
          onChange={handleUser}
          value={user.jobRole}
        />

        <datalist id="roleOptions">
          <option value="React Deveoper" />
          <option value="Quality Analyst" />
          <option value="Node.js Developer" />
          <option value="Data Analyst" />
        </datalist>
      </div>
    </div>
  );
}
