import React from "react";

export default function UserCondForm(props) {
  return (
    <div>
      <h4>Enter resort condition information</h4>

      <form className="form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              className="form-control"
              name="new_snow"
              onChange={props.handleChange}
              type="number"
              placeholder="New snow amount (inches)"
            />
            <input
              className="form-control"
              name="temp"
              onChange={props.handleChange}
              type="number"
              placeholder="Temperature"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="cond">Conditions:</label>
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
            <br />
            <label htmlFor="lft_lines">Lift Lines:</label>
            <select name="lft_lines" onChange={props.handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="form-group col-md-12">
          <textarea
            className="form-control"
            rows="4"
            name="cond_notes"
            onChange={props.handleChange}
            placeholder="Enter additional condition information"
          />
          <button
            onClick={props.handleUserCond}
            type="button"
            className="btn btn-secondary btn-sm btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
