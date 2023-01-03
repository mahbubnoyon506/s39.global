import { Button } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import coin from '../../assets/images/coin2.png'
import { AdminContext } from '../../contexts/AdminContext';

import './Login.css';

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const [email, setEmail] = useState("");

  const { admin, token, isAuthenticating, login } = useContext(AdminContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticating) {
      navigate(`/admin/otp/${token}`, { replace: true });
    }
    if (admin?._id) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [admin, navigate, isAuthenticating, token]);

  const handleLogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    // console.log(email);
    // console.log(password);
    login(email, password);
  };

  return (
    <div className='handleTheLoginBody'>
      <div className='container mx-auto'>
        <div className='pt-5 forCard w-md-50 p-5 rounded mx-auto'>
          <div className='mx-auto text-center'>
            <img src={coin} className='' width={150} alt="logo" />
          </div>
          <hr />
          <div className='mt-4 pt-2'>
            <form onSubmit={handleLogin}>
              <InputGroup>
                <InputGroup.Text id="basic-addon1" className='bg-dark border-0 text-white'><FaEnvelope /></InputGroup.Text>
                <Form.Control
                  style={{ textTransform: "lowercase" }}
                  className='inputBackground'
                  placeholder="Email"
                  aria-label="Username"
                  type='email'
                  required
                  aria-describedby="basic-addon1"
                  name="email"
                  onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
                />
              </InputGroup>
              <br />
              {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
              <InputGroup className="mb-3 mt-3">
                <InputGroup.Text className='bg-dark border-0 text-white'><FaLock /></InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" className='inputBackground' placeholder='password' type={visiblePassword ? "text" : "password"} required name="password" />
                <InputGroup.Text className='bg-dark text-center border-0 cursor-pointer text-white' role="button" type="button" onClick={() => setVisiblePassword(!visiblePassword)}>{
                  visiblePassword ? <FaEye /> : <FaEyeSlash />
                }</InputGroup.Text>
              </InputGroup>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link className='text-decoration-none forgetPass' to='/forgetpassword'><p>Forgot password?</p></Link>
              </Form.Group>
              <div className='mx-auto text-center'>
                <Button style={{ backgroundColor: '#f74545' }} className='button-34 ps-5 pe-5 pt-2 pb-2' type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;