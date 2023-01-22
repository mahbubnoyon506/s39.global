import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { S39GlobalContext } from "./S39GlobalContext";

export const KycContext = createContext();

export default function KycProvider({ children }) {
  // const navigate = useNavigate();
  const [kycUser, setKycUser] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { user } = useContext(S39GlobalContext);
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileNoVerify, setmobileNoVerify] = useState(false);
  const [isVerifiedProfile, setisVerifiedProfile] = useState(false);
  const [isVerifiedPhotId, setisVerifiedPhotId] = useState(false);
  const [isVerifiedAddress, setisVerifiedAddress] = useState(false);
  const [isGet, setIsGet] = useState(false);

  //get current user data..........
  useEffect(() => {
    const current = async () => {
      await axios
        .get(`https://testnetback.s39global.com/api/user-panel`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("kycUserTokenS39Testnet")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setKycUser(res.data.result);
          setIsGet(true);
        })
        .catch((err) => {
          console.log(err);
          setKycUser(null)
        })
    }
    current();
  }, [refetch, user]);

  //************************************ User Register ***********************************
  const handleRegister = async (data) => {
    await axios
      .post(`https://testnetback.s39global.com/api/user-panel/signup`, data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("kycUserTokenS39Testnet", res.data.token);
          // console.log(res.data.token);
          toast.success("Register Success .");
          setIsGet(true);
          setRefetch(!refetch);
          // navigate("/kyc/profile");
        }
      })
      .catch((err) => {
        swal({
          title: "Attention",
          text: `${err.response.data.message}`,
          icon: "warning",
          button: "OK!",
          className: "modal_class_success",
        });
      });
  };

  //************************************ User login ************************************
  const handleUserLogin = async (data) => {
    console.log(data, "data");
    await axios
      .post(`https://testnetback.s39global.com/api/user-panel/signin`, data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("kycUserTokenS39Testnet", res.data.token);
          // console.log(res.data.token);1
          toast.success("Welcome to your profile .");
          // navigate("/kyc/profile");
          setRefetch(!refetch);
          setIsGet(true);

        }
      })
      .catch((err) => {
        // console.log(err, "err")
        swal({
          title: "Attention",
          text: `${err.response.data.message}`,
          icon: "warning",
          button: "OK!",
          className: "modal_class_success",
        });
      });
  };

  // // ************************************User Update ************************************
  // const handleUpdateUser = async (dataUser) => {
  //   console.log(dataUser, "data to update");
  //   await axios
  //     .put(
  //       `https://testnetback.s39global.com/api/user-panel/user/update/${kycUser?.walletAddress}`,
  //       dataUser
  //     )
  //     .then((res) => {
  //       console.log(res, "inside the update");
  //       if (res.status === 200) {

  //         setisVerifiedProfile(!refetch);
  //         setRefetch(!refetch);
  //         toast.success("Successfully updated your profile .");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err, "inside the update erro");
  //       swal({
  //         title: "Attention",
  //         text: `${err.response.data.message}`,
  //         icon: "warning",
  //         button: "OK!",
  //         className: "modal_class_success",
  //       });
  //     });
  // };


  // //************************************ User Address ***********************************
  // const handleAddress = async (data) => {
  //   await axios
  //     .post(`https://testnetback.s39global.com/api/address`, data, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("kycUserTokenS39Testnet")}`,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setRefetch(!refetch);
  //         toast.success("Successfully updated your address .");
  //       }
  //     })
  //     .catch((err) => {
  //       swal({
  //         title: "Attention",
  //         text: `${err.response.data.message}`,
  //         icon: "warning",
  //         button: "OK!",
  //         className: "modal_class_success",
  //       });
  //     });
  // };


  //user logout
  const logout = () => {
    setKycUser("");
    localStorage.removeItem("kycUserTokenS39Testnet");
  };

  return (
    <KycContext.Provider
      value={{
        handleRegister,
        handleUserLogin,
        setKycUser,
        kycUser,
        // handleUpdateUser,
        // handleAddress,
        refetch,
        setRefetch,
        logout,
        emailVerified,
        setEmailVerified,
        mobileNoVerify,
        setmobileNoVerify,
        isVerifiedAddress,
        isVerifiedPhotId,
        isVerifiedProfile,
        isGet,
        setIsGet,
        setisVerifiedAddress,
        setisVerifiedPhotId,
        setisVerifiedProfile
      }}
    >
      {children}
    </KycContext.Provider>
  );
}
