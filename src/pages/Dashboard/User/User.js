import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { S39GlobalContext } from "../../../contexts/S39GlobalContext";
import DeleteUser from "./DeleteUser";
import { Tooltip } from "@mui/material";

// const FilterableTable = require("react-filterable-table");

const User = () => {
  const { allUsers } = useContext(S39GlobalContext)
  const [getEmail, setGetEmail] = useState()
  const navigate = useNavigate();
  const [openDialog, setOpendialog] = useState(null);

  console.log('Getting all users', allUsers)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const filterUsers = allUsers.filter((item) => item.email === getEmail);
  console.log(filterUsers)
  let content = '';
  if (allUsers.length) {
    content = allUsers.map((user) =>
      <tr className="tableRow" key={user?.USER_ID}>
        <td className="text-left text-capitalize productHidden">
          {user?.myReferralCode ? (
            <div>{user?.myReferralCode}</div>
          ) : (
            <div>User id</div>
          )}
        </td>
        <td className="text-left productHidden">

          {user?.walletAddress ? (
            <div>{user?.walletAddress}</div>
          ) : (
            <div>WalletAddress</div>
          )}
        </td>
        <td className="text-left  ">
          {user?.email ? (
            <div>{user?.email}</div>
          ) : (
            <div>Email Address</div>
          )}
        </td>
        <td className="action">
          <div className="d-flex justify-content-end align-items-center">
            <div className="actionDiv text-left">
              <Tooltip title="View User Details" placement="top">
                <Link to={`/admin/userdetails/${user?._id}`}
                  className="editBtn py-2"
                >
                  <FaEye color="#fff" size={25} />
                </Link>
              </Tooltip>
              <Tooltip title="Delete User" placement="top">
                <button
                  onClick={() => setOpendialog(user)}
                  className="deleteBtn"
                >
                  <FaTrash color="#fff" size={20} />
                </button>
              </Tooltip>
            </div>
          </div>
        </td>
      </tr>
    )
  } else if(filterUsers.length) {
    content = filterUsers.map((user) =>
      <tr className="tableRow" key={user?.USER_ID}>
        <td className="text-left text-capitalize productHidden">
          {user?.myReferralCode ? (
            <div>{user?.myReferralCode}</div>
          ) : (
            <div>User id</div>
          )}
        </td>
        <td className="text-left productHidden">

          {user?.walletAddress ? (
            <div>{user?.walletAddress}</div>
          ) : (
            <div>WalletAddress</div>
          )}
        </td>
        <td className="text-left  ">
          {user?.email ? (
            <div>{user?.email}</div>
          ) : (
            <div>Email Address</div>
          )}
        </td>
        <td className="action">
          <div className="d-flex justify-content-end align-items-center">
            <div className="actionDiv text-left">
              <Tooltip title="View User Details" placement="top">
                <Link to={`/admin/userdetails/${user?._id}`}
                  className="editBtn py-2"
                >
                  <FaEye color="#fff" size={25} />
                </Link>
              </Tooltip>
              <Tooltip title="Delete User" placement="top">
                <button
                  onClick={() => setOpendialog(user)}
                  className="deleteBtn"
                >
                  <FaTrash color="#fff" size={20} />
                </button>
              </Tooltip>
            </div>
          </div>
        </td>
      </tr>
    )
  }


  return (
    <>
      <h5 className="dashboard-title">USERS</h5>

      {/* <Search handleSearch={handleSearch} /> */}
      <div className="mb-5">
        {/* <FaSearch className="" style={{marginRight: '-20px', zIndex: '10'}}/> */}
        <input onChange={e => setGetEmail(e.target.value)} className="w-100 py-2 rounded ps-3 border-0" type="search" name="" id="" placeholder="Search by Email" />
      </div>
      <div className="tableNormal rounded py-3" style={{ background: '#272D47' }}>
        <div className="tableNormal ">
          <Table responsive="sm" className="text-white productDataTable">
            <thead>
              <tr>
                {/* <th className="text-left d-md-block d-none">USER ID</th> */}
                <th className="text-left productHidden">USER ID</th>
                <th className="text-start productHidden">WALLET ADDRESS</th>
                <th className="text-start ">EMAIL</th>
                <th className="text-end">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {/* {!getEmail ? 
                filterUsers: allUsers.map((user) =>
                  <tr className="tableRow" key={user?.USER_ID}>
                    <td className="text-left text-capitalize productHidden">
                      {user?.myReferralCode ? (
                        <div>{user?.myReferralCode}</div>
                      ) : (
                        <div>User id</div>
                      )}
                    </td>
                    <td className="text-left productHidden">

                      {user?.walletAddress ? (
                        <div>{user?.walletAddress}</div>
                      ) : (
                        <div>WalletAddress</div>
                      )}
                    </td>
                    <td className="text-left  ">
                      {user?.email ? (
                        <div>{user?.email}</div>
                      ) : (
                        <div>Email Address</div>
                      )}
                    </td>
                    <td className="action">
                      <div className="d-flex justify-content-end align-items-center">
                        <div className="actionDiv text-left">
                          <Tooltip title="View User Details" placement="top">
                            <Link to={`/admin/userdetails/${user?._id}`}
                              className="editBtn py-2"
                            >
                              <FaEye color="#fff" size={25} />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Delete User" placement="top">
                            <button
                              onClick={() => setOpendialog(user)}
                              className="deleteBtn"
                            >
                              <FaTrash color="#fff" size={20} />
                            </button>
                          </Tooltip>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              } */}
              {content}
            </tbody>
            {
              openDialog &&
              <DeleteUser openDialog={openDialog} setOpendialog={setOpendialog} ></DeleteUser>
            }
          </Table>
        </div>
      </div>
    </>
  );
};

export default User;
