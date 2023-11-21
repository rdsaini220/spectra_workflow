import React, { useState, useEffect } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Dropdown from 'react-bootstrap/Dropdown';
import Draggable from "react-draggable";
import Accordion from 'react-bootstrap/Accordion';

import AlertIcon from "../assets/alert.png";
import MailIcon from "../assets/mail.png";
import NotificationIcon from "../assets/notification.png";
import SmsIcon from "../assets/sms.png";
import WhatsappIcon from "../assets/icons/whatsapp.svg";

import "../styles/StepsPage.css";

const boxStyle = {
  position:'relative',
  border: "grey solid 2px",
  borderRadius: "10px",
  height:'auto',
  display:'inline-block',
  border: "1px solid red", 
  padding: "0 1rem", 
  width: "auto",
  height:'30px',
};

const flowData = [
  { 
    id:'f1',
    x: 0, 
    y: 50,
    name:'Type 1',
    flowType:'flow',
  },
  { 
    id:'f2',
    x: 100, 
    y: 50,
    name:'Type 2',
    flowType:'flow'
  },
  { 
    id:'f3',
    x: 180, 
    y: 50,
    name:'Type 3',
    flowType:'flow'
  },
  { 
    id:'f4',
    x: 180, 
    y: 50,
    name:'Type 4',
    flowType:'flow'
  },
  { 
    id:'f5',
    x: 180, 
    y: 50,
    name:'Type 5',
    flowType:'flow'
  }
]

const conditionData = [
  { 
    id:'c1',
    x: 0, 
    y: 50,
    name:'condition 1',
    flowType:'logical',
  },
  { 
    id:'c2',
    x: 100, 
    y: 50,
    name:'condition 2',
    flowType:'logical'
  },
  { 
    id:'c3',
    x: 180, 
    y: 50,
    name:'condition 3',
    flowType:'logical'
  },
  { 
    id:'c4',
    x: 180, 
    y: 50,
    name:'condition 4',
    flowType:'logical'
  },
  { 
    id:'c5',
    x: 180, 
    y: 50,
    name:'condition 5',
    flowType:'logical'
  }
]

const servicesData = [
  { 
    id:'s1',
    x: 0, 
    y: 50,
    name:'sms',
    flowType:'alert',
    icon: SmsIcon,
  },
  { 
    id:'s2',
    x: 100, 
    y: 50,
    name:'whatsApp',
    flowType:'alert',
    icon: WhatsappIcon,
  },
  { 
    id:'s3',
    x: 180, 
    y: 50,
    name:'email',
    flowType:'alert',
    icon: MailIcon,
  },
  { 
    id:'s4',
    x: 180, 
    y: 50,
    name:'notification',
    flowType:'alert',
    icon: NotificationIcon,
  },
  { 
    id:'s5',
    x: 180, 
    y: 50,
    name:'alert',
    flowType:'alert',
    icon: AlertIcon,
  }
]

