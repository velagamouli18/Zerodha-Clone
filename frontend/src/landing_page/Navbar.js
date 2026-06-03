import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{backgroundColor:"#FFF"}} class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container p-2">
            <Link class="navbar-brand" to="/">
                <img style={{width:"25%"}} src='media/images/logo.svg' alt="logo"/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
                <ul class="navbar-nav mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                    </li>
                    <li class="nav-item">
                    <a
                      class="nav-link active"
                      href={process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"}
                    >
                      Console
                    </a>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
                    </li>
                </ul>
            </form>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;