import React from 'react';
import bgImage from '../../assets/images/introBg.png'

const Introduction = () => {
    return (
        <div style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'scroll'}}>
            <div className='container'>
                <p className='introText px-5'>
            INTRODUCING THE DECENTRALIZED, ECO-FRIENDLY, BLOCKCHAIN TECHNOLOGY
            PROJECT... KNOWN AS DEBT BOX
          </p>
            </div>
        </div>
    );
};

export default Introduction;