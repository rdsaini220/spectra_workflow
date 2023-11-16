import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import SaasIcon from "../assets/saas.png";
import NoCodeIcon from "../assets/no-code.png";
import BotIcon from "../assets/bot.png";
import StaffIcon from "../assets/staff.png";
import TempIcon from "../assets/temp.png";
import ServiceIcon from "../assets/serivces.png";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const chartData = [
  { 
    id:'c1',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: SaasIcon, 
    bg:'', 
    title:'chart 1',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'c2',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: NoCodeIcon, 
    bg:'', 
    title:'chart 2',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'c3',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: SaasIcon, 
    bg:'', 
    title:'chart 3',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'c4',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: NoCodeIcon, 
    bg:'', 
    title:'chart 4',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'c5',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: SaasIcon, 
    bg:'', 
    title:'chart 5',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'c6',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: NoCodeIcon, 
    bg:'', 
    title:'chart 6',
    // cardType:'rounded',
    isedit:true,
  },
]

const StepPage = () => {
  const [charts, setCharts] = useState([])
  const [chartList, setChartList] = useState([])
  const [layoutData, setLayoutData] = useState({})
  const params = useParams();
  const { layoutId } = params;
  console.log(layoutId, 'params')

  useEffect(() => {
    const dataLS = [...chartData]
    if(dataLS){
      setCharts(dataLS)
    }
  }, [])

  useEffect(() => {
    const layoutDataListLS = localStore.load('layoutData') || []
    if(layoutId && layoutDataListLS.length > 0){
      const updatedLayoutData = {
          ...layoutDataListLS[layoutId],
          charts: chartList,
      };
      const updatedLayoutDataListLS = [...layoutDataListLS];
      updatedLayoutDataListLS[layoutId] = updatedLayoutData;
      localStore.add('layoutData', updatedLayoutDataListLS)
      setLayoutData(updatedLayoutData)
    } 
  }, [chartList])

  const isSelected = (ID) => chartList?.some(item => item.id === ID);

  const addNewCard = (item) => {
    if(isSelected(item.id)){
      const filteredData = () => chartList?.filter(row => row?.id !== item.id);
      setChartList(filteredData)
    }else{
      setChartList([...chartList, item])
    }
  }
  
  return (
    <>
      <section>
        <div className="container-fluid">  
          <div className="row g-2 mt-3">
              <div className="col-lg-12">
                <h3>Select Your Charts</h3>
              </div>
              {
                charts?.map((item, i) => {
                  return (
                    <div className={`col-lg-1`} key={item?.id} onClick={() => addNewCard(item)}>
                      <div className={`preCard text-center ${isSelected(item.id) ? 'selected' : '' }`}>
                          <div className='border d-flex justify-content-center' >
                            <img className='img-gluid' style={{ width:'85px'}} src={item?.icon} alt="" />
                          </div>
                          <p style={{fontSize:'12px', textTransform:'capitalize', marginTop:'4px', marginBottom:'4px'}}>{item?.title}</p>
                      </div>
                    </div>
                  )
                })
              }
          </div>
          <div className="row">
              <div className="col-lg-6">
                  <Link to={`/`} className='btn btn-primary mt-3'>Prev</Link>
              </div>
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/templete`} className='btn btn-primary mt-3'>Next</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepPage;