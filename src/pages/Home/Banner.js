import React, { useContext } from 'react';
import logo from '../../assets/images/logo3.png';
import BannerPhoto from '../../assets/images/homes39.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link, useNavigate } from 'react-router-dom';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';
import { Button } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa'
import LoginButton from '../../components/LoginButton/LoginButton';


function Banner() {
    const { user, openWalletModal, closeWalletModal, logOut } = useContext(S39GlobalContext);
    // console.log(user)


    return (
        <div className='pt-5'>
            <div className='container pb-4' >
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-sm-12 text-white'>
                        <p className='bannerSubTitle' style={{  color:'#FFFFAE'}}>WHERE CRYPTO MEETS COMMODITIES</p>
                        <p className='bannerTitle'>DECENTRALIZED ECOFRIENDLY<br />  BLOCKCHAIN <br /> TECHNOLOGY</p>
                        {/* <img style={{ marginLeft: '30%' }} className='mb-4 ' width='28%' src={logo} alt="D.E.B.T." /> <br /> */}
                        {/* {
                            user?.walletAddress ?
                                <Link className='text-decoration-none' to='/profile'>
                                    <Button sx={{ fontSize: '', fontWeight: '700', color: '#000A17', borderRadius: '45px', background: '#FFC000', '&:hover': { background: '#09626C', color: '#fff' } }} variant='contained'>PROFILE <FaAngleRight size={18} /></Button>
                                </Link>
                                :
                                <Button onClick={() => openWalletModal()} sx={{ fontSize: '', fontWeight: '700', color: '#000A17', borderRadius: '45px', background: '#FFC000', '&:hover': { background: '#09626C', color: '#fff' } }} variant='contained'>LOGIN WITH WALLET <FaAngleRight size={18} /> </Button>
                        } */}
                        <LoginButton></LoginButton>
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
