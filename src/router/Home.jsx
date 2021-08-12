import React from 'react';

import web from '../images/webimg.png'
import Common from './Common'

const Home = () => {
    return (<>
        <Common name="Grow your knowledge with"
        name_send= "RajuTechnical"
        abott_tem="Achive your goal"
    
            srcimgs={web}
            visit="/service"
            btnname="Get started"
            
        />
    </>)
}
export default Home;
