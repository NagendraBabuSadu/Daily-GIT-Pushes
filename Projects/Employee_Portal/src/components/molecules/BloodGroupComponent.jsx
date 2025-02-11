import useUserHook from "../../hooks/UseUserHook";

    
    export default function BloodGroupComponent() {
     const { user, handleUser } = useUserHook();
         
    
        return (
            <div className="bloodGroupDiv">
                <label htmlFor="">Blood Group</label>
                <div>
                    <input
                        list="bloodGroupOptions"
                        name="bloodGroupName"
                        id="bloodGroupInput"
                        className="bloodGroupInput"
                        placeholder="Select or type a Blood Group"
                        onChange={handleUser}
                        value={ user?.bloodGroup}
                    />
    
                    <datalist id="bloodGroupOptions">
                        <option value="A +ve" />
                        <option value="A -ve" />
                        <option value="B +ve" />
                        <option value="B -ve" />
                        <option value="O +ve" />
                        <option value="O -ve" />
                    </datalist>
                </div>
            </div>
        )
    }