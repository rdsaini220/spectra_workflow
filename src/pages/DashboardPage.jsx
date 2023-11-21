import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';

import "../styles/workflowPage.css";

const DashboardPage = ({ children }) => {
    const location = useLocation()
    const pathName = location?.pathname
  return (
    <>
      <main>
        <div className="container-fluid px-0">
            <header className='col-12'>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{background:'#1e223d'}}>
                  <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <span className="fs-5 fw-bold">Spectra WorkFlow</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <form className="d-flex ms-auto">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                    </div>
                  </div>
              </nav>
            </header>
            <div className="row gx-0 flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0 bg-dark" style={{background:'#1e223d'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-lg-3 pt-2 text-white" style={{ height: 'calc(100vh - 56px)' }}>                      
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link px-0 align-middle ${pathName === '/' ? 'active': null }`}>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Layout</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle ${pathName === '/body' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Body</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/itinerary" className={`nav-link px-0 align-middle ${pathName === '/itinerary' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Itinerary</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle ${pathName === '/recipe' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Recipe</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/workflow" className={`nav-link px-0 align-middle ${pathName === '/workflow' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Workflow</span>
                                </Link>
                            </li>
                        </ul>
                        <hr/>
                        <div className="pb-4">
                            <a href="" className="d-flex align-items-center text-white text-decoration-none">
                                <span className="d-none d-sm-inline mx-1">SPECTRA</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col p-3' >    
                    {children}
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default DashboardPage;