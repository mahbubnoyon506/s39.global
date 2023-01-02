import React, { useContext } from 'react';
import logo from '../../assets/images/logo3.png';
import BannerPhoto from '../../assets/images/homes39.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useNavigate } from 'react-router-dom';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';



function Banner() {
    const { user, openWalletModal, closeWalletModal, logOut } = useContext(S39GlobalContext);
    // console.log(user)


    return (
        <div className='pt-5'>
            <div className='container pb-4' >
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-sm-12 text-white'>
                        <p className='bannerSubTitle'>WHERE CRYPTO MEETS COMMODITIES</p>
                        <p className='bannerTitle'>DECENTRALIZED ECOFRIENDLY<br />  BLOCKCHAIN <br /> TECHNOLOGY</p>
                        {/* <img style={{ marginLeft: '30%' }} className='mb-4 ' width='28%' src={logo} alt="D.E.B.T." /> <br /> */}
                        <button onClick={() => openWalletModal()} className='btn btn-light mt-4 px-4 fw-bold rounded-pill border-0' style={{background: '#FFC000'}}>LOGIN WITH WALLET <TrendingFlatIcon /></button>
                    </div>
                    <div className='col-lg-6 col-sm-12 mt-4 mt-lg-0' >
                        <img className=''   width="100%" src={BannerPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
