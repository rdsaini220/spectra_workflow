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

const chartList = [
  { 
    width: 100, 
    height: 30, 
    x: 10, 
    y: 10, 
    bg:'', 
    title:'type 1',
    // cardType:'rounded',
    isedit:true,
  },
  { 
    width: 100, 
    height: 30, 
    x: 10, 
    y: 10, 
    icon: NoCodeIcon, 
    bg:'', 
    title:'type 2',
    // cardType:'rounded',
    isedit:true,
  },
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

const DashboardPage = () => {
  const [workflowList, setWorkflowList] = useState([])
  const [boundaryElm, setBoundaryElm] = useState()
  const [charts, setCharts] = useState([])
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
    // // Create a copy of the original array
    // const updatedItems = [...cards];
    // // Update the object with the new name
    // updatedItems[index] = {x: d.x, y: d.y};
    // // Update the state with the modified array
    // setCards(updatedItems);
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
    const dataLS = [...chartList]
    const layoutDataListLS = localStore.load('dashboardData')
    if(dataLS){
      setCharts(dataLS)
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

  // useEffect(() => {
  //   if(cards){

  //   }
  // }, [cards])

  const addNewCard = (item) => {
    setCards([...cards, item])
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
  };

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
  const handleRemove = () => {
    const updatedCards = [...cards];
    updatedCards.splice(activeCard, 1);
    setCards(updatedCards);
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
  const handleSubmit = event => {
    event.preventDefault();
    alert('Successfully Save')
    // const updatedData = { ...cards[activeCard] };
    // if(updatedData){
    //   setWorkflowList([...workflowList, { name:'workflow', data: updatedData}])
    //   handleRemove()
    //   setActiveCard(null)
    // }
  };
  const handelLayoutPreView = (item, ind) => {
    const datalist = [...item?.list]
    console.log(item?.list, 'item?.list')
    setCards(datalist)
    setActiveLayout(ind)
    setPreviewMode(true)
    setActiveCard(null)
    setPriView('')
  };

  // const handelPalyPreview = item => {
  //    // Start with the first step (index 0)
  //    setActiveStepIndex(0);
     
  //   //  let regexPattern = /^-?[0-9]+$/;
    
  //   //  // check if the passed number is integer or float
  //   //  let result = regexPattern.test(x);

  //    // Use setInterval to change the active step every 2 seconds
  //    const intervalId = setInterval(() => {
  //      setActiveStepIndex((prevIndex) => {
  //        const nextIndex = prevIndex + 1;
  //        // If you reached the end of the steps, stop the interval
  //        if (nextIndex >= cards[priView]?.data?.steps.length) {
  //          clearInterval(intervalId);
  //        }
  //        return nextIndex;
  //      });
  //    }, 2000);
  // };


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
  };

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
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          {/* <div className="row my-3">
             <div className="col-lg-7">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                      {
                        cards.length !== 0 && activeCard !== null ? 
                          <div className="action d-flex justify-content-start align-items-center">
                            <input className="form-control w-250 me-2" type="file" accept="image/*" onChange={handleImageChange} />
                            {
                              cards.length > 0 == !cards[activeCard]?.icon ? 
                                <input type="color" className="form-control form-control-color me-2" onChange={(e) => handleBgChange(e.target.value)} value={ cards[activeCard]?.bg ? cards[activeCard]?.bg : "#fff"} />
                              : null
                            }
                            <button onClick={() => handleTypeCard('none')} className="btn btn-primary rounded-0 icon-btn me-2" title={'Square Box'} >
                                <img className='img-fluid' src={squareIcon} alt="" />
                            </button>
                            <button onClick={() => handleTypeCard('rounded')} className="btn btn-primary icon-btn me-2" title={'Rounded Box'}>
                                <img className='img-fluid' src={roundedIcon} alt="" /> 
                            </button>
                            <button onClick={() => handleTypeCard('circle')} className="btn btn-primary rounded-circle icon-btn me-2" title={'Circle'} >
                              <img className='img-fluid' src={circleIcon} alt="" /> 
                            </button>
                          </div>
                        : null
                      }
                  </div>
                  <div className="col-lg-5 text-end">
                   <div>
                        {
                          activeLayout !== null ? 
                            <button onClick={() => {
                              setActiveLayout(null)
                              setCards([])
                              setPreviewMode(!previewMode)
                            }} className="btn btn-danger me-3 icon-btn" title="clear">
                              <img className='img-fluid' src={clearIcon} alt="" />
                            </button>
                          : null
                        }
                        {
                          cards?.length !== 0 && activeCard !== null ? 
                            <button onClick={() => handleRemove()} className="btn btn-danger icon-btn me-3">
                              <img className='img-fluid' src={removeIcon} alt="" />
                            </button>
                          : null
                        }
                        {
                          activeLayout !== null ? 
                            <button onClick={() => { 
                              setPreviewMode(!previewMode)
                              setActiveCard(null) 
                              setPriView(null) 
                              setActiveStepIndex(-1)
                            }} 
                            className="btn btn-warning me-3 icon-btn" title={previewMode ? 'Edit Mode' : 'Preview Mode'}>
                              <img className='img-fluid' src={previewMode ? editIcon : preViewIcon} alt="" />
                            </button>
                          : null
                        }                      
                        <button onClick={() => addNewCard()} className="btn btn-primary icon-btn" title="add workflow">
                            <img className='img-fluid' src={addIcon} alt="" />  
                        </button> 
                       
                   </div>
                  </div>
                </div>
             </div>
             <div className="col-lg-5">
                {
                  cards?.length !== 0 && activeCard !== null ?
                    <h4 className='text-center'>Define WorkFlow</h4>
                  : null

                }
             </div>
          </div> */}
          <div className="row g-2 mt-3">
            <div className="col-lg-1">
               <div className='preCard'>
                  {
                    charts.map((item, i) => {
                      return (
                        <div className='border d-flex justify-content-center mb-3' key={i} onClick={() => addNewCard(item)}>
                            {item?.title}
                        </div>
                      )
                    })
                  }
               </div>
            </div>
            <div className="col-lg-8">
                <div
                  style={{ 
                    display:'block',
                    background: "#eee",
                    width: "100%",
                    height: "80vh",
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
            </div>
            
            {/* {
              cards.length !== 0 ?
                <div className="collg-12">
                    <button className='btn btn-primary mt-3' onClick={() => hendleLayoutSave()}>{ activeLayout !== null ? 'Update' : 'Save'} Layout</button>
                </div>
              : null

            } */}
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

export default DashboardPage;