import { useState } from 'react'

import './App.css'

import{BrowserRouter,Routes,Route}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Branches from './branches'
import CreateBranches from './createbranches'
import UpdateBranches from './branchesupdate'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Branches/>}></Route>
            <Route path="/create" element={<CreateBranches/>}></Route>
            <Route path="/update/:id" element={<UpdateBranches/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App