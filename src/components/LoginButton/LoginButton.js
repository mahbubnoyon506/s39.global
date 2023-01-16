import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S39GlobalContext } from '../../contexts/S39GlobalContext';
import coin from '../../assets/images/coin2.png';
import "./LoginButton.css";

const LoginButton = () => {
    const { user, openWalletModal, closeWalletModal, logOut } = useContext(S39GlobalContext);
    const [checkDevice, setCheckDevice] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const detecting = async () => {
            if (window.innerWidth < 1000 && typeof window.ethereum === "undefined") {
                console.log("mobile");
                setCheckDevice(() => "mobileWithoutApp");
            } else if (
                window.innerWidth < 1000 &&
                typeof window.ethereum !== "undefined"
            ) {
                setCheckDevice(() => "mobileWithApp");
            } else if (
                window.innerWidth > 1000 &&
                typeof window.ethereum !== "undefined"
            ) {
                console.log("pc");
                setCheckDevice(() => "pcWithExtention");
            } else if (
                window.innerWidth > 1000 &&
                typeof window.ethereum === "undefined"
            ) {
                setCheckDevice(() => "pcWithoutExtention");
            }
        };

        detecting();
    }, []);

    return (
        <div>
            {checkDevice === "mobileWithoutApp" && (
                <a
                    href="https://metamask.app.link/dapp/http://testnet.s39global.com"
                    target={"_blank"}
                    className="text-decoration-none"
                >
                    <button className="text-uppercase button-metamask  px-5">
                        <img
                            style={{ marginLeft: '-15px', marginRight: '-5px', marginTop: "5px" }}
                            width={50}
                            src={coin}
                            alt=""
                        />{" "}
                        Open in metamask
                    </button>
                </a>
            )}
            {checkDevice === "mobileWithApp" && (
                <>
                    {!user.walletAddress ||
                        user.walletAddress === "undefined" ? (
                        <button
                            className="text-uppercase button-metamask px-5"
                            onClick={() => openWalletModal()}
                        >
                            {" "}
                            <img
                                style={{ marginLeft: '-15px', marginRight: '-5px', marginTop: "5px" }}
                                width={50}
                                src={coin}
                                alt=""
                            />{" "}
                            Connect to metamask
                        </button>
                    ) : (
                        <button
                            className="text-uppercase button-metamask px-5"
                            onClick={() => navigate("/profile")}
                        >
                            {" "}
                            <img
                                style={{ marginLeft: '-15px', marginRight: '-5px', marginTop: "5px" }}
                                width={50}
                                src={coin}
                                alt=""
                            />{" "}
                            profile
                        </button>
                    )}
                </>
            )}
            {checkDevice === "pcWithExtention" && (
                <>
                    {!user.walletAddress ||
                        user.walletAddress === "undefined" ? (
                        <button
                            className="text-uppercase button-metamask px-5"
                            onClick={() => openWalletModal()}
                        >
                            {" "}
                            <img
                                style={{ marginLeft: '-15px', marginRight: '-5px', marginTop: "5px" }}
                                width={50}
                                src={coin}
                                // src="https://i.ibb.co/CBj8VVQ/af0137fd-42ad-4ca5-9e6c-3e8595fa77e2.jpg"
                                alt=""
                            />
                            Connect to metamask
                        </button>
                    ) : (
                        <button
                            className="text-uppercase button-metamask px-5"
                            onClick={() => navigate("/profile")}
                        >
                            {" "}
                            <img
                                style={{ marginLeft: '-15px', marginRight: '-5px', marginTop: "5px" }}
                                width={50}
                                src={coin}
                                alt=""
                            />{" "}
                            profile
                        </button>
                    )}
                </>
            )}
            {checkDevice === "pcWithoutExtention" && (
                <a
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    target={"_blank"}
                    className="text-decoration-none"
                >
                    <button className="text-uppercase button-metamask px-5">
                        <img
                            style={{ marginLeft: '-15px', marginRight: '-5px', marginTop: "5px" }}
                            width={50}
                            src={coin}
                            alt=""
                        />{" "}
                        INSTALL METAMASK
                    </button>
                </a>
            )}
        </div>
    );
};

export default LoginButton;