import React from 'react'
import BannerImgMain from './Banner-Img-Main'

const BannerSec = () => {
    return (
        <section className="add-banner">
            <div className="flex flex-wrap md:justify-center lg:justify-start">
                <div className="w-5/6">
                    <BannerImgMain src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_jdnKBFj.jpg" alt="Banner 1" className="w-full h-auto"/>
                </div>
                <div className="flex flex-row">
                    <div className="lg:w-1/2 md:w-1/2 mt-4 md:mt-0">
                        <BannerImgMain src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_sRwzbpm.jpg" alt="Banner 2" className="w-5/6 h-auto"/>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 mt-4 md:mt-0">
                        <BannerImgMain src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_sRwzbpm.jpg" alt="Banner 3" className="w-5/6 h-auto"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSec
