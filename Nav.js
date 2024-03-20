import React from 'react'
import 'bootstrap/js/dist/dropdown'
function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <i className="navbar-brand bi bi-justify-left fs-4"></i>
        <button className="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-itemdropdown">
                    <a className="nav-link dropdown-toggle" href="a" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Youself
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Setting</a>
                        <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
