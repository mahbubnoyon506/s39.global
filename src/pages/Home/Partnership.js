import React from 'react';
import project from '../../assets/images/DiagramInfographicGraph.png'


const Partnership = () => {
    return (
        <div className='' style={{ padding: '80px 0px', overflow:'hidden' }} >
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-8'>
                        <h2 className='partnershipTitle text-start'>S39 GLOBAL PARTNERSHIP</h2>
                        <p className='partnershipText'>S39 Global offers a partnership program in a business blockchain community via decentralized minting technology. This is the massive initiatives for S39 token holders in 2023.</p>
                    </div>
                </div>
                <div className='row align-items-center g-5'>
                    <div className='col-md-6'>
                        <img className='img-fluid' style={{ paddingTop: '50px', }} src={project} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='partnershipTitle text-start'>The Purpose of S39 Token</h2>
                        <p className='partnershipText'>The purpose of S39 is to serve multi-purpose decentralized utility projects which can be used into a multiple tokenization program through the power of the Super D’Apps technology.</p>
                    </div>
                </div>
                <div className='pt-5'>
                    <h2 className='partnershipTitle text-start'>What is Super D’Apps Technology?</h2>
                    <p className='partnershipText'>Super D’Apps is a global directory of blockchain decentralized applications (D’ Apps). Super D’Apps bridges D’Apps creators and users to further mass market adoption and growth of the multiple businesses. This Super D’Apps technology will be known as S39 Global <a href="http://www.s39global.com" target="_blank" rel="noopener noreferrer">www.s39global.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Partnership;