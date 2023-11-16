import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import localStore from '../untils/localStore';

import AlertIcon from "../assets/alert.png";
import MailIcon from "../assets/mail.png";
import NotificationIcon from "../assets/notification.png";
import SmsIcon from "../assets/sms.png";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const flowData = [
  { 
    id:'f1',
    name:'Flow 1',
    nodes:[
      {
        name:'node 1',
        type:''
      },
      {
        name:'node 2',
        type:''
      },
      {
        name:'node 3',
        type:''
      },
    ],
    flowType:''
  },
  { 
    id:'f2',
    name:'Flow 2',
    nodes:[
      {
        name:'set 1',
        type:''
      },
      {
        name:'set 2',
        type:''
      },
      {
        name:'set 3',
        type:''
      },
    ],
    flowType:''
  },
  { 
    id:'f3',
    name:'Flow 3',
    nodes:[
      {
        name:'item 1',
        type:''
      },
      {
        name:'item 2',
        type:''
      },
      {
        name:'item 3',
        type:''
      },
    ],
    flowType:''
  },
  { 
    id:'f4',
    name:'Flow 4',
    nodes:[
      {
        name:'row 1',
        type:''
      },
      {
        name:'row 2',
        type:''
      },
      {
        name:'row 3',
        type:''
      },
    ],
    flowType:''
  },
  { 
    id:'f5',
    name:'Flow 5',
    nodes:[
      {
        name:'object 1',
        type:''
      },
      {
        name:'object 2',
        type:''
      },
      {
        name:'object 3',
        type:''
      },
    ],
    flowType:''
  }
]

const StepPage = () => {
  const [charts, setCharts] = useState([])
  const [selectNode, setSelectNode] = useState({ 
    id:'f1',
    name:'Flow 1',
    nodes:[
      {
        name:'node 1',
        type:''
      },
      {
        name:'node 2',
        type:''
      },
      {
        name:'node 3',
        type:''
      },
    ],
    flowType:''
  })
  const [layoutData, setLayoutData] = useState({})
  const params = useParams();
  const { layoutId } = params;
  console.log(layoutId, 'params')

  useEffect(() => {
    const dataLS = [...flowData]
    if(dataLS){
      setCharts(dataLS)
    }
  }, [])

  // useEffect(() => {
  //   const layoutDataListLS = localStore.load('layoutData') || []
  //   if(layoutId && layoutDataListLS.length > 0){
  //     const updatedLayoutData = {
  //         ...layoutDataListLS[layoutId],
  //         nodes: [],
  //     };
  //     const updatedLayoutDataListLS = [...layoutDataListLS];
  //     updatedLayoutDataListLS[layoutId] = updatedLayoutData;
  //     localStore.add('layoutData', updatedLayoutDataListLS)
  //     setLayoutData(updatedLayoutData)
  //   } 
  // }, [])

  const isSelected = (ID) => chartList?.some(item => item.id === ID);

  const addNewCard = (item) => {
    if(isSelected(item.id)){
      const filteredData = () => chartList?.filter(row => row?.id !== item?.id);
      setChartList(filteredData)
    }else{
      setChartList([...chartList, item])
    }
  }  
  const handleSelect = (item) => {
    setSelectNode(item)
  }
  return (
    <>
      <section>
        <div className="container-fluid">  
          <div className="row g-4 mt-3">
              <div className="col-lg-12">
                <h3>Select Diagram</h3>
              </div>
              <div className="col-6">
                <div className="box-diagram border">
                    <div className="row">
                      <div className="col-lg-3">
                          <div className="diagram-list p-3">
                              {
                                charts.map((row, i) => {
                                  return (<div className={`diagram-item border mb-2 ${row?.id === selectNode?.id ? 'selected' : ''}`} onClick={() => handleSelect(row)}>
                                          {row?.name}
                                    </div>)
                                })
                              }
                          </div>
                      </div>
                      <div className="col-lg-9">
                          <div className="diagram-view f-flex p-3">
                              {
                                selectNode?.nodes && selectNode?.nodes.map((row, ind) => {
                                  return (
                                    <div key={ind} className='diagram-view-item border d-inline-flex py-2 px-3'>
                                        {row?.name}
                                    </div>
                                  )
                                })
                              }
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/alerts`} className='btn btn-primary mt-3'>Prev</Link>
              </div>
              <div className="col-lg-6">
                  <Link to={`/step/${layoutId}/libraries`} className='btn btn-primary mt-3'>Next</Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepPage;