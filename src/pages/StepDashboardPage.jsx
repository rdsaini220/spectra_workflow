import React, { useEffect, useState } from 'react'
import { useLocation, Link, useParams } from 'react-router-dom';
import localStore from '../untils/localStore';


import "../styles/workflowPage.css";

const StepDashboardPage = () => {
    const [layout, setLayout] = useState(null);
    const params = useParams();
    const { layoutId } = params;
    const location = useLocation()
    const pathName = location?.pathname

    useEffect(() => {
        const layoutDataListLS = localStore.load('layoutData') || []
        if(layoutId){
            const filterd = layoutDataListLS[layoutId]
            setLayout(filterd)
        } 
    }, [])
  return (
    <>
      <main>
      <div className="container-fluid px-0">
            <header className='col-12'>
              <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#1e223d'}}>
                  <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <span className="fs-5 fw-bold">Spectra</span>
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
                <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0" style={{background:'#1e223d'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-lg-3 pt-2 text-white" style={{ height: 'calc(100vh - 56px)' }}>                      
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white px-2">Dashboard</span>
                                </Link>
                            </li>                                                    
                            <li >
                                <Link to="#" className={`nav-link px-0 align-middle`}>
                                    <i className="fs-4 bi-house"></i> <span className="ms-2 d-none d-sm-inline text-white px-2">Customer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-white px-2">Setup</span>
                                </Link>
                            </li>  
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-white px-2">Iam</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-white px-2">Usage</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`nav-link px-0 align-middle`}>
                                    <i className="fs-4 bi-table"></i> <span className="ms-2 d-none d-sm-inline text-white px-2">Account Management</span>
                                </Link>
                            </li>
                        </ul>
                        <hr/>
                        <div className="pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none">
                                <span className="d-none d-sm-inline mx-1">Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col p-3' >    
                    
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default StepDashboardPage;