import Link from 'next/link';
import React from 'react';

const Button = ({ name, href }) => {
    return (

        <Link href={href}>
            <button className="btn btn-red mt-2">{name}</button>
        </Link>

    );
};

export default Button;




