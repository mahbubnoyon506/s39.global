import React from 'react';

const Profile = () => {
    return (
        <div>
            <div id="login">

                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <div className="rs-login">
                            <div id="login" className="form-group mb-30 ">
                                {/* {console.log(user?.profilePicture)} */}
                                <div className="form-part">
                                    <div className="imageDivNft">
                                        <img src='' width={200} height={200} className='d-flex justify-content-start' alt="" />
                                    </div>
                                    <div className="">
                                        <label cla>Update your profile image<span>*</span></label>
                                        <div className='d-flex'>
                                            <input className='border-1 py-2 cursor-pointer' onChange='' type="file" accept='image/*' name="image" id="image" />
                                            {/* <button
                                // disabled={(nameChange?.length === 0 || isUpdatedName == true) ? true : false}
                                onClick={handleImageSubmit}
                                className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: '#FF5421' }}>{isUpdatedName == true ? "Updated" : "Update"}</button> */}

                                                <button
                                                    disabled
                                                    // onClick={handleNameSubmit}
                                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                                    Updated
                                                </button>
                                            {/* {isUpdatedImage == true ?
                                                :
                                                <button
                                                    disabled={(!selectedImage || isUpdatedImage == true) ? true : false}
                                                    onClick={handleImageSubmit}
                                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: `${!selectedImage && user?.profilePicture ? "rgb(151, 145, 145)" : "#FF5421"}` }}>Update
                                                </button>

                                            } */}
                                        </div>
                                    </div>
                                    <div className="wraper mt-2">
                                        <label>Update your Full Name<span>*</span></label>
                                        <div className='d-flex'>
                                            {/* {console.log("user?.name", user?.name)} */}
                                            <input

                                                // onChange={(e) => { setNameChange(e.target.value); handleNameButtons() }}
                                                id="fname" name="name" className="form-control-mod ps-2 profile-inputs" placeholder='Please update your Full Name.'
                                                defaultValue=''
                                                type="text" />
                                            {/* {isUpdatedName == true ? */}
                                                <button
                                                    disabled
                                                    // onClick={handleNameSubmit}
                                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                                    Updated
                                                </button>
                                                :
                                                <button
                                                    // disabled={(nameChange?.length === 0 || isUpdatedName == true) ? true : false}
                                                    // onClick={handleNameSubmit}
                                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor:  "rgb(151, 145, 145)" }}>Update
                                                </button>

                                            {/* } */}
                                        </div>
                                        <span>This will appear in your certificates.</span>
                                    </div>

                                    <div className="wraper mt-1">
                                        <label>Update your email/username<span>*</span></label>
                                        <div className='d-flex'>
                                            <input
                                                // disabled={emailVerify == true ? true : false}
                                                // onChange={e => { setEmail(e.target.value); handleEmailButtons() }}
                                                id="email" name="email" className="form-control-mod ps-2 profile-inputs " placeholder='Please update your email/username' defaultValue='' type="email" required />



                                            {/* {isUpdatedEmail == true ? */}
                                                <button
                                                    disabled
                                                    // onClick={handleNameSubmit}
                                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                                    Verified
                                                </button>
                                                :
                                                <button
                                                    // disabled={(email?.length === 0 || isUpdatedName == true) ? true : false}
                                                    // onClick={handleVerifyEmail}
                                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor:  "rgb(151, 145, 145)"  }}>Verify
                                                </button>

                                            {/* } */}


                                            {/* {emailVerify != true ?
                                <button
                                    disabled={(email?.length === 0) ? true : false}
                                    onClick={handleVerifyEmail}
                                    className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: `${email?.length === 0 ? "rgb(151, 145, 145)" : "#FF5421"}` }}>Verify
                                </button>

                                :
                                <>
                                    {isUpdatedEmail == true ?
                                        <button
                                            disabled
                                            // onClick={handleNameSubmit}
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: "rgb(151, 145, 145)" }}>
                                            Updated
                                        </button>
                                        :
                                        <button
                                            disabled={(email?.length === 0 || isUpdatedEmail == true) ? true : false}
                                            onClick={handleEmailSubmit}
                                            className='border-0 px-4 p-2 w-25 d-flex justify-content-center' style={{ color: '#ffffff', backgroundColor: `${email?.length === 0 ? "rgb(151, 145, 145)" : "#FF5421"}` }}>Update
                                        </button>


                                    }
                                </>} */}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="rs-login">
                            <div id="login" className="form-group mb-30 ">
                                <div className="form-part">

                                    <div className="wraper mb-10">
                                        <label>Your Affiliate Code<span>*</span></label>
                                        {/* <input className="form-control-mod ps-2" placeholder='Affiliate Code' value={user?.affiliateCode} /> */}
                                        <div className="d-flex">
                                            <input
                                                type="text"
                                                name="affiliateCode"
                                                defaultValue=''
                                                className="form-control profileInput text-dark"
                                                disabled
                                            />
                                            {/* <CopyToClipboard> */}
                                                <button
                                                    className="copyBtn"
                                                    style={{ backgroundColor: "#15407f" }}
                                                    type="button"
                                                    // onClick={copyToClipboardAffiliateCode}
                                                >
                                                    {/* <ContentCopyIcon /> */}
                                                </button>
                                            {/* </CopyToClipboard> */}
                                        </div>
                                    </div>
                                    <div className="wraper mb-10">
                                        <label>Your Affiliate Link<span>*</span></label>
                                        <div className="d-flex">
                                            <input
                                                type="text"
                                                id="AffiliateLink"
                                                name="AffiliateLink"
                                                defaultValue=''
                                                className="form-control profileInput text-dark"
                                                disabled
                                            />
                                            {/* <CopyToClipboard> */}
                                                <button
                                                    className="copyBtn"
                                                    style={{ backgroundColor: "#15407f" }}
                                                    type="button"
                                                    // onClick={copyToClipboardAffiliateLink}
                                                >
                                                    {/* <ContentCopyIcon /> */}
                                                </button>
                                            {/* </CopyToClipboard> */}
                                        </div>
                                    </div>
                                    <div className="wraper mb-10 ">
                                        <label>Your Membership ID<span>*</span></label>
                                        <input className="form-control-mod ps-2 py-2" placeholder='Membership ID' defaultValue='' />
                                    </div>
                                    <div className="wraper mb-10">
                                        <label>Your Wallet Address<span>*</span></label>
                                        <div className="d-flex">
                                            <input
                                                type="text"
                                                id="walletAddress"
                                                name="walletAddress"
                                                defaultValue=''
                                                className="form-control profileInput text-dark"
                                                disabled
                                            />
                                            {/* <CopyToClipboard> */}
                                                <button
                                                    className="copyBtn"
                                                    style={{ backgroundColor: "#15407f" }}
                                                    type="button"
                                                    // onClick={copyToClipboardWalletAddress}
                                                >
                                                    {/* <ContentCopyIcon /> */}
                                                </button>
                                            {/* </CopyToClipboard> */}
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" social-div">
                                            <div>
                                                <span className='pt-2 fw-bold text-start mb-3'>Share Affiliate Link</span>
                                                {/* <div className='d-flex gap-2 mb-3'>
                                                    <TwitterShareButton url={window.location.origin + "/" + user?.myReferralCode} title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                        <TwitterIcon size={40} round={true} />
                                                    </TwitterShareButton>
                                                    <LinkedinShareButton url={window.location.origin + "/" + user?.myReferralCode} title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                        <LinkedinIcon size={40} round={true} />
                                                    </LinkedinShareButton>
                                                    <WhatsappShareButton url={window.location.origin + "/" + user?.myReferralCode} title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                        <WhatsappIcon size={40} round={true} />
                                                    </WhatsappShareButton>
                                                    <FacebookShareButton url={window.location.origin + "/" + user?.myReferralCode} title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                        <FacebookIcon size={40} round={true} />
                                                    </FacebookShareButton>
                                                    <PinterestShareButton url={window.location.origin + "/" + user?.myReferralCode} title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                        <PinterestIcon size={40} round={true} />
                                                    </PinterestShareButton>
                                                    <TelegramShareButton url={window.location.origin + "/" + user?.myReferralCode} title={`Get 5% discount at Blockchaincert.sg when you use my code.`}>
                                                        <TelegramIcon size={40} round={true} />
                                                    </TelegramShareButton>

                                                </div> */}

                                            </div>
                                        </div>
                                        <p className='text-start'>Please share the affiliate code and start earning.</p>
                                        <div className='d-flex justify-content-start'>
                                            <button
                                                // onClick={() => navigate("/course-2")}
                                                className='border-0 px-4 p-2 me-4 profile-btns' type='submit'
                                                // style={{ color: '#ffffff', backgroundColor: '#FF5421' }}
                                                style={{ backgroundColor: "#15407f", color: '#ffffff', width: "28%" }}
                                            >Go to courses</button>
                                            <button className='border-0 px-4 p-2 ms profile-btns' type="button" style={{ color: '#ffffff', backgroundColor: '#FF5421', width: "28%" }} >Logout</button>
                                        </div>
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