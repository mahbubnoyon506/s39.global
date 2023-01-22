import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

import './Admins.css';
import AddNewAdmin from './AddNewAdmin';
import swal from 'sweetalert';
import axios from 'axios';
import { Tooltip } from '@mui/material';
import Pagination from '../../../components/Pagination/Pagination';


const Admins = ({ currentItems }) => {
  const [open, setOpen] = useState(false);
  const [allAdmin, setAllAdmin] = useState([]);
  const [modalShowNewAdmin, setModalShowNewAdmin] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
          .delete(`https://testnetback.s39global.com/api/v1/admin/${id}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("adminS39Global")}`,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              // alert(res.data.message);
              swal({
                // title: "Success",
                text: res.data.message,
                icon: "success",
                button: "OK!",
                className: "modal_class_success",
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

  // pagination code
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allAdmin.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(allAdmin.length / recordsPerPage)

  return (
    <div className='adminBody'>
      <h5 className="dashboard-title">Admins</h5>
      <div className='adminCard py-2'>
        <div className="d-flex justify-content-center justify-content-lg-end me-md-4">
          <button onClick={() => setModalShowNewAdmin(true)} className='adminBtn px-4'>NEW ADMIN</button>
        </div>
        <div className="tableNormal ">

          <Table className='text-white adminDataTable '>
            <thead>
              <tr>
                <th className='text-center'>Image</th>
                <th className='text-start'>Name</th>
                <th className='text-start adminHidden'>Email</th>
                <th className='text-start adminHidden'>Mobile</th>
                <th className='text-start'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords?.map((admin) => (
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
                        src="https://testnetback.s39global.com/assets/1660396587217.jpeg"
                        alt="profilePic"
                      />
                    )}
                  </td>

                  <td className="text-start">{admin?.name || 'adminName'}</td>
                  <td className="text-start adminHidden">{admin?.email}</td>
                  <td className="text-start adminHidden">{admin?.phone || "Mobile"}</td>

                  <td className='action'>
                    <div className="actionDiv text-start d-flex justify-content-center align-items-center">
                      <Link to={`/admin/updateadmin/${admin._id}`}> <Tooltip title="View User Details" placement="top"><button className="editBtn"><FaEdit /></button></Tooltip></Link>
                      <Tooltip title="Delete User" placement="top"><button onClick={() => handleAdminDelete(admin._id)} className="deleteBtn"><FaTrashAlt /></button></Tooltip>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
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