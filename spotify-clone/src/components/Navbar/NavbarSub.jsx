import React from 'react'

const NavbarSub = () => {
  return (
    <div className="col-3" id="dropdown-col">
        <div className="dropdown dropdown-nav">
            <a
                className="btn btn-secondary dropdown-toggle d-flex"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="-19.5,9"
            >
                <i className="fa-solid fa-circle-user"></i>
                <span className="text-truncate">9ropdown link fhgff</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                <a className="dropdown-item" href="./assets/fonts">
                    Account
                    <i className="fa-solid fa-arrow-up-right-from-square float-end position-relative top-50"></i>
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Profile
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Support
                    <i className="fa-solid fa-arrow-up-right-from-square float-end position-relative top-50"></i>
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Download
                    <i className="fa-solid fa-arrow-up-right-from-square float-end position-relative top-50"></i>
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Settings
                </a>
                </li>
                <li>
                <hr className="dropdown-divider p-0 m-0" />
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Log out
                </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarSub