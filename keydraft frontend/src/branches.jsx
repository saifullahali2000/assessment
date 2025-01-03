import React, { useState,useEffect } from "react";
import './branches.css';
import {Link} from "react-router-dom";
import axios from 'axios';
function Branches(){
  const[branches,setBranches]=useState([])

  useEffect(()=>{
axios.get('http://localhost:3001')
.then(result=>setBranches(result.data))
.catch(err=>console.log(err))
  })

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res=>console.log(res))
  window.location.reload()
    .catch(err=>console.log(err))
  }
    return(

        <div class="container">
          <div class="row">
            <div class="col-12">
            <div class="container">
        <Link to="/create" className="btn btn-success">Add</Link>
          <table class="rwd-table">
            <tbody>
            <tr>
          <th scope="col">Branch Name</th>
          <th scope="col">Branch Code</th>
          <th scope="col">Branch Short Name</th>
          <th>Locality</th>
          <th>City</th>
          <th>State</th>
          <th>Contact Person</th>
          <th>Contact Person Phone</th>
          <th>Pan</th>
          <th>GSTTN</th>

        <th>Action</th>
          </tr>
            
            {
              branches.map((branch)=>{
        return <tr>
          <td>{branch.Branchname}</td>
          <td>{branch.BranchCode}</td>
          <td>{branch.BranchShortName}</td>
          <td>{branch.Locality}</td>
          <td>{branch.City}</td>

        <td>{branch.State}</td>
        <td>{branch.ContactPerson}</td>
        <td>{branch.ContactPersonPhone}</td>
        <td>{branch.Pan}</td>
        <td>{branch.GSTIN}</td>
        



        </tr>
              })
            }
            
            
            </tbody>
          </table>
        </div>
            </div>
          </div>
        </div>

    )
}

export default Branches