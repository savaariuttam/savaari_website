import React from 'react';

const Input = ({ label, type, name, placeholder, required, maxLength }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}{required && <span style={{ color: 'red' }}>*</span>}</label>
        <input
            type={type}
            name={name}
            className="form-control"
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
        />
    </div>
);

export default Input;