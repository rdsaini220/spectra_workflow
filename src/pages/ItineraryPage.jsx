import React, { useEffect, useState } from 'react'
import DashboardRND from '../components/DashboardRND';
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
import "../styles/StepsPage.css";

const itineraryList = [
  { 
    id:'i1',
    title:'Incident Manager',
    cards:[
     {
        name:'Trans card',
        data: [{
          width: 300, 
          height: 50, 
          x: 40, 
          y: 15, 
          name:'IM 1', 
        },
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 80, 
          name:'IM 2', 
        },
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 140, 
          name:'IM 3', 
        },
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 205, 
          name:'IM 4', 
        },]
     },
     {
      name:'Set Card',
      data: [
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 15, 
          name:'IMS 1', 
        },
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 80, 
          name:'IMS 2', 
        },
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 140, 
          name:'IMS 3', 
        },
        {
          width: 300, 
          height: 50, 
          x: 40, 
          y: 205, 
          name:'IMS 4', 
        },
      ]
   }
    ],
  },
  { 
    id:'i2',
    title:'Maintienance engineer',
    cards:[
      {
         name:'Maintienance card',
         data: [
          {
            width: 300, 
            height: 100, 
            x: 40, 
            y: 15, 
            name:'ME 1', 
          },
          {
            width: 300, 
            height: 100, 
            x: 40, 
            y: 130, 
            name:'ME 2', 
          },
          {
            width: 300, 
            height: 100, 
            x: 40, 
            y: 240, 
            name:'ME 3', 
          },
          {
            width: 300, 
            height: 100, 
            x: 40, 
            y: 350, 
            name:'ME 4', 
          }
        ]
      }
     ],
  },
  { 
    id:'i3',
    title:'Service engineer',
    cards:[
      {
         name:'Service card',
         data: [
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 15, 
            name:'SE 1', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 80, 
            name:'SE 2', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 140, 
            name:'SE 3', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 205, 
            name:'SE 4', 
          }
        ]
      }
     ],
  },
  { 
    id:'i4',
    title:'Operations Manager',
    cards:[
      {
         name:'Manager card',
         data: [
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 15, 
            name:'MC 1', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 80, 
            name:'MC 2', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 140, 
            name:'MC 3', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 205, 
            name:'MC 4', 
          }
        ]
      }
     ],
  },
  { 
    id:'i5',
    title:'Operation Field engineer',
    cards:[
      {
         name:'Operation card',
         data: [
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 15, 
            name:'OC 1', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 80, 
            name:'OC 2', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 140, 
            name:'OC 3', 
          },
          {
            width: 300, 
            height: 50, 
            x: 40, 
            y: 205, 
            name:'OC 4', 
          }
        ]
      }
     ],
  },
]

const dataList = [
  {
    width: 300, 
    height: 50, 
    x: 20, 
    y: 5, 
    name:'Message', 
  },
  {
    width: 300, 
    height: 50, 
    x: 20, 
    y: 5,
    name:'Call', 
  },
  {
    width: 300, 
    height: 50, 
    x: 20, 
    y: 5, 
    name:'Route Map/ETA', 
  },
  {
    width: 300, 
    height: 50, 
    x: 20, 
    y: 5, 
    name:'Mail', 
  },
  {
    width: 300, 
    height: 50, 
    x: 20, 
    y: 5,
    name:'CRM Integration', 
  }
]

