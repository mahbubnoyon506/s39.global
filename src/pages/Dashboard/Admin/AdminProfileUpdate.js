import axios from "axios";
import { useEffect, useState } from "react";
import { BiLockOpen } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { MdAccountCircle, MdOutlineAlternateEmail } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./AdminProfileUpdate.css";
import swal from "sweetalert";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";

const AdminProfileUpdate = () => {
  const { id } = useParams();
  const [onLoading, setonLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(id.id);

  const [valueProfilePhn, setValueProfilePhn] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [visibleCPassword, setVisibleCPassword] = useState(false);
  const [visibleEnPassword, setVisibleEnPassword] = useState(false);
  const [visibleCnPassword, setVisibleCnPassword] = useState(false);
  const [singleAdmin, setSingleAdmin] = useState({});
  const [currentPasswordPro, setCurrentPasswordPro] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  // console.log(singleAdmin)
  useEffect(() => {
    if (id) {
      axios
        .get(`https://testnetback.s39global.com/api/v1/admin/${id}`)
        .then((res) => {
          setSingleAdmin(res.data.admin);
          setEmail(res.data.admin.email);
          setUserName(res.data.admin.username);
          setValueProfilePhn(res.data.admin.phone);
          setCurrentPasswordPro(res.data.admin.password);
          setImage(res.data.admin.avatar);
        });
    }
  }, [id]);

  // if (onLoading) {
  //     return <Loader />
  // }

  const subProfile = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = valueProfilePhn;
    const currentPassword = event.target.currentPassword.value;
    const password = event.target.password.value;
    const cPassword = event.target.cPassword.value;
    const avatar = event.target.avatar.files[0];

    const formDataSingleAdmin = new FormData();
    formDataSingleAdmin.append("name", name);
    formDataSingleAdmin.append("username", userName);
    formDataSingleAdmin.append("email", email);
    formDataSingleAdmin.append("phone", phone);
    formDataSingleAdmin.append("password", password);
    // formDataSingleAdmin.append('newPassword', newPassword)
    // formDataSingleAdmin.append('cPassword', cPassword)
    formDataSingleAdmin.append("image", avatar);
    console.log(...formDataSingleAdmin);
    setonLoading(true);

    if (password === cPassword) {
      await axios
        .put(
          `https://testnetback.s39global.com/api/v1/admin/update/${id}`,
          formDataSingleAdmin,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("adminS39Global")}`,
            },
          }
        )
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            // alert(res.data.message);
            swal({
              // title: "Success",
              text: res.data.message,
              icon: "success",
              button: "OK!",
              className: "modal_class_success",
            });
            setonLoading(false);
            setSingleAdmin(res.data.admin);
            navigate("/admin/admins");
          }
        })
        .catch((error) => {
          // alert(error.response.data.message);
          swal({
            title: "Attention",
            text: `${error.response.data.message}`,
            icon: "warning",
            button: "OK!",
            className: "modal_class_success",
          });
          setonLoading(false);
        });
    } else {
      swal({
        title: "Attention",
        text: "Password does not matched",
        icon: "warning",
        button: "OK!",
        className: "modal_class_success",
      });
    }
  };
  return (
    <>
      <div className=" ">
        <h5
          className="dashboard-title"
        >
          Update Profile
        </h5>
        <form onSubmit={subProfile}>
          <div className="profileDiv">
            <div className="row mx-auto gx-5">
              <div className="col-lg-7 p-2">
                <p className="d-flex col-12 inputProfile">
                  <span className="iconCreator">
                    <MdAccountCircle className="text-light" />
                  </span>
                  <input
                    className="creatorsInput form-control"
                    type="text"
                    name="name"
                    placeholder="Admin Name"
                    defaultValue={singleAdmin?.name}
                  />
                </p>
                <p className="d-flex col-12 inputProfile">
                  <span className="iconCreator text-white">
                    <MdOutlineAlternateEmail className="text-light" />
                  </span>
                  <input
                    className="creatorsInput form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userName}
                  />
                </p>
                <p className="d-flex col-12 inputProfile">
                  <span className="iconCreator">
                    <GrMail className="text-light" />
                  </span>
                  <input
                    className="creatorsInput form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value.toLocaleLowerCase())
                    }
                  />
                </p>
                <p className="d-flex col-12 inputProfile">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="SG"
                    value={valueProfilePhn}
                    onChange={setValueProfilePhn}
                    className="countryInput input_phone form-control"
                  />
                </p>
                <p className="d-flex col-12 inputProfile">
                  <span className="inputWpass">
                    <span className="iconCreator">
                      <BiLockOpen className="text-light" />
                    </span>
                    <input
                      className="creatorsInput1 password_input form-control"
                      type={visibleCPassword ? "text" : "password"}
                      name="currentPassword"
                      placeholder="Current Password"
                    />
                    <button
                      type="button"
                      onClick={() => setVisibleCPassword(!visibleCPassword)}
                      className="iconBoxBtn password_togoler text-center text-white"
                    >
                      <AiFillEyeInvisible />
                    </button>
                  </span>
                </p>
                <p className="d-flex col-12 inputProfile">
                  <span className="inputWpass">
                    <span className="iconCreator">
                      <BiLockOpen className="text-light" />
                    </span>
                    <input
                      className="creatorsInput1 password_input form-control"
                      type={visibleEnPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter New Password"
                    />
                    <button
                      type="button"
                      onClick={() => setVisibleEnPassword(!visibleEnPassword)}
                      className="iconBoxBtn password_togoler text-center text-white"
                    >
                      <AiFillEyeInvisible />
                    </button>
                  </span>
                </p>
                <p className="d-flex col-12 inputProfile">
                  <span className="inputWpass">
                    <span className="iconCreator">
                      <BiLockOpen className="text-light" />
                    </span>
                    <input
                      className="creatorsInput1 password_input form-control"
                      type={visibleCnPassword ? "text" : "password"}
                      name="cPassword"
                      placeholder="Confirm New Password"
                    />
                    <button
                      type="button"
                      onClick={() => setVisibleCnPassword(!visibleCnPassword)}
                      className="password_togoler iconBoxBtn text-white text-center"
                    >
                      <AiFillEyeInvisible />
                    </button>
                  </span>
                </p>
              </div>
              <div className="col-lg-5 text-center">
                {/* <BsPersonCircle size={40} color='#fff' /> */}
                {imagePreview ?
                  <img className='ProfileImg' src={URL.createObjectURL(imagePreview)} alt="avatar" />
                  :
                  <img className='ProfileImg' src={image} alt="avatar" />
                }
                <br />
                <input
                  onChange={(e) => setImagePreview(e.target.files[0])}
                  type="file"
                  className="ImageInput form-control"
                  name="avatar"
                />
              </div>
            </div>

            <div className=" d-md-flexd text-center">
              <Link to="/admin/dashboard">
                <button className="profileBtnChange bg-danger me-3 text-white text-uppercase">
                  Cancel
                </button>
              </Link>
              <button
                className="profileBtnChange text-white text-uppercase"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

    </>
  );
};

export default AdminProfileUpdate;
