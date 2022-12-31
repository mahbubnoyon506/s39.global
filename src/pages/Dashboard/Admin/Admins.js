import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Admins.css';
import AddNewAdmin from './AddNewAdmin';
import swal from 'sweetalert';
import axios from 'axios';


const Admins = () => {
  const [open, setOpen] = useState(false);
  const [allAdmin, setAllAdmin] = useState([]);
  const [modalShowNewAdmin, setModalShowNewAdmin] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios.get("https://testnetback.s39global.com/api/v1/admin/").then((res) => {
      setAllAdmin(res.data);
      // console.log(res.data)
    });
  }, [open, refetch]);

  const handleAdminDelete = (id) => {
    swal({
      text: "Are you sure, you want to delete this admin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://testnetback.s39global.com/api/v1/admin/${id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("adminS39Global")}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              // alert(res.data.message);
              swal({
                // title: "Success",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
              setRefetch(!refetch);
              setAllAdmin(allAdmin.filter((admin) => admin._id !== id));
            }
          })
          .catch((error) => {
            // alert(error.response.data.message);
            swal({
              title: "Attention",
              text: error.response.data.message,
              icon: "warning",
              button: "OK!", 
            });
          });
      }
    });
  }

  return (
    <div className='adminBody'>
      <h5 className="dashboard-title">Admins</h5>
      <div className='adminCard py-2'>
        <div className="d-flex justify-content-center justify-content-lg-end text-end me-lg-5">
          <button onClick={() => setModalShowNewAdmin(true)} className='adminBtn'>NEW ADMIN</button>
        </div>
        <div className="tableNormal ">

          <Table className='text-white adminDataTable '>


            <thead>
              <tr>
                <th className='text-center'>Image</th>

                <th className='text-start adminHidden'>Email</th>
                <th className='text-start adminHidden'>Mobile</th>
                <th className='text-start'>Action</th>
              </tr>
            </thead>
            <tbody>
              {allAdmin?.map((admin) => (
                <tr className="tableRow" key={admin._id}>
                  <td align="center">
                    {admin?.avatar ? (
                      <img
                        className="imgAdmin"
                        src={admin?.avatar}
                        alt="profilePic"
                      />
                    ) : (
                      <img
                        className="imgAdmin"
                        src="https://backend.dslcommerce.com/assets/1660396587217.jpeg"
                        alt="profilePic"
                      />
                    )}
                  </td>


                  <td className="text-start adminHidden">{admin.email}</td>
                  <td className="text-start adminHidden">{admin.phone || "Mobile"}</td>


                  <td className='action'>
                    <div className="actionDiv text-start">
                      <Link to={`/admin/updateadmin/${admin._id}`}><button className="editBtn"><FaEdit /></button></Link>
                      <button onClick={() => handleAdminDelete(admin._id)} className="deleteBtn"><FaTrashAlt /></button>
                    </div>
                  </td>
                </tr>
              ))}


            </tbody>
          </Table>
        </div>


        <AddNewAdmin
          refetch={refetch}
          setRefetch={setRefetch}
          show={modalShowNewAdmin}
          setModalShowNewAdmin={setModalShowNewAdmin}
          onHide={() => setModalShowNewAdmin(false)}

        />
      </div>
    </div>
  );
};

export default Admins;