const dashboardList = [
    {
      layoutName:'Layout 1',
      list: [
          { 
            width: 100, height: 100, x: 10, y: 10, icon: SaasIcon, bg:'', cardType:'rounded',
            disableDragging: true,
            isedit:false,
            data: {
              workflowName:'sample',
              steps:[
                {
                  name:'sample 22',
                  type:'phone' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'sample 55',
                  type:'whatsapp' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'sample 66',
                  type:'erp' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
              ]
            }
          },
          { 
            width: 100, height: 100, x: 120, y: 10, icon: NoCodeIcon, bg:'', cardType:'circle', 
            disableDragging: true,
            isedit:false,
            data: {
              workflowName:'demo',
              steps:[
                {
                  name:'testing 1',
                  type:'email' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'testing 2',
                  type:'phone' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'testing 3',
                  type:'checkbox' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'testing 4',
                  type:'phone' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'testing 5',
                  type:'whatsapp' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
                {
                  name:'testing 6',
                  type:'erp' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
                },
              ]
            } 
          }
        ]
    }
]

const labelStyle = {
    fontSize:'14px',
    marginBottom:'0',
}

const getIconImg = (cardType) => {
  switch(cardType) {
    case 'checkbox':
      return checkboxIcon;
    case 'whatsapp':
      return whatsappIcon;
    case 'sms':
      return smsIcon;
    case 'email':
      return emailIcon;
    case 'phone':
      return phoneIcon;
    case 'erp':
      return erpIcon;
    default:
      return null;
  }
}

const ItineraryPage = () => {
  const [charts, setCharts] = useState([])
  const [chartsItem, setChartsItem] = useState({})
  const [chartSelected, setChartSelected] = useState({})
  const [chartsData, setChartData] = useState([])
  const [workflowList, setWorkflowList] = useState([])
  const [boundaryElm, setBoundaryElm] = useState()
  const [cards, setCards] = useState([])
  const [activeCard, setActiveCard] = useState(null)
  const [priView, setPriView] = useState(null)
  const [activeLayout, setActiveLayout] = useState(null)
  const [previewMode, setPreviewMode] = useState(false)
  const [activeStepIndex, setActiveStepIndex] = useState(-1); // Initialize with -1 to start with no active step
  const handleRND = (index, data) => {
    setCards(prevCards => {
      return prevCards.map((item, i) => {
        if (i === index) {
          return { ...item, ...data };
        }
        return item;
      });
    });
  }

  const isFillData = (dataList=[]) => {
    dataList.every(item => {
      const isWorkflowNameValid = item?.data?.workflowName?.trim() !== '';
      const areStepsValid =  item?.data?.steps?.length && item?.data?.steps?.every(step => {
        return step?.name?.trim() !== '' && step?.type?.trim() !== '';
      });
    
      return isWorkflowNameValid && areStepsValid;
    });
  }

  useEffect(() => {
    const dataLS = [...itineraryList]
    const layoutDataListLS = localStore.load('dashboardData')
    if(dataLS){
      setCharts(dataLS)
    }
    const dl = [...dataList]
    if(dl){
      setChartData(dl)
    }
    if(layoutDataListLS){
      setWorkflowList(layoutDataListLS)
    }
  }, [])

  const hendleLayoutSave = () => {
    const cardData = localStore.load('cardData') || []
    const layoutDataListLS = localStore.load('layoutData') || []
    let newData = []
    if(activeLayout !== null){
      newData = [...layoutDataListLS]
      newData[activeLayout] = {
        layoutName:'Layout',
        list: [...cardData]
       };
    }else{      
      newData = [...layoutDataListLS, {
       layoutName:'Layout',
       list: [...cardData]
      }]
      setCards([])
    }
    localStore.remove('cardData')
    localStore.add('layoutData', newData)
    setWorkflowList(newData)
    alert('save successfully')
  }

  const hangleChartSelected = (item) => {
    setChartSelected(item)
    setChartsItem({})
    setCards([])
  }

  const hangleChartSelectedDataCard = (item) => {
    const itemdata = [...item?.data] 
    setChartsItem(item)
    setCards(itemdata)
  }

  const addNewCard = (item) => {
    const itemdata = [...cards, item] 
    setCards(itemdata)
  }

  const handleSave = () => {
    if(Object.keys(chartSelected).length){
      const cardsData = [...cards]
      let updatedChartSelected = {...chartSelected}
      let updatedCards = []
      if(Object.keys(chartsItem).length){
        updatedCards =  updatedChartSelected?.cards.map((item, i) => {
          if (item.name === chartsItem.name) {
            return { ...item, data: cardsData };
          }
          return item;
        })
      }else{
        updatedCards = [...updatedChartSelected?.cards, {
          name:`New card ${updatedChartSelected?.cards?.length + 1}`,
          data: cardsData,
        }]
      }
      updatedChartSelected.cards = updatedCards
      setChartSelected(updatedChartSelected)
      setCharts(prevCards => {
        return prevCards.map((item, i) => {
          if(item.id === updatedChartSelected.id) {
            return {...updatedChartSelected};
          }
          return item;
        });
      });
      if(Object.keys(chartsItem).length === 0){
          setCards([])
      }
    }
  }  

  const removeCard = () => {
    const updatedCards = [...cards];
    updatedCards.splice(activeCard, 1);
    setCards(updatedCards);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCards(prevCards => {
          return prevCards.map((item, i) => {
            if (i === activeCard) {
              return { ...item, icon: e.target.result };
            }
            return item;
          });
        });
      };
      reader.readAsDataURL(file);
    }
  }
  const handleTypeCard = (value) => {
    setCards(prevCards => {
      return prevCards.map((item, i) => {
        if (i === activeCard) {
          return { ...item, cardType: value };
        }
        return item;
      });
    });
  }
  const handleBgChange = (value) => {
    setCards(prevCards => {
      return prevCards.map((item, i) => {
        if (i === activeCard) {
          return { ...item, bg: value };
        }
        return item;
      });
    });
  }
  const handleCreateSteps = () => {
    setCards(prevCards => {
      return prevCards.map((item, i) => {
        if (i === activeCard) {
          return { ...item, data: {
            workflowName: item?.data?.workflowName,
              steps:[{
                name:'',
                type:''
              }]
          }};
        }
        return item;
      });
    });
  }
  const handleAddSteps = () => {
    setCards(prevCards => {
      return prevCards.map((item, i) => {
        if (i === activeCard) {
          return { ...item, data: {
            workflowName: item?.data?.workflowName,
              steps:[...item?.data?.steps, {
                name:'',
                type:''
              }]
          }};
        }
        return item;
      });
    });
  }  
  const handleWorkflowName = (value) => {
    setCards(prevCards => {
      return prevCards.map((item, i) => {
        if(i === activeCard) {
          return { ...item, data: {
            ...item?.data,
            workflowName: value,
          }};
        }
        return item;
      });
    });
  }
  const handleWorkflowStepName = (value, indexNo) => {
    const updatedData = { ...cards[activeCard]?.data };
    updatedData.steps[indexNo].name = value;
    setCards((prevCards) => {
      return prevCards.map((item, i) => {
        if (i === activeCard) {
          return { ...item, data: updatedData };
        }
        return item;
      });
    });
  }
  const handleIconSelect = (value, indexNo) => {
    const updatedData = { ...cards[activeCard]?.data };
    updatedData.steps[indexNo].type = value;
    setCards((prevCards) => {
      return prevCards.map((item, i) => {
        if (i === activeCard) {
          return { ...item, data: updatedData };
        }
        return item;
      });
    });
  }
  const handelLayoutPreView = (item, ind) => {
    const datalist = [...item?.list]
    console.log(item?.list, 'item?.list')
    setCards(datalist)
    setActiveLayout(ind)
    setPreviewMode(true)
    setActiveCard(null)
    setPriView('')
  }
  const handelPalyPreview = (item) => {
    // Start with the first step (index 0)
    setActiveStepIndex(0);
  
    // Use setInterval to change the active step every 2 seconds
    const intervalId = setInterval(() => {
      setActiveStepIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        const currentStep = cards[priView]?.data?.steps[prevIndex];
  
        // If you reached the end of the steps, stop the interval
        if (nextIndex >= cards[priView]?.data?.steps?.length) {
          clearInterval(intervalId);
        } else if (currentStep.type === 'checkbox') {
          // If the current step is a checkbox, show a modal
          showCheckboxModal(currentStep, nextIndex);
          // Pause the interval until the user interacts with the modal
          clearInterval(intervalId);
        }
  
        return nextIndex;
      });
    }, 2000);
  }
  // Function to show a modal for checkbox steps
  const showCheckboxModal = (step, stepIndex) => {
    // Display a modal with confirm and cancel buttons
    var result = confirm("Press a button!");
    if (result == true) {
      setActiveStepIndex(stepIndex + 1);
      handelPalyPreview()
    } else {
      setActiveStepIndex(stepIndex + 1);
      handelPalyPreview()
    }
  }
  return (
    <>
      <section>
        <div className="container-fluid">          
          <div className="row g-4 mt-3">
            <div className="col-lg-2">
               <div className='preCard'>
                  {
                    charts.map((item, i) => {
                      return (
                        <div className={`border d-flex flex-wrap justify-content-center mb-3 text-center ${item.title == chartSelected.title ? 'selected' : ''}`} key={i} onClick={() => hangleChartSelected(item)}>
                            {item?.title}
                        </div>
                      )
                    })
                  }
               </div>
            </div>            
            <div className="col-lg-5">                 
                <div
                  style={{ 
                    display:'block',
                    background: "#fafafa",
                    width: "100%",
                    height: "70vh",
                    border:'solid 1px #ccc',
                    overflowX:'auto',
                  }}
                  ref={(elm) => setBoundaryElm(elm)}
                >
                    {
                      cards && cards.map((row, ind) => {
                        return(
                          <DashboardRND 
                            boundaryElm={boundaryElm}
                            Id={ind}
                            RND={row}
                            noOfIndex={cards.length}
                            removeCard={removeCard}
                            SetRND={handleRND}
                            activeCard={activeCard}
                            setActiveCard={setActiveCard}
                            priView={priView}
                            setPriView={setPriView}
                            previewMode={previewMode}
                          />
                        )
                      })
                    }
                </div>   
                {
                    cards.length > 0 ?                     
                      <div className='d-flex justify-content-end mt-2'>
                        <button className='btn btn-primary' onClick={() => handleSave()}>Save</button>
                      </div>
                    : null
                }             
            </div>
            {
               Object.keys(chartSelected).length > 0 ? <>              
                <div className="col-lg-2">
                  <h5 className='mb-3'>Components</h5>
                  <div className='preCard'>
                      {
                        chartsData.map((item, i) => {
                          return (
                            <div type="button" className='border d-flex justify-content-start mb-3 text-left px-2' disabled={Object.keys(chartSelected).length === 0} key={i} onClick={() => addNewCard(item)}>
                                {item?.name}
                            </div>
                          )
                        })
                      }
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className='row preCard'>
                      <div className="col-12">
                          <h5 className='mb-3'>Layouts</h5>
                      </div>
                      {
                        Object.keys(chartSelected).length > 0 ? chartSelected?.cards?.map((item, i) => {
                          return (
                            <div className='col-lg-6'>
                                <div className={`border d-flex justify-content-center mb-3 text-center p-4 ${item.name == chartsItem.name ? 'selected' : ''}`} key={i} onClick={() => hangleChartSelectedDataCard(item)}>
                                    {item?.name}
                                </div>
                            </div>
                          )
                        }) : <div style={{fontSize:'12px'}}>Not Selected...</div>
                      }
                  </div>
                </div>
              </> : null
            }
          </div>
          <div className="row mb-5 mt-5">
              <div className="col-lg-7">
                  <div className="row">
                      {
                        workflowList && workflowList.map((item, i) => {
                          return (<div className="col-lg-2 text-center">
                                <div className={`layout-card bg-light py-3 ${ activeLayout === i ? 'acitve':''}`} onClick={() => handelLayoutPreView(item, i)}>
                                    <div className="layout-img">
                                        <img src={SerivcesIcon} alt="" />
                                    </div>
                                    <h6 className='mt-2'>{item?.layoutName} {i+1}</h6>
                                </div>
                            </div>)
                          })
                      }
                  </div>
              </div>
              <div className="col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ItineraryPage;