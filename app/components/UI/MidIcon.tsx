import Link from 'next/link';
import React from 'react';

const MidIcon= ({ href, icon: Icon, label, isActive, onClick }) => {
  return (
    <li>
      <Link href={href} className={`flex flex-col items-center ${isActive ? 'active' : ''}`}
        onClick={onClick}>
        <Icon className="text-3xl sm:text-[36px] icon-sm-screen" />
        <span className="ml-2">{label}</span>
      </Link>
    </li>
  );
};

export default MidIcon;
