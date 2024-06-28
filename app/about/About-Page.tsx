import React from 'react'
import Banner from './Banner'
import AboutOnlineSavaari from './AboutOnlineSavaari'
import LeadershipTeam from './LeadershipTeam'
import WhyOnlineSavaari from './WhyOnlineSavaari'

const AboutPage = () => {
    return (
        <>
            <div className='banner'>
                <Banner />
            </div>
            <div className='about-savaari'>
                <AboutOnlineSavaari />
            </div>
            <div className='banner'>
                <Banner />
            </div>
            <LeadershipTeam />
            <WhyOnlineSavaari />
        </>
    )
}

export default AboutPage
