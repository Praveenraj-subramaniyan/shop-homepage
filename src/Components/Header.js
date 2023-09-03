import React from 'react'

function Header() {
  return (
    <header >
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button className="StartBootstrap ">Start shopping</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    All Products
                  </a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex fullcart">
            <a className="nav-link " href="">
              <button class="btn btn-outline-dark" type="">
                <i class="fas fa-shopping-cart"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </a>
          </form>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