const DraggableBox = ({ id, label, icon, position, nodesList, conditionsList, servicesList,  showRemove, handleRemove, handleAddNew, indexNo }) => {
  const [showDrop, setShowDrop] = useState(false)
  const updateXarrow = useXarrow();
  return (
    <Draggable bounds=".parent-element" defaultPosition={position} onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={{...boxStyle, padding: icon ? '2px' : "0 1rem" }}>
        {
          icon ? 
            <img src={icon} style={{width:'26px'}} />
          : label
        }
        {/* <button className="close-btn add-btn" onClick={() => setShowDrop(!showDrop)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </button> */}
        <div className="dropdown">
          <button className="close-btn add-btn" type="button" onClick={() => setShowDrop(!showDrop)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
          </button>
          <div className={`dropdown-menu ${showDrop ? 'show': ''}`} sytle={{zIndex:'99999'}}>
              <Accordion className="py-0 custom-accordion" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Types</Accordion.Header>
                  <Accordion.Body>
                      <div className="diagram-list">
                          {
                            nodesList.map((row, i) => {
                              return (<div className={`diagram-item border p-1 mb-2`} onClick={() => { 
                                handleAddNew({...row, start:`${indexNo}`, end:``}) 
                                setShowDrop(!showDrop)
                              }}>
                                      {row?.name}
                                </div>)
                            })
                          }
                      </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="py-0" eventKey="1">
                  <Accordion.Header>Condition</Accordion.Header>
                  <Accordion.Body>
                    <div className="diagram-list ">
                        {
                          conditionsList.map((row, i) => {
                            return (<div className={`diagram-item border p-1 mb-2`} onClick={() => { 
                              handleAddNew({...row, start:`${indexNo}`, end:``}) 
                              setShowDrop(!showDrop)
                            }}>
                                    {row?.name}
                              </div>)
                          })
                        }
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="py-0" eventKey="2">
                  <Accordion.Header>Attributes</Accordion.Header>
                  <Accordion.Body>
                      <div className="diagram-list">
                          <div className="arlerts-list d-flex flex-wrap">
                              {
                                servicesList?.map((row, ind) => {
                                  return (
                                    <div className="cloud-icon border d-flex justify-content-center me-2 mb-2" style={{ width: '30px', height:'30px', cursor:'pointer', padding:'3px' }} key={row?.id} onClick={() => { 
                                      handleAddNew({...row, start:`${indexNo}`, end:``}) 
                                      setShowDrop(!showDrop)
                                    }}>
                                      <img className="img-fluid" src={row?.icon} alt="" style={{ width: '30px' }} />
                                    </div>
                                  )
                                })
                              }
                          </div>
                      </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            {/* <li>
              <a className="dropdown-item" href="#">Types</a>
              {
                 nodesList.map((row, i) => {
                  return (
                    <div className={`diagram-item border mb-2`} onClick={() => { 
                        handleAddNew({...row, start:`${indexNo}`, end:``}) 
                        setShowDrop(!showDrop)
                      }}>
                          {row?.name}
                    </div>
                    )
                })
              }
            </li>
            <li><a className="dropdown-item" href="#">Condition</a></li>
            <li><a className="dropdown-item" href="#">Attributes</a></li> */}
          </div>
        </div>
        {
          showRemove ?
            <button className="close-btn" onClick={() => handleRemove()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          : null
        }
      </div>
    </Draggable>
  );
};

const V2Example = () => {
  const [nodes, setNodes] = useState([])
  const [conditions, setConditions] = useState([])
  const [services, setServices] = useState([])
  const [selectedNodes, setSelectedNodes] = useState([])
  useEffect(() => {
    const fData = [...flowData]
    const sData = [...servicesData]
    const cData = [...conditionData]
    if(fData){
      setNodes(fData)
    }
    if(sData){
      setServices(sData)
    }
    if(cData){
      setConditions(cData)
    }
  }, [])

  const handleAddNew = (item) => {
    console.log(item, 'tesign')
    setSelectedNodes([...selectedNodes, item])
  }  
  
  const handleRemove = () => {
    const removedData = [...selectedNodes]
    removedData.pop()
    setSelectedNodes(removedData)
  }

  const handleArrowDrag = (i, v) => {
    console.log(i, v, 'D')
  }

  const handleArrowHeadDrag = (i, v) => {
    console.log(i, v, 'H')
  }
  
  

  return (
    <section>
        <div className="container-fluid mt-5">            
            <div className="row g-3">              
              <div className="col-lg-8">
                  <div className="postion-relative overflow-hidden">
                      <div className="parent-element" style={{ display: "flex", width: "100%",  background:'#ccc', minHeight:'500px', overflow:'hidden' }}>                    
                        <Xwrapper>
                            {
                              selectedNodes?.map((item, ind) => {
                                return (<>                              
                                      <DraggableBox 
                                          id={`${item?.name}_${ind}`} 
                                          handleRemove={handleRemove} 
                                          handleAddNew={handleAddNew} 
                                          indexNo={`${item?.name}_${ind}`} 
                                          nodesList={nodes} 
                                          conditionsList={conditions} 
                                          servicesList={services} 
                                          showRemove={ind === selectedNodes.length-1} 
                                          label={item?.name} 
                                          icon={item?.icon} 
                                          position={{x: item?.x, y: item?.x}} 
                                      />           
                                      {
                                        item?.start !== '' && item?.start !== undefined ? 
                                            <Xarrow
                                              end={`${item?.name}_${ind}`}
                                              start={item?.start}
                                              labels={''}
                                              onDrag={(pos) => handleArrowDrag(index, pos)}
                                              onArrowHeadDrag={(pos) => handleArrowHeadDrag(index, pos)}
                                              // ref={(ref) => (arrowRefs.current[index] = ref)}
                                            />
                                        : selectedNodes.length !==1 && ind !== selectedNodes.length-1 ?
                                            <Xarrow
                                              end={`${selectedNodes[ind+1]?.name}_${ind+1}`}
                                              start={`${item?.name}_${ind}`}
                                              labels={''}
                                              onDrag={(pos) => handleArrowDrag(index, pos)}
                                              onArrowHeadDrag={(pos) => handleArrowHeadDrag(index, pos)}
                                              // ref={(ref) => (arrowRefs.current[index] = ref)}
                                            />
                                        : null
                                      }                 
                                  </>)
                                })
                              }
                          </Xwrapper>
                      </div>
                  </div>
              </div>
              <div className="col-lg-2">
                  <div className="node-list">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Types</Accordion.Header>
                        <Accordion.Body>
                            <div className="diagram-list">
                                {
                                  nodes.map((row, i) => {
                                    return (<div className={`diagram-item border p-2 mb-2`} onClick={() => handleAddNew(row)}>
                                            {row?.name}
                                      </div>)
                                  })
                                }
                            </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Condition</Accordion.Header>
                        <Accordion.Body>
                          <div className="diagram-list ">
                              {
                                conditions.map((row, i) => {
                                  return (<div className={`diagram-item border p-2 mb-2`} onClick={() => handleAddNew(row)}>
                                          {row?.name}
                                    </div>)
                                })
                              }
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Attributes</Accordion.Header>
                        <Accordion.Body>
                            <div className="diagram-list">
                                <div className="arlerts-list d-flex flex-wrap">
                                    {
                                      services?.map((row, ind) => {
                                        return (
                                          <div className="cloud-icon border d-flex justify-content-center me-2" style={{ width: '30px', height:'30px', cursor:'pointer', padding:'3px' }} key={row?.id} onClick={() => handleAddNew(row)}>
                                            <img className="img-fluid" src={row?.icon} alt="" style={{ width: '30px' }} />
                                          </div>
                                        )
                                      })
                                    }
                                </div>
                            </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
              </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-8 pt-3">
                  
                </div>
                <div className="col-lg-2 pt-3"></div>
            </div>
        </div>
    </section>
  );
};
export default V2Example;
