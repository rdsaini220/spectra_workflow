import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import AwsIcon from "../assets/aws.svg";
import AzureIcon from "../assets/azure.svg";
import GcloudIcon from "../assets/gcloud.svg";
import DigitalOceanIcon from "../assets/digitalOcean.svg";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const TempleteData = [
  { 
    id:'cs1',
    icon: AwsIcon, 
    title:'AWS 1',
  },
  { 
    id:'cs2',
    icon: AzureIcon, 
    title:'Azure',
  },
  { 
    id:'cs3',
    icon: GcloudIcon, 
    title:'G-Cloud',
  },
  { 
    id:'cs4',
    icon: DigitalOceanIcon, 
    title:'Digital Ocean',
  }
]

const StepPage = () => {
  const [charts, setCharts] = useState([])
  const [chartList, setChartList] = useState({})
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
          cloud: chartList,
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
                <h3>Select Your Cloud Service</h3>
              </div>
              {
                charts?.map((item, i) => {
                  return (
                    <div className={`col-lg-1`} key={item?.id} onClick={() => addNewCard(item)}>
                      <div className={`preCard text-center ${item.id === chartList.id ? 'selected' : '' }`}>
                          <div className='cloud-icon border d-flex justify-content-center' >
                            <img className='img-fluid' style={{ width:'85px'}} src={item?.icon} alt="" />
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
                  <Link to={`/step/${layoutId}/templete`} className='btn btn-primary mt-3'>Prev</Link>
              </div>
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/alerts`} className='btn btn-primary mt-3'>Next</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepPage;