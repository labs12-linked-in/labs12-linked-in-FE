import React from 'react'

const SelectBox = props => {
    return (
        <div>
          <select
            required
            id={props.name}
            name={props.name}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            className="form-control"
          >
            <option value="" disabled>
              {props.placeholder}
            </option>
            {props.options.map(option => {
              return (
                <option key={option} value={option} label={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      );
}

export default SelectBox;