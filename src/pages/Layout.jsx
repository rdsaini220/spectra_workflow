import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import localStore from '../untils/localStore';


import "../styles/workflowPage.css";

const DashboardPage = ({ children }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation()
    const pathName = location?.pathname
  return (
    <>
      <main>
        <div className="container-fluid px-0">           
            <div className="row gx-0 flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0" style={{background:'#fafafa'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-lg-3 pt-2 text-dark" style={{ height: 'calc(100vh)' }}>                      
                        <ul className="nav nav-pills navbar-light flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item pb-4 pt-3">
                                <Link to="/" className={`navbar-brand`}>
                                    <span className="fs-5 fw-bold">Spectra WorkFlow</span>  
                                </Link>
                            </li>
                            <li>
                                <Link to="/boyd" className={`nav-link px-0 align-middle ${pathName === '/boyd' ? 'active-link': null }`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-dark px-2">BOYD</span>
                                </Link>
                            </li>                           
                            <li>
                                <a href="#" data-bs-toggle="collapse" class="nav-link dropdown-toggle text-dark px-0 align-middle " onClick={() => setOpen(!open)}>
                                    <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline text-dark px-2">Templete Setting</span> 
                                </a>
                                <ul className={`collapse nav flex-column ms-1 ${open ? 'show' : ''}`} data-bs-parent="#menu">
                                    <li >
                                        <Link to="/" className={`dropdown-item nav-link px-0 align-middle ${pathName === '/' ? 'active-link': null }`}>
                                            <i className="fs-4 bi-house"></i> <span className="ms-2 d-none d-sm-inline text-dark px-2">Layout</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workflow" className={`dropdown-item nav-link px-0 align-middle ${pathName === '/workflow' ? 'active-link': null }`}>
                                            <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-dark px-2">Workflow</span>
                                        </Link>
                                    </li>  
                                    <li>
                                        <Link to="/itinerary" className={`dropdown-item nav-link px-0 align-middle ${pathName === '/itinerary' ? 'active-link': null }`}>
                                            <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-dark px-2">Itinerary</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/recipe" className={`dropdown-item nav-link px-0 align-middle ${pathName === '/recipe' ? 'active-link': null }`}>
                                            <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-dark px-2">Recipe</span>
                                        </Link>
                                    </li>
                                </ul>
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