
export default function CurrentCtcComponent() {


    return (

        <div className="currentCtcDiv">
            <label htmlFor="">Current CTC</label>
            <div>
                <input type="number" name="" id="" className="inputEnterValue" />
                <input type="text" name="" id="" className="readOnlyInput" placeholder="INR per year" readOnly />
            </div>
        </div>
    )
}
