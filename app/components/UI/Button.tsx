import Link from 'next/link';
import React from 'react';

const Button = ({ name, href,className}) => {
    return (

        <Link href={href}>
            <button className={`btn btn-red ${className}`}>{name}</button>
        </Link>

    );
};

export default Button;




