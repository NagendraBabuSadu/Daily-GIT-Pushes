import { useUserContext } from "../../contexts/UserContext"
import { useState } from "react";

export default function ProjectComponent() {
    const { user, handleUser } = useUserContext();

    return (
        <div className="projectDiv">
            <label htmlFor="">Project</label>
            <div>
                <input
                    list="projectOptions"
                    name="projectName"
                    id="projectInput"
                    className="projectInput"
                    placeholder="Select or type a project"
                    onChange={handleUser}
                    value={user.projectName}
                />

                <datalist id="projectOptions">
                    <option value="Project 1" />
                    <option value="Project 2" />
                    <option value="Project 3" />
                    <option value="Project 4" />
                </datalist>
            </div>
        </div>
    )
}
