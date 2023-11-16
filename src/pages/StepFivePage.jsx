import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import AlertIcon from "../assets/alert.png";
import MailIcon from "../assets/mail.png";
import NotificationIcon from "../assets/notification.png";
import SmsIcon from "../assets/sms.png";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const UserData = [
  { 
    id:'u1',
    title:'Virat',
    type:'admin'
  },
  { 
    id:'u2',
    title:'Saini',
    type:'super_admin'
  },
  { 
    id:'u3',
    title:'Rohit',
    type:''
  },
  { 
    id:'u4',
    title:'Harsha',
    type:''
  },
  { 
    id:'u5',
    title:'Shiv',
    type:''
  }
]

const StepPage = () => {
  const [charts, setCharts] = useState([])
  const [chartList, setChartList] = useState([])
  const [layoutData, setLayoutData] = useState({})
  const params = useParams();
  const { layoutId } = params;

  useEffect(() => {
    const dataLS = [...UserData]
    if(dataLS){
      setCharts(dataLS)
    }
  }, [])

  useEffect(() => {
    const layoutDataListLS = localStore.load('layoutData') || []
    if(layoutId && layoutDataListLS.length > 0){
      const updatedLayoutData = {
          ...layoutDataListLS[layoutId],
          users: charts,
      };
      const updatedLayoutDataListLS = [...layoutDataListLS];
      updatedLayoutDataListLS[layoutId] = updatedLayoutData;
      localStore.add('layoutData', updatedLayoutDataListLS)
      setLayoutData(updatedLayoutData)
    } 
  }, [charts])

  const handleChangeValue = (value, index) => {
      const updatedValue = [...charts]
      updatedValue[index].type = value
      setCharts(updatedValue)
  }
  return (
    <>
      <section>
        <div className="container-fluid">  
          <div className="row g-4 mt-3">
              <div className="col-lg-12">
                <h3>Select Your Users</h3>
              </div>
              <form action="">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col" className='text-center'>Super Admin</th>
                        <th scope="col" className='text-center'>Admin</th>
                        <th scope="col" className='text-center'>Manager</th>
                        <th scope="col" className='text-center'>User</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        charts?.map((row, i) => {
                            return (
                              <tr>
                                <th scope="row">{i+1}</th>
                                <td>{row?.title}</td>
                                <td className='text-center'>
                                  <input class="form-check-input" type="radio" value={'super_admin'} checked={row?.type == 'super_admin'} name={`type${row?.id}`} id={row?.id} onChange={(e) => handleChangeValue(e.target.value, i)} /> 
                                </td>
                                <td className='text-center'>
                                  <input class="form-check-input" type="radio" value={'admin'} checked={row?.type == 'admin'} name={`type${row?.id}`} id={row?.id} onChange={(e) => handleChangeValue(e.target.value, i)} /> 
                                </td>
                                <td className='text-center'>
                                  <input class="form-check-input" type="radio" value={'manager'} checked={row?.type == 'manager'} name={`type${row?.id}`} id={row?.id} onChange={(e) => handleChangeValue(e.target.value, i)} /> 
                                </td>
                                <td className='text-center'>
                                  <input class="form-check-input" type="radio" value={'user'} checked={row?.type == 'user'} name={`type${row?.id}`} id={row?.id} onChange={(e) => handleChangeValue(e.target.value, i)} /> 
                                </td>
                              </tr>
                            )
                        })
                      }                      
                    </tbody>
                  </table>
              </form>
          </div>
          <div className="row">
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/alerts`} className='btn btn-primary mt-3'>Prev</Link>
              </div>
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/diagram`} className='btn btn-primary mt-3'>Next</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepPage;