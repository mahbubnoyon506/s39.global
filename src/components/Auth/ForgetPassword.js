import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSend } from "react-icons/fi";
import { AiOutlineLogin, AiOutlineMail } from "react-icons/ai";
import "./ForgetPassword.css";
import MailIcon from "@mui/icons-material/Mail";

const ForgetPassword = () => {

  const sendResetLink = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  };

  return (
    <div>
      <div className="handleTheLoginBody">
        <div className="container mx-auto">
          <div className=" forCard  w-50 p-5 rounded mx-auto">
            <div className="mx-auto text-center">
              <img
                style={{
                  width: "80px",
                  marginTop: "-20px",
                }}
                src="https://testnet.grighund.net/static/media/logo192.ea779dfe5e580c22a76f.png"
                alt="logo"
              />
              <p className="py-1" style={{ fontSize: "34px" }}>
                Forget Password
              </p>
            </div>
            <hr />
            <div className="mt-4 pt-2">
              <form onSubmit={sendResetLink}>
                <InputGroup className="mb-3 mt-3">
                  <InputGroup.Text className=" border fs-3 bg-dark">
                    <MailIcon style={{ fontSize: "20px", color: "white" }} />
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    className=""
                    placeholder="Enter Email"
                    type="email"
                    name="email"
                    required
                  />
                </InputGroup>

                <div
                  className="mx-auto text-center"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <Button
                    style={{ backgroundColor: "#f74545", height: "28px" }}
                    className="button-34 px-4"
                    type="submit"
                    // onClick={handleGoToLogin}
                  >
                    <FiSend></FiSend> Send
                  </Button>
                  <Button
                    style={{ backgroundColor: "#f74545", height: "28px" }}
                    className="button-34 px-4"
                    type="button"
                  >
                    <AiOutlineLogin /> Login
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

export default ForgetPassword;
