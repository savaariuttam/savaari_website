import Link from 'next/link';
import React from 'react';

const Button = ({ name,href,className,onClick}) => {
    return (

        <Link href={href}>
            <button className={`btn btn-red ${className}`}onClick={onClick}>{name}</button>
        </Link>

    );
};

export default Button;




