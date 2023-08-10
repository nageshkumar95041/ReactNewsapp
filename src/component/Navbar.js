import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">MY-News</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/business">Business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/technology">Technology</Link>
        </li>
     
      
      </ul>
      
     <ul class="navbar-nav mb-2 mb-lg-0">

        <li class="nav-item flex-end">
          <Link class="nav-link" to="/signup">Signup</Link>
        </li>
        <li class="nav-item flex-end">
          <Link class="nav-link" to="/Login">Login</Link>
        </li>
     </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar