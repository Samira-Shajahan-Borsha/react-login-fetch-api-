import React from 'react';
const Input = ({name, label, value, onChange, type}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
              autoFocus
              value={value}
              onChange={onChange}
              id={name}
              name={name}
              type={type}
              className="form-control w-50"
            />
          </div>
     );
}
 
export default Input;