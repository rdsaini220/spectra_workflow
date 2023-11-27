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

const recipeList = [
  {
    id:'r1',
    name:'Recipe 1', 
    data:[
      {
        id:'a1',
        name:'Alerts 1', 
        width:300,
        height:50,
        x:20,
        y:20
      },
      {
        id:'a2',
        name:'Alerts 2', 
        width:300,
        height:50,
        x:20,
        y:80
      },
    ]
  },
]

const dataList = [
  {
    id:'a1',
    name:'Alerts 1',
    width:300,
    height:50,
    x:20,
    y:20
  },
  {
    id:'a2',
    name:'Alerts 2',
    width:300,
    height:50,
    x:20,
    y:20
  },
  {
    id:'a3',
    name:'Alerts 3',
    width:300,
    height:50,
    x:15,
    y:20
  },
  {
    id:'a4',
    name:'Alerts 4',
    width:300,
    height:50,
    x:15,
    y:20
  },
  {
    id:'a5',
    name:'Alerts 5',
    width:300,
    height:50,
    x:15,
    y:20
  }
]


const RecipeFlowPage = () => {
  const [alertsData, setAlertsData] = useState([])
  const [recipeData, setRecipeData] = useState([])
  const [activeLayout, setActiveLayout] = useState(null)
  const [charts, setCharts] = useState([])
  const [cards, setCards] = useState([])
  const [chartsItem, setChartsItem] = useState({})
  const [chartSelected, setChartSelected] = useState({})
  const [workflowList, setWorkflowList] = useState([])
  const [boundaryElm, setBoundaryElm] = useState()
  const [activeCard, setActiveCard] = useState(null)
  const [priView, setPriView] = useState(null)
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

  useEffect(() => {
    const dataLS = [...recipeList]
    if(dataLS){
      setRecipeData(dataLS)
    }
    const dl = [...dataList]
    if(dl){
      setAlertsData(dl)
    }
  }, [])

  const CreateAlerts = () => {
    setAlertsData([...alertsData, { 
      id:`a${alertsData.length+1}`,
      name:`Alerts ${alertsData.length+1}`,
      width:300,
      height:50,
      x:15,
      y:10
    }])
  }

  const RecipeAlerts = () => {
    const newRecipe = { 
      id:`r${recipeData.length+1}`,
      name:`Recipe ${recipeData.length+1}`, 
      data:[],
    }
    setRecipeData([...recipeData, {...newRecipe}])
    handelLayoutPreView(newRecipe)
  }

  useEffect(() => {
    setActiveLayout({...activeLayout, data: [...cards]})
  }, [cards])

  const handelLayoutPreView = (item) => {
    const data_list = [...item?.data]
    setCards(data_list)
    setActiveLayout(item)
  }
  
  const handleRecipe = () => {    
    const Rdata = activeLayout?.data
    setRecipeData((prev) => {
      return prev.map((item, i) => {
        if(activeLayout?.id === item?.id) {
          return { ...item, data: [...Rdata]};
        }
        return item;
      });
    })
  }
  
  const removeRecipe = () => {
    const updatedCards = [...recipeData];
    updatedCards.splice(activeCard, 1);
    setRecipeData(updatedCards);
  }

  const removeCard = () => {
    const updatedCards = [...cards];
    updatedCards.splice(activeCard, 1);
    setCards(updatedCards);
  }

  const addNewCard = (item) => {
    const itemdata = [...cards, item] 
    setCards(itemdata)
  }

  return (
    <>
      <section>
        <div className="container-fluid">          
          <div className="row g-4 mt-3">
            <div className="col-lg-4">
                <div className="row mb-3 d-flex align-items-center">
                  <div className="col-6">
                      <h5 className='mb-0'>Recipes</h5>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                      <button className='btn btn-sm btn-primary' onClick={() => RecipeAlerts()}>Create Recipe</button>
                  </div>
                </div>
                <div className="row g-3">
                    {
                      recipeData && recipeData.map((item, i) => {
                        return (<div className="col-lg-6">
                              <div className={`layout-card position-relative bg-light px-3 py-2 ${ activeLayout?.id === item?.id ? 'acitve':''}`} onClick={() => handelLayoutPreView(item)}>
                                  <span style={{fontSize:'10px'}}>Recipe {i+1}</span>
                                  <h6>{item?.name}</h6>
                                  {
                                    recipeData.length === i+1 ? 
                                      <button className="btn cutom-btn" onClick={() => {
                                        removeRecipe()
                                      }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                      </button>
                                    : null
                                  }
                              </div>
                          </div>)
                      })
                    }
                </div>
            </div>                      
            <div className="col-lg-4">                 
                <div
                  style={{ 
                    display:'block',
                    background: "#eee",
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
                  activeLayout?.id ? 
                    <div className='mt-3'>   
                      <button className='btn btn-sm btn-primary' onClick={() => handleRecipe()}>Update Recipe</button>               
                    </div>
                  : null
                }
            </div>
            <div className="col-lg-4">
                <div className="row mb-3 d-flex align-items-center">
                  <div className="col-6">
                      <h5 className='mb-0'>Alerts</h5>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                      <button className='btn btn-sm btn-primary' onClick={() => CreateAlerts()} >Create Alert</button>
                  </div>
                </div>
                <div className="row">
                      {
                        alertsData?.map((item, i) => {
                          return (
                            <div className="col-lg-6">
                                <button type="button" className='border w-100 d-flex justify-content-start mb-3 text-left px-2' key={i} disabled={!activeLayout?.id} onClick={() => addNewCard(item)}>
                                    {item?.name}
                                </button>
                            </div>
                          )
                        })
                      }
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecipeFlowPage;