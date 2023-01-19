import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSend } from "react-icons/fi";
import { AiOutlineLogin, AiOutlineMail } from "react-icons/ai";
import "./ForgetPassword.css";
import MailIcon from "@mui/icons-material/Mail";
import coin from '../../../assets/images/coin2.png'
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const ResetPassword = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;


        axios
            .post(
                "https://testnetback.s39global.com/api/v1/admin/reset-password/",
                { newPassword: password },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    swal({
                        title: "Success",
                        text: `${res.data.message}`,
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                    });
                    navigate("/login");
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
                                Reset Password
                            </p>
                        </div>
                        <hr />
                        <div className="mt-4 pt-2">
                            <form onSubmit={onSubmit}>
                                <InputGroup className="mb-3 mt-3">
                                    <InputGroup.Text className='bg-dark border-0 text-white'><FaLock /></InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" className='inputBackground' placeholder='Enter new password' type={visiblePassword ? "text" : "password"} required name="password" />
                                    <InputGroup.Text className='bg-dark text-center border-0 cursor-pointer text-white' role="button" type="button" onClick={() => setVisiblePassword(!visiblePassword)}>{
                                        visiblePassword ? <FaEye /> : <FaEyeSlash />
                                    }</InputGroup.Text>
                                </InputGroup>

                                <div className='mx-auto text-center'>
                                    <Button style={{ backgroundColor: '#f74545' }} className='button-34 ps-5 pe-5 pt-2 pb-2' type="submit">
                                        Submit
                                    </Button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;