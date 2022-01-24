import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="">{props.SiteName}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About">{props.About}</Link>
             
              </li>

            </ul>
            {/* <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.togglemode1} type="checkbox" role="switch" id="green-btn-triger" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode !== 'green' ? 'Enable' : 'Disable'} green mode</label>
            </div> */}
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="dark-btn-triger" />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode !== 'dark' ? 'Enable' : 'Disable'} Dark mode</label>
            </div>

          </div>
      </div>
    </nav>
  </div>;
}


Navbar.propTypes = {
  SiteName: propTypes.string.isRequired,
  About: propTypes.string.isRequired
}

Navbar.defaultProps = {
  SiteName: 'default title',
  About: 'default About'
}