import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import WorkFlowRND from '../components/WorkFlowRND';
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

const dataList = [
  { 
    width: 100, height: 100, x: 10, y: 10, icon: SaasIcon, bg:'', cardType:'rounded',
    isedit:true,
    data: {
      workflowName:'',
      steps:[]
    }
  },
  { 
    width: 100, height: 100, x: 120, y: 10, icon: NoCodeIcon, bg:'', cardType:'circle', 
    isedit:true,
    data: {
      workflowName:'SASS',
      steps:[
        {
          name:'testing',
          type:'whatsapp' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
        },
        {
          name:'testing',
          type:'sms' // checkbox, whatsapp, sms, email, phone,  crm/erp integration
        }
      ]
    } 
  }
]

const layoutList = [
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

const BoydPage = () => {
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
    localStorage
    const data = [...dataList]
    const layoutDataList = [...layoutList]
    const dataLS = localStore.load('cardData')
    const layoutDataListLS = localStore.load('layoutData')
    if(dataLS){
      setCards(dataLS)
    }
    if(layoutDataListLS){
      setWorkflowList(layoutDataListLS)
    }
  }, [])
  useEffect(() => {
    localStore.add('cardData', cards)
  }, [cards])

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

  const addNewCard = () => {
    setCards([...cards, 
      { 
        width: 70, 
        height: 70, 
        x: 10, 
        y: 10, 
        icon: '', 
        bg:'', 
        cardType:'none', 
        disableDragging: false, 
        isedit:true, 
      }
    ])
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
          <div className="row mb-5 mt-5">
              <div className="col-lg-7">
                  <div className="row">
                      {
                        workflowList && workflowList.map((item, i) => {
                          return (<div className="col-lg-3 text-center">
                                <Link to={`/step/${i}/charts`} className={`layout-card bg-light py-3 d-block`}>
                                    <div className="layout-img">
                                        <img src={SerivcesIcon} alt="" />
                                    </div>
                                    <h6 className='mt-2'>{item?.layoutName} {i+1}</h6>
                                </Link>
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

export default BoydPage;