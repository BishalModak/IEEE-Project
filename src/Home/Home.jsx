import React from 'react';
import About from './About/About';
import ResourcesAndRecordings from './Resources/ResourcesAndRecordings';
import Countdown from './Countdown/Countdown';
import Committee from './Committee/CurrentCommittee';
import RecentNews from './RecentNews/RecentNews';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            
            <div className='mb-[100px]'>
                <Banner></Banner>
            </div>
            <div className='mb-[100px]'>
                <Countdown></Countdown>
            </div>
            <div className='mb-[100px]'>
                <About></About>
            </div>
            <div className='mb-200px'>
                <RecentNews></RecentNews>
            </div>
            <div className='mb-200px'>
                <Committee></Committee>
            </div>
            <div className=''>
                <ResourcesAndRecordings></ResourcesAndRecordings>
            </div>

            
        </div>
    );
};

export default Home;