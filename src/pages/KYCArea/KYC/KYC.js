import React, { useContext, useEffect, useState } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import KycAddress from "../KycAddress/KycAddress";
import KycEmail from "../KycEmail/KycEmail";
import KycMobile from "../KycMobile/KycMobile";
import KycPhotoId from "../KycPhotoId/KycPhotoId";
import KycProfile from "../KycProfile/KycProfile";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./KYC.css";
import { DoneOutline } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";
import KycAddProduct from "../KycAddProduct/KycAddProduct";
import { Link, Navigate, useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { S39GlobalContext } from "../../../contexts/S39GlobalContext";
import { KycContext } from "../../../contexts/KycContext";
import { Button } from "@mui/material";

const KYC = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("profile");
  const [photoIddata, setphotoIddata] = useState({});
  const [photoIddataRefetch, setphotoIddataRefetch] = useState(false);
  const [addressDataRefetch, setaddressDataRefetch] = useState(false);
  const [addressData, setaddressData] = useState({});
  const [userProfileData, setuserProfileData] = useState({});
  const [userProfileDataRefetch, setuserProfileDataRefetch] = useState(false);
  const {
    kycUser,
    handleUpdateUser,
    emailVerified,
    mobileNoVerify,
    isVerifiedAddress,
    isVerifiedPhotId,
    isVerifiedProfile,
    logout,
  } = useContext(KycContext);
  const { user, openWalletModal } = useContext(S39GlobalContext);

  // console.log("from kycs", photoIddata, addressData, "user", kycUser);
  console.log(photoIddata)

  useEffect(() => {
    const getPhotoIddata = async () => {
      await axios
        .get(
          `https://testnetback.s39global.com/api/photo-id/data/${kycUser?.walletAddress}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("kycUserTokenS39Testnet")}`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          setphotoIddata(res.data.result);
        });
    };
    getPhotoIddata();
  }, [kycUser?.walletAddress, isVerifiedPhotId]);

  useEffect(() => {
    const getAddressData = async () => {
      await axios
        .get(
          `https://testnetback.s39global.com/api/address/data/${kycUser?.walletAddress}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("kycUserTokenS39Testnet")}`,
            },
          }
        )
        .then((res) => {
          setaddressData(res.data.result);
        });
    };
    getAddressData();
  }, [kycUser?.walletAddress, isVerifiedAddress]);

  const getProfile = async () => {
    await axios
      .get(
        `https://testnetback.s39global.com/api/user-panel/user/${kycUser?.walletAddress}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("kycUserTokenS39Testnet")}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data, "Emtiazzzzzzzzzzz");
        setuserProfileData(res.data.result);
      });
  };

  useEffect(() => {
    getProfile();
  }, [kycUser?.walletAddress, isVerifiedProfile]);

  const isPhotoidPosted = localStorage.getItem("photoIdPosted");
  const isaddressPosted = localStorage.getItem("addressPosted");

  // const logout = () => {
  //   localStorage.removeItem("kycUserTokenS39Testnet");
  //   navigate("/");
  // };
  // console.log(userProfileData.email, "Emtiazzzzzzzzzzz");

  return (
    <>
      {/* Top Header ************************ */}
      {/* <div style={{ background: "rgb(38, 38, 38)" }}>
        <div className="container px-0 ">
          <div className="pt-2 pb-3 d-flex px-2 px-md-0 px-lg-0 align-items-center justify-content-between">
            <Link to="/" className="d-flex align-items-center">
              <img src={"https://testnet.dslcommerce.com/static/media/logoDSL.4dce99e1e0cbfa9f8dbb.jpeg"} id="dslKycLogo" alt="dsl logo" />
              <span className="dslFs ">DSLCOMMERCE.COM</span>
            </Link>
            <button
              onClick={logout}
              className="ColorBg border border-0 btn btn-primary "
              style={{ fontSize: "14px" }}
            >
              <img
                src={"https://testnet.dslcommerce.com/static/media/logoDSL.4dce99e1e0cbfa9f8dbb.jpeg"}
                alt="dsl logo"
                style={{ width: "25px", marginRight: "5px" }}
              />
              <span className="pl-1">Logout</span>
            </button>
          </div>
        </div>
      </div> */}

      <main
        className="kycMainArea bg-darkblue"
        style={{ minHeight: "100vh", color: "white" }}
      >
        {/************************* Middle Header ************************ */}
        <div className="container px-4">
          <div className="pt-3 mb-4 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <span className="fs-4 fw-bold text-uppercase text-white ">
            S39GLOBAL.COM
            </span>

            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <Button onClick={() => navigate("/mineraltoken")} className='btn rounded-0 border-0 p-2 me-2 mine-mineral text-white fw-bold' style={{ background: "#15407F", }}>MINE MINERAL TOKENS</Button>
              <button
                className="border-0 p-2 fw-bold rounded-2"
                onClick={() => navigate("/profile")}
              >
                My Profile
              </button>
            </div>
          </div>
        </div>

        {/* <hr /> */}

        {/************************* Main KYC Body ************************ */}
        <div
          className="container p-4"
          style={{ background: "rgb(38, 38, 38)", minHeight: "100vh" }}
        >
          <Tabs>
            <TabList classNam="gridFilter text-start mb-50 md-mb-30">
              <Tab>
                PROFILE
                {isVerifiedProfile == false &&
                  !userProfileData?.nationality && (
                    <CloseIcon
                      className="text-danger ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )}
                {/* {(isVerifiedProfile == true && userProfileData?.isVerified == false) &&
              < ErrorIcon className="text-warning" />
            } */}
                {(isVerifiedProfile == true ||
                  userProfileData?.nationality) && (
                    <DoneIcon
                      className="text-success ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )}
              </Tab>
              <Tab>
                EMAIL
                {kycUser?.emailVerified == false && (
                  <CloseIcon
                    className="text-danger ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {kycUser?.emailVerified == true && (
                  <DoneIcon
                    className="text-success ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
              </Tab>
              <Tab>
                MOBILE
                {kycUser?.mobileVerified == false && (
                  <CloseIcon
                    className="text-danger ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {kycUser?.mobileVerified == true && (
                  <DoneIcon
                    className="text-success ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
              </Tab>
              {/* {console.log(
                "testnet",
                isPhotoidPosted != "true",
                isPhotoidPosted,
                // isVerifiedPhotId == false,
                photoIddata?.isVerified == false,
                photoIddata?.isVerified == undefined
                // photoIddata?.isPending == true,
                // photoIddata?.isPending == undefined,
                // photoIddata?.isVerified == undefined
              )} */}
              {/* {console.log(isVerifiedPhotId == false, photoIddata?.isVerified == false)} */}

              <Tab>
                PHOTO ID
                {kycUser?.isPhotoId === false && (
                  <CloseIcon
                    className="text-danger ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {kycUser?.isPhotoId === true &&
                  kycUser.isVerified === false && (
                    <ErrorIcon
                      className="text-warning ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )}
                {kycUser?.isVerified === true && (
                  <DoneIcon
                    className="text-success ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
              </Tab>
              {console.log(
                isVerifiedAddress == false,
                addressData?.isVerified,
                "test"
              )}

              <Tab>
                ADDRESS PROOF
                {kycUser?.isAddress === false && (
                  <CloseIcon
                    className="text-danger ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {kycUser?.isAddress === true &&
                  kycUser.isVerified === false && (
                    <ErrorIcon
                      className="text-warning ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )}
                {kycUser?.isVerified === true && (
                  <DoneIcon
                    className="text-success ms-1"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {/* {isaddressPosted != "true" &&
                  isVerifiedAddress == false &&
                  (addressData?.isVerified == undefined ||
                    addressData?.isVerified == false) && (
                    <CloseIcon
                      className="text-danger ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )}
                {addressData?.isPending == true &&
                  addressData?.isVerified == false && (
                    <ErrorIcon
                      className="text-warning ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )}
                {addressData?.isVerified == true &&
                  addressData?.isPending == false && (
                    <DoneIcon
                      className="text-success ms-1"
                      style={{ fontSize: "18px" }}
                    />
                  )} */}
              </Tab>

              {/* <Tab>
                ADD PRODUCTS
                {(isVerifiedAddress == false && addressData?.isVerified == false) &&
              <CloseIcon className="text-danger ms-1" style={{ fontSize: "18px" }} />
            }

            {(isVerifiedAddress == true && addressData?.isVerified == false) &&
              <ErrorIcon className="text-warning ms-1" style={{ fontSize: "18px" }} />
            }

            {addressData?.isVerified == true &&
              <DoneIcon className="text-success ms-1" style={{ fontSize: "18px" }} />
            }
              </Tab> */}
            </TabList>

            <TabPanel>
              <KycProfile
                setuserProfileDataRefetch={setuserProfileDataRefetch}
                userProfileDataRefetch={userProfileDataRefetch}
                getProfile={getProfile}
              />
            </TabPanel>

            <TabPanel>
              <KycEmail />
            </TabPanel>

            <TabPanel>
              <KycMobile />
            </TabPanel>

            <TabPanel>
              <KycPhotoId
                photoIddata={photoIddata}
                setphotoIddataRefetch={setphotoIddataRefetch}
                photoIddataRefetch={photoIddataRefetch}
              />
            </TabPanel>

            <TabPanel>
              <KycAddress
                addressData={addressData}
                setaddressDataRefetch={setaddressDataRefetch}
                addressDataRefetch={addressDataRefetch}
              />
            </TabPanel>

            {/* <TabPanel>
              <KycAddProduct addressData={addressData} />
            </TabPanel> */}
          </Tabs>

          {/* <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{ background: '#262626' }}
      >
        <Tab eventKey="profile" title="PROFILE" >
          <KycProfile />
        </Tab>
        <Tab eventKey="email" title="EMAIL">
          <KycEmail />
        </Tab>
        <Tab eventKey="mobile" title="MOBILE">
          <KycMobile />
        </Tab>
        <Tab eventKey="photoId" title="PHOTO ID">
          <KycPhotoId />
        </Tab>
        <Tab eventKey="address" title="ADDRESS PROOF">
          <KycAddress />
        </Tab>
      </Tabs> */}
        </div>
      </main>
    </>
  );
};

export default KYC;
