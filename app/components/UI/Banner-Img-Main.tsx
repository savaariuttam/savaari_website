import React from 'react';

const BannerImgMain = ({ src,className,alt }) => {
  return (
    <a href="#" className="add-box block">
      <img src={src} alt={alt} className={className}/>
    </a>
  )
};

export default BannerImgMain;