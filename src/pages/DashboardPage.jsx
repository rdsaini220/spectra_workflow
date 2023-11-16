import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import WorkFlowRND from '../components/WorkFlowRND';
import localStore from '../untils/localStore';

import SaasIcon from "../assets/saas.png";
import NoCodeIcon from "../assets/no-code.png";
import SerivcesIcon from "../assets/serivces.png";
import checkboxIcon from "../assets/icons/squareCheck.svg";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import smsIcon from "../assets/icons/sms.svg";
import emailIcon from "../assets/icons/email.svg";
import phoneIcon from "../assets/icons/phone.svg";
import erpIcon from "../assets/icons/erp.svg";
import addIcon from "../assets/icons/add.svg";
import editIcon from "../assets/icons/edit.svg";
import removeIcon from "../assets/icons/remove.svg";
import clearIcon from "../assets/icons/clear.svg";
import preViewIcon from "../assets/icons/preView.svg";
import roundedIcon from "../assets/icons/rounded.svg";
import circleIcon from "../assets/icons/circle.svg";
import squareIcon from "../assets/icons/square.svg";

import "../styles/workflowPage.css";



const DashboardPage = () => {
  return (
    <>
      <main>
        <div class="container-fluid px-0">
            <header className='col-12'>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{background:'#1e223d'}}>
                  <div class="container-fluid">
                    <a href="/" class="navbar-brand">
                        <span class="fs-5 fw-bold">Spectra</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <form class="d-flex ms-auto">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                    </div>
                  </div>
              </nav>
            </header>
            <div class="row gx-0 flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-0 px-0 bg-dark" style={{background:'#1e223d'}}>
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-lg-3 pt-2 text-white" style={{ height: 'calc(100vh - 56px)' }}>                      
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0">
                                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline text-white">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-white">Customers</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-white">Setup</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-white">Iam</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-white">Usage</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-white">Account Management</span></a>
                            </li>
                        </ul>
                        <hr/>
                        <div class="pb-4">
                            <a href="" class="d-flex align-items-center text-white text-decoration-none">
                                <span class="d-none d-sm-inline mx-1">Sign out</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col p-3' >                
                  <div className="row">
                    <div className="col-3">
                      
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default DashboardPage;