import React from 'react'

import './styles.css'

const SelectBox = props => {
    return (
        <div className="form-group">
          <select
            required
            id={props.name}
            name={props.name}
            defaultValue={props.defaultValue}
            onChange={props.handleChange}
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