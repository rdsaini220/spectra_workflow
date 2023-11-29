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
            <div className="row gx-0 flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0 bg-dark" style={{background:'#1e223d'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-lg-3 pt-2 text-white" style={{ height: 'calc(100vh)' }}>                      
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item pb-4 pt-3">
                                <Link to="/" className={`navbar-brand`}>
                                    <span className="fs-5 fw-bold">Spectra WorkFlow</span>  
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link px-0 align-middle ${pathName === '/' ? 'active': null }`}>
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Layout</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/boyd" className={`nav-link px-0 align-middle ${pathName === '/boyd' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">BOYD</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/workflow" className={`nav-link px-0 align-middle ${pathName === '/workflow' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Workflow</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/itinerary" className={`nav-link px-0 align-middle ${pathName === '/itinerary' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Itinerary</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/recipe" className={`nav-link px-0 align-middle ${pathName === '/recipe' ? 'active': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Recipe</span>
                                </Link>
                            </li>                           
                        </ul>
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