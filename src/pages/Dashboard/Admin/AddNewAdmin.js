// import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { RiAdminFill } from "react-icons/ri";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import Loader from '../../loader/Loader';
import "./AddNewAdmin.css";
import swal from 'sweetalert';
import axios from "axios";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/system";

const AddNewAdmin = ({ open, setOpen }, props) => {

  // const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    setModalShowNewAdmin,
    setIsLoadingAdmin,
    refetch,
    setRefetch,
    isLoadingAdmin,
    allAdmin,
    setAllAdmin,
  } = props;
  const [value, setValue] = useState();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const subNewAdmin = async (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
    console.log(image, "here the image");
    const name = event.target.name.value;
    const phone = value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    const formDataAddAdmin = new FormData();
    formDataAddAdmin.append("name", name);
    formDataAddAdmin.append("username", userName);
    formDataAddAdmin.append("email", email);
    formDataAddAdmin.append("phone", phone);
    formDataAddAdmin.append("image", image);
    formDataAddAdmin.append("password", password);

    if (password !== confirmPassword) {
      return swal({
        title: "Attention",
        text: "Confirm Password not match!",
        icon: "warning",
        button: "OK!",
        className: "modal_class_success",
      });
    } else {
      await axios
        .post("https://testnetback.s39global.com/api/v1/admin/", formDataAddAdmin, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("adminS39Global")}`,
          },
        })
        .then((res) => {
          console.log(res)
          if (res.status === 201) {
            setModalShowNewAdmin(false);
            setRefetch(!refetch);
            event.target.reset();
            swal({
              title: "Successful",
              text: res.data.message,
              icon: "success",
              button: "OK",
              className: "modal_class_success",
            });
          }
        })
        .catch((error) => {
          swal({
            title: "Attention",
            text: error?.response?.data,
            icon: "error",
            button: "OK",
            className: "modal_class_success",
          });
        });
    }
  };

  return (
    // <Modal
    //   {...props}
    //   size="md"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    //   className="modelAddAdminBody"
    // >
    //   <Modal.Header closeButton closeVariant="white" className="modelAddAdmin">
    //     <Modal.Title
    //       id="contained-modal-title-vcenter"
    //       className="fs-5 text-light"
    //     >
    //       <RiAdminFill className="fs-4"></RiAdminFill> Add Admin
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body className="handleModalBody">
    //     <div>
    //       <div>
    //         <form onSubmit={subNewAdmin}>
    //           <div className="row addAdminDiv">
    //             <div className="col-lg-12">
    //               <p className="mb-1">Image</p>

    //               <input
    //                 className="form-control"
    //                 type="file"
    //                 accept="image/*"
    //                 name="image"
    //               />
    //               <p className="mb-1">Full Name</p>
    //               <input
    //                 className="form-control"
    //                 placeholder="Enter name"
    //                 type="text"
    //                 name="name"
    //                 required
    //               />

    //               <p className="mb-1">User Name</p>
    //               <input
    //                 className="form-control"
    //                 placeholder="Enter username"
    //                 type="text"
    //                 name="username"
    //                 required
    //                 value={userName}
    //                 onChange={(e) =>
    //                   setUserName(e.target.value.toLocaleLowerCase())
    //                 }
    //               />
    //               <p className="mb-1">Email</p>
    //               <input
    //                 className="form-control"
    //                 placeholder="Enter email"
    //                 type="email"
    //                 name="email"
    //                 required
    //                 value={email}
    //                 onChange={(e) =>
    //                   setEmail(e.target.value.toLocaleLowerCase())
    //                 }
    //               />
    //               <p className="mb-1">Phone</p>
    //               <PhoneInput
    //                 international
    //                 defaultCountry="SG"
    //                 countryCallingCodeEditable={true}
    //                 className="form-control handleModalBody "
    //                 type="text"
    //                 value={value}
    //                 onChange={setValue}
    //                 required
    //                 style={{ display: 'flex' }}
    //                 inputProps={{
    //                   name: "phone",
    //                   required: true,
    //                   autoFocus: true,
    //                 }}
    //               />
    //               <p className="mb-1">Password</p>
    //               <input
    //                 className="form-control"
    //                 placeholder="Enter Password"
    //                 type="password"
    //                 name="password"
    //                 required
    //               />
    //               <p className="mb-1">Confirm Password</p>
    //               <input
    //                 className="form-control"
    //                 placeholder="Confirm password"
    //                 type="password"
    //                 name="confirmPassword"
    //                 required
    //               />
    //             </div>
    //             <Modal.Footer className="mt-3 modalFooter">
    //               <button
    //                 type="button"
    //                 className="adminBtnAdd11"
    //                 onClick={props.onHide}
    //               >
    //                 CANCEL
    //               </button>
    //               <button type="submit" className="adminBtnAdd">
    //                 ADD
    //               </button>
    //             </Modal.Footer>
    //           </div>
    //         </form>
    //       </div>
    //       <div></div>
    //     </div>
    //   </Modal.Body>
    // </Modal>
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ background: '#303651', padding: '20px 40px' }}>
          <DialogTitle id="alert-dialog-title" sx={{color: '#fff'}}>
            {"Add Admin"}
          </DialogTitle>
          <form onSubmit={subNewAdmin}>
            <div className="row addAdminDiv">
              <div className="col-lg-12">
                <p className="mb-1">Image</p>

                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  name="image"
                />
                <p className="mb-1">Full Name</p>
                <input
                  className="form-control"
                  placeholder="Enter name"
                  type="text"
                  name="name"
                  required
                />

                <p className="mb-1">User Name</p>
                <input
                  className="form-control"
                  placeholder="Enter username"
                  type="text"
                  name="username"
                  required
                  value={userName}
                  onChange={(e) =>
                    setUserName(e.target.value.toLocaleLowerCase())
                  }
                />
                <p className="mb-1">Email</p>
                <input
                  className="form-control"
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value.toLocaleLowerCase())
                  }
                />
                <p className="mb-1">Phone</p>
                <PhoneInput
                  international
                  defaultCountry="SG"
                  countryCallingCodeEditable={true}
                  className="form-control handleModalBody "
                  type="text"
                  value={value}
                  onChange={setValue}
                  required
                  style={{ display: 'flex' }}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
                <p className="mb-1">Password</p>
                <input
                  className="form-control"
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  required
                />
                <p className="mb-1">Confirm Password</p>
                <input
                  className="form-control"
                  placeholder="Confirm password"
                  type="password"
                  name="confirmPassword"
                  required
                />
              </div>
              <Modal.Footer className="mt-3 modalFooter">
                <button
                  type="button"
                  className="adminBtnAdd11 me-2"
                  onClick={handleClose}
                >
                  CANCEL
                </button>
                <button type="submit" className="adminBtnAdd">
                  ADD
                </button>
              </Modal.Footer>
            </div>
          </form>

        </Box>
      </Dialog >
    </div >

  );
};

export default AddNewAdmin;
