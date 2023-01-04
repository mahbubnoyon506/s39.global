import { Button } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
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
import Swal from 'sweetalert2';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';

const Profile = () => {
    const { user, openWalletModal, closeWalletModal, logOut, setUserRefetch, userRefetch } = useContext(S39GlobalContext);
    console.log(user);
    const [openEmail, setOpenEmail] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [CurrentFile, setCurrentFile] = useState("");
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    // useEffect(() => {
    //     setFullName(user?.name)
    // }, [])

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



    const selectFile = (event) => {
        setCurrentFile(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));

    };

    //image update
    const handleUpdateImage = async () => {
        const ImageFormData = new FormData();
        ImageFormData.append("image", CurrentFile);

        if (CurrentFile) {
            await axios.put("https://testnetback.s39global.com/api/v1/wallet-user/", ImageFormData, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("s39GlobalToken")}`,
                },
            })
                .then(res => {
                    console.log("update");
                    if (res.status === 200) {
                        swal({
                            title: "Successful",
                            text: "Image updated successfully",
                            icon: "success",
                            button: "OK",
                            className: "modal_class_success",
                        });
                        setPreviewImage("");
                        setCurrentFile("");
                        setUserRefetch(!userRefetch);
                    }
                })
        }
    }

    const handleUpdateFullName = async () => {
        const fullNameFormData = new FormData();
        fullNameFormData.append("name", fullName);
        if (fullName) {
            await axios.put("https://testnetback.s39global.com/api/v1/wallet-user/", fullNameFormData, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("s39GlobalToken")}`,
                },
            })
                .then(res => {
                    console.log("update");
                    if (res.status === 200) {
                        swal({
                            title: "Successful",
                            text: "Name updated successfully",
                            icon: "success",
                            button: "OK",
                            className: "modal_class_success",
                        });
                        setFullName("");
                        setUserRefetch(!userRefetch);
                    }
                })
        }
    }
    const handleUpdateEmail = async () => {
        const emailFormData = new FormData();
        emailFormData.append("email", email);
        if (email.length > 0 && email.includes("@" && ".")) {
            await axios.put("https://testnetback.s39global.com/api/v1/wallet-user/", emailFormData, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("s39GlobalToken")}`,
                },
            })
                .then(res => {
                    console.log("update");
                    if (res.status === 200) {
                        swal({
                            title: "Successful",
                            text: "Email updated successfully",
                            icon: "success",
                            button: "OK",
                            className: "modal_class_success",
                        });
                        setEmail("");
                        setUserRefetch(!userRefetch);
                    }
                })
        }
    }


    const handleVerifyEmail = async () => {
        // check if email is valid

        if (email.length > 0 && email.includes("@" && ".")) {
            // setLoading(true);
            // setEmailVerify(true);
            console.log(email)
            await axios.post('https://testnetback.s39global.com/api/v1/email/send', { email })
                .then(res => {
                    console.log(res, '--data results gotten~');
                    if (res.status === 200) {
                        swal({
                            text: res.data.message,
                            icon: "success",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                    }
                }).catch(err => {
                    // alert(err.response.data.message);
                    console.dir(err)
                    // setEmailVerify(false);
                    // swal({
                    //     title: "Attention",
                    //     text: err.response.data.message,
                    //     icon: "warning",
                    //     button: "OK!",
                    //     className: "modal_class_success",
                    // });


                    const wrapper = document.createElement("div");
                    wrapper.innerHTML = `<p class='text-break text-white fs-5'>${err.response.data.message}</p>`;

                    Swal.fire(
                        {
                            html: wrapper,
                            icon: "warning",
                            customClass: "modal_class_success",
                        }
                    )
                })
                .finally(() => {
                    // setLoading(false);
                });
        }
        else {
            // swal({
            //     title: "Attention",
            //     text: "Please enter a valid email address",
            //     icon: "warning",
            //     button: "OK!",
            //     className: "modal_class_success",
            // });


            const wrapper = document.createElement("div");
            wrapper.innerHTML = `<p class='text-break text-white fs-5'>Please enter a valid email address</p>`;

            Swal.fire(
                {
                    html: wrapper,
                    icon: "warning",
                    customClass: "modal_class_success",
                }
            )
        }
    }

    return (

        <div className='bg-darkblue text-white'>
            <div className="row gx-5 p-2 p-lg-5">
                <div className="col-lg-6 md-mb-50 border py-2 py-lg-5">
                    <div className="">

                        <div id="login" className="mb-30 ">
                            <div className="">
                                <div className="">
                                    {(user?.image && !previewImage) && <img src={user?.image} width={200} height={200} className='d-flex justify-content-start' alt="" />}
                                    {previewImage && <img src={previewImage} width={200} height={200} className='d-flex justify-content-start' alt="" />}
                                </div>
                                <div className="mt-3">
                                    <label className=''>Update your profile image<span>*</span></label>
                                    <div className='d-flex'>
                                        <input className='w-100 border py-2 cursor-pointer' onChange={selectFile} type="file" accept='image/*' name="image" id="image" defaultValue={user?.image ? user?.image : ""} />
                                        {CurrentFile ? <button
                                            disabled={!previewImage || !CurrentFile}
                                            onClick={() => handleUpdateImage()}
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: (!previewImage || !CurrentFile) ? "rgb(151, 145, 145)" : '#FF5421' }}>

                                            Update
                                        </button> :
                                            <button
                                                disabled={!previewImage || !CurrentFile}
                                                onClick={() => handleUpdateImage()}
                                                className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: (!previewImage || !CurrentFile) ? "rgb(151, 145, 145)" : '#FF5421' }}>

                                                {user?.image ? "Updated" : "Update"}
                                            </button>
                                        }
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label className=''>Update your Full Name<span>*</span></label>
                                    <div className='d-flex'>
                                        <input
                                            id="fname" name="name" className="w-100 form-control-mod ps-2 profile-inputs" placeholder='Please update your Full Name.'

                                            defaultValue={user?.name ? user?.name : ""} onChange={(e) => setFullName(e.target.value)}
                                            type="text" />
                                        {fullName ? <button
                                            disabled={!fullName}
                                            onClick={() => handleUpdateFullName()}
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: (!fullName) ? "rgb(151, 145, 145)" : '#FF5421' }}>
                                            Update
                                        </button> : <button
                                            disabled={!fullName}
                                            onClick={() => handleUpdateFullName()}
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: (!fullName) ? "rgb(151, 145, 145)" : '#FF5421' }}>
                                            {user?.name ? "Updated" : "Update"}
                                        </button>}
                                    </div>
                                    <span>This will appear in your certificates.</span>
                                </div>
                                <div className=" mt-3">
                                    <label className=''>Update your email/username<span>*</span></label>
                                    <div className='d-flex'>
                                        <input
                                            id="email" name="email" className="w-100 ps-2" placeholder='Please update your email/username' defaultValue={user?.email ? user?.email : ""} type="email" required onChange={(e) => setEmail(e.target.value)} />


                                        {email ?
                                            <button
                                                disabled={!email}
                                                className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: (!email) ? "rgb(151, 145, 145)" : '#FF5421' }}
                                                onClick={() => handleVerifyEmail()}

                                            >
                                                Verify
                                            </button>
                                            :
                                            <button
                                                disabled={!email}
                                                className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: (!email) ? "rgb(151, 145, 145)" : '#FF5421' }}>
                                                {user?.email ? "Updated" : "Update"}
                                            </button>

                                        }

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
                                            defaultValue={user?.myReferralCode}
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
                                            defaultValue={`https://testnet.s39global.com/${user?.myReferralCode}`}
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
                                            defaultValue={user?.walletAddress}
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