import React from "react";

export default function UserCondForm(props){
    return(
        <div>
            <h4>Enter resort condition information</h4>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="new_snow">New snow amount (inches)</label>
                    <input name="new_snow" onChange={props.handleChange} type="number"></input>
                    <label htmlFor="temp">Temperature</label>
                    <input name="temp" onChange={props.handleChange} type="number"></input>
                    <label htmlFor="lft_lines">Lift Lines</label>
                    <select name="lft_lines" onChange={props.handleChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <label htmlFor="cond">Conditions</label>
                    <select name="cond" onChange={props.handleChange}>
                        <option value="Corn Snow">Corn Snow</option>
                        <option value="Frozen Granular">Frozen Granular</option>
                        <option value="Hard Pack">Hard Pack</option>
                        <option value="Icy">Icy</option>
                        <option value="Loose Granular">Loose Granular</option>
                        <option value="Machine Grromed">Machine Groomed</option>
                        <option value="Packed Powder">Packed Powder</option>
                        <option value="Powder">Powder</option>
                        <option value="Spring Conditions">Spring Conditions</option>
                        <option value="Variable Conditions">Variable Conditions</option>
                        <option value="Wet Granular">Wet Granular</option>
                        <option value="Wet Packed">Wet Packed</option>
                        <option value="Wet Snow">Wet Snow</option>
                        <option value="Windblown">Windblown</option>
                    </select>
                    <label htmlFor="cond_notes">Conditions Notes</label>
                    <textarea rows="4" name="cond_notes" onChange={props.handleChange}>Enter additional condition information</textarea>
                    <button onClick={props.handleUserCond} type="button" className="btn btn-info">Submit</button>
                </div>
            </form>
        </div>
    );
}