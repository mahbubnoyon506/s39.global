import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEye, FaSearch, FaTrash } from "react-icons/fa";

// const FilterableTable = require("react-filterable-table");

const User = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  const navigate = useNavigate();

  const fetchAllCustomers = () => {
    fetch(`https://backend.dslcommerce.com/api/users/all`)
      .then(res => res.json())
      .then(data => setAllCustomers(data))
  }
  useEffect(() => {
    fetchAllCustomers()
  }, []);


  //****************************** Pagination Start ******************************/
  const { customerPerPage } = useParams();
  const [getPage, setPage] = useState(1);
  const [show, setShow] = useState(10);
  const [lastPage, setLastPage] = useState(0);
  const [sliceCustomers, setSliceCustomers] = useState([]);

  useEffect(() => {
    const lastPage = Math.ceil(allCustomers?.length / show);
    setLastPage(lastPage);
  }, [allCustomers, show]);

  useEffect(() => {
    if (customerPerPage) {
      const page = parseInt(customerPerPage);
      const getSlicingCategory = allCustomers.slice(
        (page - 1) * show,
        page * show
      );
      console.log("getSlicingCategory");
      console.log(getSlicingCategory);
      setSliceCustomers([...getSlicingCategory]);
      setPage(parseInt(page));
    } else {
      const getSlicingProduct = allCustomers.slice(0, show);
      setSliceCustomers([...getSlicingProduct]);
    }
  }, [allCustomers, show, customerPerPage]);

  return (
    <>
      <h5 className="dashboard-title">CUSTOMERS</h5>

      {/* <Search handleSearch={handleSearch} /> */}
      <div>
        <input className="w-100 py-2 rounded ps-3 border-0" type="search" name="" id="" placeholder="Search..."/>
      </div>

      <div className="productCard py-2">
        <div className="tableNormal ">
          <Table responsive="sm" className="text-white productDataTable ">
            <thead>
              <tr>
                {/* <th className="text-left d-md-block d-none">USER ID</th> */}
                <th className="text-left productHidden">USER ID</th>
                <th className="text-left productHidden">WALLET ADDRESS</th>
                <th className="text-left ">EMAIL</th>
                <th className="text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {sliceCustomers?.map((sliceCustomer) => (
                <tr className="tableRow" key={sliceCustomer?.USER_ID}>
                  <td className="text-left text-capitalize productHidden">
                    {sliceCustomer?.myReferralCode ? (
                      <div>{sliceCustomer?.myReferralCode}</div>
                    ) : (
                      <div>User id</div>
                    )}
                  </td>
                  <td className="text-left productHidden">
                    {sliceCustomer?.walletAddress ? (
                      <div>{sliceCustomer?.walletAddress}</div>
                    ) : (
                      <div>WalletAddress</div>
                    )}
                  </td>
                  <td className="text-left  ">
                    {sliceCustomer?.email ? (
                      <div>{sliceCustomer?.email}</div>
                    ) : (
                      <div>Email Address</div>
                    )}
                  </td>
                  <td className="action col-sm-12 d-flex">
                    <div className="actionDiv text-left">
                      <Link to='/admin/users-update'
                        className="viewBtn"
                      >
                        <FaEye color="#40C689" size={25}/>
                      </Link>
                      <button
                        className="deleteBtn"
                      >
                        <FaTrash color="#fff" size={20}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default User;
