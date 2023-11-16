import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import TemplateIcon from "../assets/template.png";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const TempleteData = [
  { 
    id:'t1',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: TemplateIcon, 
    bg:'', 
    title:'Templete 1',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'t2',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: TemplateIcon, 
    bg:'', 
    title:'Templete 2',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'t3',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: TemplateIcon, 
    bg:'', 
    title:'Templete 3',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'t4',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: TemplateIcon, 
    bg:'', 
    title:'Templete 4',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'t5',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: TemplateIcon, 
    bg:'', 
    title:'Templete 5',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    id:'t6',
    width: 100, 
    height: 100, 
    x: 10, 
    y: 10, 
    icon: TemplateIcon, 
    bg:'', 
    title:'Templete 6',
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
    const dataLS = [...TempleteData]
    if(dataLS){
      setCharts(dataLS)
    }
  }, [])

  useEffect(() => {
    const layoutDataListLS = localStore.load('layoutData') || []
    if(layoutId && layoutDataListLS.length > 0){
      const updatedLayoutData = {
          ...layoutDataListLS[layoutId],
          templetes: chartList,
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
          <div className="row g-4 mt-3">
              <div className="col-lg-12">
                <h3>Select Your Templetes</h3>
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
                  <Link to={`/step/${layoutId}/charts`} className='btn btn-primary mt-3'>Prev</Link>
              </div>
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/cloud`} className='btn btn-primary mt-3'>Next</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepPage;