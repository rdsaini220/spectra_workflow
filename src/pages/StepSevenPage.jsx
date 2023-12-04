import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import StripeIcon from "../assets/stripe.png";
import OtherIcon from "../assets/other.png";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const TempleteData = [
  { 
    id:'l1',
    title:'https://api.stripe.com',
  },
  { 
    id:'cs2',
    title:'https://api.spectra.com/',
  },
]

const StepPage = () => {
  const [charts, setCharts] = useState([])
  const [chartList, setChartList] = useState({})
  const [layoutData, setLayoutData] = useState({})
  const params = useParams();
  const { layoutId } = params;
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
          libraries: chartList,
      };
      const updatedLayoutDataListLS = [...layoutDataListLS];
      updatedLayoutDataListLS[layoutId] = updatedLayoutData;
      localStore.add('layoutData', updatedLayoutDataListLS)
      setLayoutData(updatedLayoutData)
    } 
  }, [chartList])

  const addNewCard = (item) => {
    setChartList(item)
  }
  
  return (
    <>
      <section>
        <div className="container-fluid">  
          <div className="row g-4">
              <div className="col-lg-12">
                <h3>Generate API</h3>
              </div>
              {
                charts?.map((item, i) => {
                  return (
                    <div className={`col-lg-3`} key={item?.id} onClick={() => addNewCard(item)}>
                      <div className={`preCard text-center w-100 ${item.id === chartList.id ? 'selected' : '' }`}>
                          <div className='cloud-icon border d-flex justify-content-center' >
                            <p style={{fontSize:'12px', marginTop:'4px', marginBottom:'4px'}}>{item?.title}</p>
                          </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
          <div className="row g-4">
              <div className="col-6 col-lg-3">
                  <Link to={`/step/${layoutId}/diagram`} className='btn btn-primary mt-3'>Prev</Link>
              </div>
              <div className="col-6 col-lg-3 d-flex justify-content-end">
                  <Link to={`/step/${layoutId}/dashboard`} className='btn btn-primary mt-3'>Next</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepPage;