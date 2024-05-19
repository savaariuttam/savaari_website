import React from 'react';

interface InputProps {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
}

const Input: React.FC<InputProps> = ({ label, type, name, placeholder, required, maxLength }) => (
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
