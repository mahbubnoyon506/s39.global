import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSend } from "react-icons/fi";
import { AiOutlineLogin, AiOutlineMail } from "react-icons/ai";
import "./ForgetPassword.css";
import MailIcon from "@mui/icons-material/Mail";
import coin from '../../assets/images/coin2.png'
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { AdminContext } from "../../contexts/AdminContext";

const AdminOtp = () => {
    const { token } = useParams();
    const { admin, setAdmin } = useContext(AdminContext);
    const [forEnable, setForEnable] = useState(false);
    const [pasteText, setPasteText] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin?._id) {
            navigate("/admin");
        }
    }, [admin, navigate]);

    // for maintaining re-send otp button's disable enable
    const enableing = () => {
        setForEnable(true);
    };

    setTimeout(enableing, 180000);
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called"),
    });

    const resendOTP = () => {
        axios
            .get(`https://testnetback.s39global.com/api/v1/admin/resend-otp`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    // alert(res.data.message);
                    // alert("OTP resent");
                    swal({
                        text: "OTP resent",
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                    });
                    setForEnable(false);
                }
            })
            .catch((err) => {
                // alert(err.res.data.message);
                swal({
                    text: err.res.data.message,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });
    };

    const handleOTP = (e) => {
        e.preventDefault();
        const otp = e.target.otp.value;
        axios
            .post(
                `https://testnetback.s39global.com/api/v1/admin/verify-otp/`,
                {
                    otp,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    setAdmin(res.data.admin);
                    localStorage.setItem("adminS39Global", res.data.token);
                    localStorage.removeItem("verify-tokens");
                    navigate("/admin/dashboard");
                }
            })
            .catch((err) => {
                swal({
                    text: err.response.data.message,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });
    };

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }));

    const handlePasteText = () => {
        navigator.clipboard.readText().then(
            (cliptext) => setPasteText(cliptext),
            (err) => console.log(err)
        );
        setPasteText(null);
    };

    return (
        <div>
            <div className="handleTheLoginBody">
                <div className="container mx-auto">
                    <div className=" forCard p-5 rounded mx-auto">
                        <div className="mx-auto text-center">
                            <img
                                src={coin}
                                alt="logo"
                                width={150}
                            />
                            <p className="py-1" style={{ fontSize: "34px" }}>
                                OTP
                            </p>
                        </div>
                        <hr />
                        <div className="mt-4 pt-2">
                            <form onSubmit={handleOTP}>
                                {/* <InputGroup className="mb-3 mt-3">
                                    <InputGroup.Text className='bg-dark border-0 text-white'><FaLock /></InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" className='inputBackground' placeholder='Enter new password' type="number" required name="otp" />
                                    
                                </InputGroup> */}
                                <InputGroup className="mb-3 mt-3">
                                    <InputGroup.Text className="bg-dark text-light border-0">
                                        <AiFillLock></AiFillLock>
                                    </InputGroup.Text>
                                    <Form.Control
                                        aria-label="Amount (to the nearest dollar)"
                                        className="inputBackground"
                                        defaultValue={pasteText}
                                        placeholder="Enter OTP"
                                        type="number"
                                        name="otp"
                                        required
                                    />
                                    <CustomTooltip title="paste">
                                        <InputGroup.Text
                                            style={{ cursor: "pointer" }}
                                            className="bg-dark text-light border-0"
                                            onClick={() => handlePasteText()}
                                        >
                                            <i className="fas fa-paste"></i>
                                        </InputGroup.Text>
                                    </CustomTooltip>
                                </InputGroup>
                                <div className='mx-auto text-center'>
                                    <Button style={{ backgroundColor: '#f74545' }} className='button-34 ps-5 pe-5 pt-2 pb-2' type="submit">
                                        Submit
                                    </Button>
                                </div>
                                <div className='mx-auto text-center'>
                                    <Button
                                        disabled={!forEnable}
                                        onClick={() => resendOTP()}
                                        style={{ backgroundColor: '#f74545' }} className='button-34 ps-5 pe-5 pt-2 pb-2' type="submit">
                                        Re-Send OTP
                                    </Button>
                                </div>
                                <div className="text-center text-dark fw-bolder mt-3">
                                    <span>{minutes}</span>:
                                    <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOtp;
