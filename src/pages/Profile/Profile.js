import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappIcon,
    WhatsappShareButton,
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TelegramShareButton,
    TelegramIcon,
} from "react-share";
import swal from 'sweetalert';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';

const Profile = () => {
    const { user, openWalletModal, closeWalletModal, logOut } = useContext(S39GlobalContext);
    console.log(user)
    const navigate = useNavigate();


    const Logout = () => {
        logOut();
        navigate("/");
        // setOpen(false);
        closeWalletModal();
        swal({
            // title: "S",
            text: "You are successfully logged out.",
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
        });
    };
    return (

        <div className='bg-darkblue text-white'>
            <div className="row gx-5 p-2 p-lg-5">
                <div className="col-lg-6 md-mb-50 border py-2 py-lg-5">
                    <div className="">
                        <div id="login" className="mb-30 ">
                            <div className="">
                                <div className="">
                                    <img src='' width={200} height={200} className='d-flex justify-content-start' alt="" />
                                </div>
                                <div className="mt-3">
                                    <label className=''>Update your profile image<span>*</span></label>
                                    <div className='d-flex'>
                                        <input className='w-100 border py-2 cursor-pointer' onChange='' type="file" accept='image/*' name="image" id="image" />
                                        <button
                                            disabled
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                            Updated
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label className=''>Update your Full Name<span>*</span></label>
                                    <div className='d-flex'>
                                        <input
                                            id="fname" name="name" className="w-100 form-control-mod ps-2 profile-inputs" placeholder='Please update your Full Name.'
                                            defaultValue=''
                                            type="text" />
                                        <button
                                            disabled
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                            Updated
                                        </button>
                                    </div>
                                    <span>This will appear in your certificates.</span>
                                </div>
                                <div className=" mt-3">
                                    <label className=''>Update your email/username<span>*</span></label>
                                    <div className='d-flex'>
                                        <input
                                            id="email" name="email" className="w-100 ps-2" placeholder='Please update your email/username' defaultValue='' type="email" required />
                                        <button
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                            Verified
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-6 border py-2 py-lg-5">
                    <div className="">
                        <div id="login" className="form-group mb-30 ">
                            <div className="">

                                <div className=" mb-3">
                                    <label className=''>Your Affiliate Code<span>*</span></label>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            name="affiliateCode"
                                            defaultValue=''
                                            className="form-control profileInput text-dark"
                                            disabled
                                        />
                                        <button
                                            className=""
                                            style={{ backgroundColor: "#15407f" }}
                                            type="button"

                                        >
                                            <FaRegCopy size={30} color='#fff' className='p-1' />
                                        </button>
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label className=''>Your Affiliate Link<span>*</span></label>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            id="AffiliateLink"
                                            name="AffiliateLink"
                                            defaultValue=''
                                            className="form-control text-dark"
                                            disabled
                                        />
                                        <button
                                            className=""
                                            style={{ backgroundColor: "#15407f" }}
                                            type="button"

                                        >
                                            <FaRegCopy size={30} color='#fff' className='p-1' />
                                        </button>
                                    </div>
                                </div>
                                <div className=" mb-3 ">
                                    <label className=''>Your Membership ID<span>*</span></label>
                                    <input className="w-100 form-control-mod ps-2 py-2" placeholder='Membership ID' defaultValue='' />
                                </div>
                                <div className=" mb-3">
                                    <label className=''>Your Wallet Address<span>*</span></label>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            id="walletAddress"
                                            name="walletAddress"
                                            defaultValue=''
                                            className="form-control text-dark"
                                            disabled
                                        />
                                        <button
                                            className=""
                                            style={{ backgroundColor: "#15407f" }}
                                            type="button"

                                        >
                                            <FaRegCopy size={30} color='#fff' className='p-1' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <div>
                                            <span className='pt-2  text-start mb-3'>Share Affiliate Link</span>
                                            <div className='d-flex gap-2 mb-3'>
                                                <TwitterShareButton url='' title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                    <TwitterIcon size={40} round={true} />
                                                </TwitterShareButton>
                                                <LinkedinShareButton url='' title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                    <LinkedinIcon size={40} round={true} />
                                                </LinkedinShareButton>
                                                <WhatsappShareButton url='' title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                    <WhatsappIcon size={40} round={true} />
                                                </WhatsappShareButton>
                                                <FacebookShareButton url='' title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                    <FacebookIcon size={40} round={true} />
                                                </FacebookShareButton>
                                                <PinterestShareButton url='' title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                    <PinterestIcon size={40} round={true} />
                                                </PinterestShareButton>
                                                <TelegramShareButton url='' title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                    <TelegramIcon size={40} round={true} />
                                                </TelegramShareButton>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-start'>Please share the affiliate code and start earning.</p>
                                    <div className='d-flex justify-content-start'>
                                        <button
                                            className='border-0 px-4 p-2 me-4 profile-btns' type='submit'
                                            style={{ backgroundColor: "#15407f", color: '#ffffff', width: "28%" }}
                                        >Go to courses</button>
                                        <button onClick={Logout} className='border-0 px-4 p-2 ms profile-btns' type="button" style={{ color: '#ffffff', backgroundColor: '#FF5421', width: "28%" }} >Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;