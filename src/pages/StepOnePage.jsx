import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import SaasIcon from "../assets/saas.png";
import NoCodeIcon from "../assets/no-code.png";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const chartData = [
  { 
    id:'c1',
    icon: SaasIcon, 
    title:'chart 1',
  },
  { 
    id:'c2',
    icon: NoCodeIcon, 
    title:'chart 2',
  },
  { 
    id:'c3',
    icon: SaasIcon,
    title:'chart 3',
  },
  { 
    id:'c4',
    icon: NoCodeIcon, 
    title:'chart 4',
  },
  { 
    id:'c5',
    icon: SaasIcon, 
    title:'chart 5',
  },
  { 
    id:'c6',
    icon: NoCodeIcon, 
    title:'chart 6',
  },
]

const StepPage = () => {
  const [charts, setCharts] = useState([])
  const [chartList, setChartList] = useState([])
  const params = useParams();
  const { layoutId } = params;

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
          <div className="row g-2">
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
                  <Link to={`/boyd`} className='btn btn-primary mt-3'>Prev</Link>
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