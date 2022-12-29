import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Admins.css';
import AddNewAdmin from './AddNewAdmin';


const Admins = () => {
  const [modalShowNewAdmin, setModalShowNewAdmin] = useState(false);

  const handleAdminDelete = () => {

  }

  const allAdmin = [
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1}
  ]

  return (
    <div className='adminBody'>
      <h5 className="dashboard-title">Admins</h5>
      <div className='adminCard py-2'>
        <div className="adminBtnDiv text-end">
          <button onClick={() => setModalShowNewAdmin(true)} className='adminBtn'>NEW ADMIN</button>
        </div>
        <div className="tableNormal ">

          <Table className='text-white adminDataTable '>


            <thead>
              <tr>
                <th className='text-center'>Image</th>
                <th className='text-start'>Username</th>
                <th className='text-start adminHidden'>Email</th>
                <th className='text-start adminHidden'>Mobile</th>
                <th className='text-start'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allAdmin?.map(admin => (
                  <tr className='tableRow' key={admin._id}>
                    <td align='center'>
                      <BsPersonCircle/>
                    </td>

                    <td style={{ textTransform: 'lowercase' }} className='text-start'>username</td>
                    <td className='text-start adminHidden'>admin@gmail.com</td>
                    <td className='text-start adminHidden'>+8801682021411</td>
                    <td className='action'>
                      <div className="actionDiv text-start">
                        <Link to='/dashboard/updateadmin'><button className="editBtn"><FaEdit/></button></Link>
                        <button onClick={() => handleAdminDelete(admin._id)} className="deleteBtn"><FaTrashAlt/></button>
                      </div>
                    </td>
                  </tr>
                ))
              }


            </tbody>
          </Table>
        </div>
        {/* <AdminPopUp
          open={open}
          handleClose={handleClose}
        >
        </AdminPopUp>

        <DeletePopUp
          handleCloseDelete={handleCloseDelete}
          openDelete={openDelete}
        >

        </DeletePopUp> */}

        <AddNewAdmin
          show={modalShowNewAdmin}
          // setIsLoadingAdmin={setIsLoadingAdmin}
          // isLoadingAdmin={isLoadingAdmin}
          // refetch={refetch}
          // setRefetch={setRefetch}
          setModalShowNewAdmin={setModalShowNewAdmin}
          onHide={() => setModalShowNewAdmin(false)}
        // allAdmin={allAdmin}
        // setAllAdmin={setAllAdmin}
        />
      </div>
    </div>
  );
};

export default Admins;