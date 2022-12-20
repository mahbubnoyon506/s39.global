import React from 'react';
import logo from '../../assets/images/logo2.png';
import BannerPhoto from '../../assets/images/HomeHero.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


function Banner() {
    return (
        <div className=''>
            <div className='container pb-4' >
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-sm-12 text-white'>
                        <p className='primary fs-4 mt-5 bannerSubTitle'>WHERE CRYPTO MEETS COMMODITIES</p>
                        <p className='bannerTitle primary fs-1 fw-bold'>DECENTRALIZED  ECO-FRIENDLY<br />  BLOCKCHAIN <br /> TECHNOLOGY</p>
                        {/* <img style={{ marginLeft: '30%' }} className='mb-4 ' width='28%' src={logo} alt="D.E.B.T." /> <br /> */}
                        <button className='btn btn-light mt-4 px-4 fw-bold'>SIGN UP NOW <TrendingFlatIcon /></button>
                    </div>
                    <div className='col-lg-6 col-sm-12 mt-4 mt-lg-0' >
                        <img className='' width="100%" src={BannerPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;