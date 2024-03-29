import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import "./UserDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import swal from "sweetalert";
import { useContext } from "react";
import { KycContext } from "../../../../../contexts/KycContext";

function UserDetails() {
    const { walletAddress } = useParams();
    const [userInfo, setUserInfo] = useState();
    // console.log(userInfo, "user info in user details");
    const [userAddress, setUserAddress] = useState();
    const [photoId, setPhotoId] = useState();
    const navigate = useNavigate();
    const { deleteData } = useContext(KycContext);
    const location = useLocation();
    const prevLocation = location?.state?.from;

    useEffect(() => {
        fetch(
            `https://testnetback.s39global.com/api/user-panel/user/${walletAddress}`
        )
            .then((res) => res.json())
            .then((data) => setUserInfo(data.result));
    }, [walletAddress]);

    useEffect(() => {
        fetch(`https://testnetback.s39global.com/api/address/data/${walletAddress}`)
            .then((res) => res.json())
            .then((data) => setUserAddress(data.result));
    }, [walletAddress]);

    // console.log("userAddress", userAddress);

    useEffect(() => {
        fetch(`https://testnetback.s39global.com/api/photo-id/data/${walletAddress}`)
            .then((res) => res.json())
            .then((data) => setPhotoId(data.result));
    }, [walletAddress]);

    const registrationDate = new Date(userInfo?.createdAt)
        .toLocaleString()
        .split(",")?.[0];
    // console.log(registrationDate)

    let validRegDate;

    if (registrationDate == "Invalid Date") {
        validRegDate = "";
    } else {
        validRegDate = registrationDate;
    }

    const deleteUser = (wallet) => {
        deleteData(wallet)
        navigate(-1);
    };

    const verifyUser = (id) => {
        axios
            .put(`https://testnetback.s39global.com/api/user-panel/admin/verify/${id}`)
            .then((res) => {
                // if (res.status === 200) {
                // toast.success(res?.data?.message);
                swal({
                    text: `${res?.data?.message}`,
                    icon: "success",
                    button: "OK!",
                    className: "modal_class_success",
                });
                navigate(-1);
                // }
            })
            .catch((err) => {
                // toast.error("Something went wrong!");
                swal({
                    title: "Attention",
                    text: "Something went wrong!",
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });
    };

    const pendingUser = (id) => {
        console.log("INside the pendin user", id);
        axios
            .put(`https://testnetback.s39global.com/api/user-panel/admin/pending/${id}`)
            .then((res) => {
                // if (res.status === 200) {
                // toast.success(res?.data?.message);
                swal({
                    text: `${res?.data?.message}`,
                    icon: "success",
                    button: "OK!",
                    className: "modal_class_success",
                });
                navigate(-1);
                // }
                // console.log("done", res)
            })
            .catch((err) => {
                // toast.error("Something went wrong!");
                swal({
                    title: "Attention",
                    text: "Something went wrong!",
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });
    };

    return (
        <div style={{ minHeight: "450px" }}>
            <div className="text-white pb-2">
                <button onClick={() => navigate(-1)} className="btn btn-success ">
                    <BiArrowBack className="fs-5" /> Back
                </button>
            </div>
            <div>
                <Accordion
                    defaultExpanded
                    className="svgColor  mb-2"
                    style={{ backgroundColor: "#272D47", color: "white" }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="ps-4"
                    >
                        <Typography>
                            User Profile{" "}
                            <CheckIcon
                                id="rightMark"
                                style={{ color: "green !important", fontSize: "30px" }}
                            />
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className="container row ">
                            <div className="col-12 col-lg-6 px-4">
                                <div className="mb-2">
                                    <label htmlFor="membershipId">Membership Id</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="membershipId"
                                            name="membershipId"
                                            className="form-control bg-transparent text-white"
                                            placeholder="membership id"
                                            defaultValue={
                                                userInfo?.memberId ? userInfo?.memberId : ""
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="fullName">Full Name</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            className="form-control bg-transparent text-white"
                                            placeholder="full name"
                                            defaultValue={userInfo?.name ? userInfo?.name : ""}
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="userName">User Name</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="userName"
                                            name="userName"
                                            className="form-control bg-transparent text-white"
                                            placeholder="user name"
                                            defaultValue={
                                                userInfo?.username ? userInfo?.username : ""
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-2 d-flex py-2">
                                    <label htmlFor="userName">Gender :  {userInfo?.gender}</label>

                                </div>
                                <div className="mb-2">
                                    <label htmlFor="registerDate">Registration Date</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            defaultValue={validRegDate || ""}
                                            type="text"
                                            id="registerDate"
                                            name="registerDate"
                                            className="form-control bg-transparent text-white"
                                            placeholder="register date  "
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 px-4">
                                <div className="mb-2">
                                    <label htmlFor="email">
                                        Email{" "}
                                        <CheckIcon style={{ color: "green", fontSize: "20px" }} />
                                    </label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control bg-transparent text-white"
                                            placeholder="email "
                                            defaultValue={userInfo?.email ? userInfo?.email : ""}
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="mobile">
                                        Mobile{" "}
                                        <CheckIcon style={{ color: "green", fontSize: "20px" }} />
                                    </label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="mobile"
                                            name="mobile"
                                            className="form-control bg-transparent text-white"
                                            value={userInfo?.mobile}
                                        />
                                        {/* {console.log("userInfo?.mobile", userInfo?.mobile)} */}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="dob"
                                            name="dob"
                                            className="form-control bg-transparent text-white"
                                            defaultValue={
                                                userInfo?.birthday ? userInfo?.birthday : ""
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="nationality">Nationality</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="nationality"
                                            name="nationality"
                                            className="form-control bg-transparent text-white"
                                            defaultValue={
                                                userInfo?.nationality ? userInfo?.nationality : ""
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="my-2 px-4 mt-4 ps-4 ">
                                <div className=" d-lg-flex gap-lg-4">
                                    <div className="text-center pt-2">
                                        <button
                                            onClick={() => pendingUser(userInfo?._id)}
                                            className=" btn text-white btn-warning uBtn px-4  rounded text-uppercase"
                                        >
                                            PENDING{" "}
                                        </button>
                                    </div>
                                    {prevLocation !== "/admin/verified" && (
                                        <div className="text-center pt-2">
                                            <button
                                                onClick={() => verifyUser(userInfo?._id)}
                                                className=" btn btn-success uBtn px-4  rounded text-uppercase"
                                            >
                                                VERIFY
                                            </button>
                                        </div>
                                    )}
                                    <div className="text-center pt-2">
                                        <button
                                            onClick={() => deleteUser(userInfo?.walletAddress)}
                                            className=" btn btn-danger uBtn px-4  rounded text-uppercase"
                                        >
                                            DELETE{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    className="svgColor mb-2"
                    style={{ backgroundColor: "#272D47", color: "white" }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className="ps-4"
                    >
                        <Typography>
                            Address Proof{" "}
                            <CheckIcon
                                id="rightMark"
                                style={{ color: "green", fontSize: "30px" }}
                            />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="container row ">
                            <div className="col-12 col-lg-6 px-4">
                                <div className="mb-2">
                                    <label htmlFor="address1">Address 1</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="address1"
                                            name="address1"
                                            className="form-control bg-transparent text-white"
                                            defaultValue={userAddress?.address1}
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="address2">Address 2</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="postaladdress2Code"
                                            name="address2"
                                            className="form-control bg-transparent text-white"
                                            defaultValue={userAddress?.address2}
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            className="form-control bg-transparent text-white"
                                            defaultValue={userAddress?.zipCode}
                                        />
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="country">Country</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            className="form-control bg-transparent text-white"
                                            defaultValue={userAddress?.country}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 max-w-100 px-4 mt-2">
                                <label for="address proof image">Address Proof Image</label> <br />
                                <img
                                    className="img-fluid"
                                    //   src={userAddress?.file}

                                    src={`${(userAddress?.file) ? userAddress?.file : "https://testnetback.s39global.com/public/passportSample.png"}`}
                                    alt="address proof"
                                />
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    className="svgColor mb-2"
                    style={{ backgroundColor: "#272D47", color: "white" }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className="ps-4"
                    >
                        <Typography>
                            Photo ID{" "}
                            <CheckIcon
                                id="rightMark"
                                s
                                style={{ color: "green", fontSize: "30px" }}
                            />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="container row ">
                            <div className="col-12 col-lg-6">
                                <div className="mb-2">
                                    <label htmlFor="photoIdNumber">Photo Id Number</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="photoIdNumber"
                                            name="photoIdNumber"
                                            className="form-control bg-transparent text-white"
                                            value={
                                                (photoId?.photoIdType === "passport" &&
                                                    photoId?.passportNum) ||
                                                (photoId?.photoIdType === "drivingLicense" &&
                                                    photoId?.drivingNum) ||
                                                (photoId?.photoIdType === "photoId" &&
                                                    photoId?.photoId) ||
                                                ""
                                            }
                                            placeholder="photo Id number"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="photoIdType">Photo Id Type</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="photoIdType"
                                            value={photoId?.photoIdType}
                                            name="photoIdType"
                                            className="form-control bg-transparent text-white"
                                            placeholder="photo Id type"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="photoIdType">Country of issue</label>
                                    <div className="d-flex  input-group">
                                        <input
                                            type="text"
                                            id="photoIdType"
                                            value={photoId?.countryOfIssue}
                                            name="photoIdType"
                                            className="form-control bg-transparent text-white"
                                            placeholder="Country of issue"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 px-4 mt-2">
                                {photoId?.photoIdType === "passport" && (
                                    <>
                                        <label for="address proof image">Passport photo</label>
                                        <img src={`${(photoId?.passportImg) ? photoId?.passportImg : "https://testnetback.s39global.com/public/passportSample.png"}`} alt="passport" className="img-fluid" />
                                    </>
                                )}

                                {photoId?.photoIdType === "photoId" && (
                                    <>
                                        <label for="address proof image">Photo ID front</label>
                                        <img src={`${(photoId?.photoIdFrontImg) ? photoId?.photoIdFrontImg : "https://testnetback.s39global.com/public/photoIdDefault.png"}`} className="img-fluid" alt="photoId-front" />
                                        <label className="mt-1" for="address proof image">
                                            Photo ID back
                                        </label>
                                        <img src={`${(photoId?.photoIdBackImg) ? photoId?.photoIdBackImg : "https://testnetback.s39global.com/public/photoIdDefault.png"}`} alt="photoId-back" className="img-fluid" />
                                    </>
                                )}

                                {photoId?.photoIdType === "drivingLicense" && (
                                    <>
                                        <label for="address proof image">
                                            Driving license front
                                        </label>
                                        <img
                                            src={`${(photoId?.drivingFrontImg) ? photoId?.drivingFrontImg : "https://testnetback.s39global.com/public/drivingSample.png"}`}
                                            className="img-fluid"
                                            alt="driving-license-back"
                                        />
                                        <label className="mt-1" for="address proof image">
                                            Driving license back
                                        </label>
                                        <img
                                            className="img-fluid"
                                            src={`${(photoId?.drivingBackImg) ? photoId?.drivingBackImg : "https://testnetback.s39global.com/public/drivingSample.png"}`}
                                            alt="driving-license-back"
                                        />
                                    </>
                                )}

                                {/* <img src={photoId?.file} alt="address proof" /> */}
                                {/* <input className='mt-3 w-100' type="file" accept='image/*' /> */}
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default UserDetails;
