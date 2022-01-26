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

          <div className="d-flex flex-wrap ">
            <div className="rounded bg-light mx-1 my-1 border border-primary" onClick={() => { props.togglemode2('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="rounded bg-dark mx-1 my-1 border border-primary" onClick={() => { props.togglemode2('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="rounded bg-primary mx-1 my-1 border border-primary" onClick={() => { props.togglemode2('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="rounded bg-success mx-1 my-1 border border-primary" onClick={() => { props.togglemode2('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="rounded bg-danger mx-1 my-1 border border-primary" onClick={() => { props.togglemode2('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="rounded bg-warning mx-1 my-1 border border-primary" onClick={() => { props.togglemode2('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
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