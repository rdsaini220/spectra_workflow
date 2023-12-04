import React, { useEffect, useState } from 'react'
import DashboardRND from '../components/DashboardRND';
import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

import MailIcon from "../assets/mail.png";
import NotificationIcon from "../assets/notification.png";
import PhoneIcon from "../assets/icons/phone.svg";
import MapsIcon from "../assets/maps.png";
import CrmIcon from "../assets/crm.png";


const recipeList = [
  {
    id:'r1',
    name:'Itinerary 1', 
    data:[
      {
        id:'a1',
        name:'Message', 
        icon:NotificationIcon,
        width:300,
        height:60,
        x:20,
        y:20
      },
      {
        id:'a2',
        name:'call',
        icon:PhoneIcon, 
        width:300,
        height:60,
        x:20,
        y:90
      },
    ]
  },
]

const dataList = [
  {
    id:'c1',
    width: 300, 
    height: 60, 
    x: 20, 
    y: 5, 
    name:'Message', 
    icon:NotificationIcon,
  },
  {
    id:'c2',
    width: 300, 
    height: 60, 
    x: 20, 
    y: 5,
    name:'Call', 
    icon:PhoneIcon,
  },
  {
    id:'c3',
    width: 300, 
    height: 60, 
    x: 20, 
    y: 5, 
    name:'Route Map/ETA', 
    icon:MapsIcon,
  },
  {
    id:'c4',
    width: 300, 
    height: 60, 
    x: 20, 
    y: 5, 
    name:'Mail', 
    icon:MailIcon,
  },
  {
    id:'c5',
    width: 300, 
    height: 60, 
    x: 20, 
    y: 5,
    name:'CRM Integration',
    icon:CrmIcon, 
  }
]

const ItineraryPage = () => {
  const [alertsData, setAlertsData] = useState([])
  const [recipeData, setRecipeData] = useState([])
  const [activeLayout, setActiveLayout] = useState(null)
  const [cards, setCards] = useState([])
  const [boundaryElm, setBoundaryElm] = useState()
  const [activeCard, setActiveCard] = useState(null)
  const [priView, setPriView] = useState(null)
  const [previewMode, setPreviewMode] = useState(false)

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
      name:`Component ${alertsData.length+1}`,
      width:300,
      height:50,
      x:15,
      y:10
    }])
  }

  const RecipeAlerts = () => {
    const newRecipe = { 
      id:`r${recipeData.length+1}`,
      name:`Itinerary ${recipeData.length+1}`, 
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
    alert('Update successfully')
    setActiveLayout(null)
    setCards([])
  }
  
  const removeRecipe = () => {
    const updatedCards = [...recipeData];
    updatedCards.splice(activeCard, 1);
    setRecipeData(updatedCards);
  }

  const removeAlerts = () => {
    const updatedCards = [...alertsData];
    updatedCards.splice(activeCard, 1);
    setAlertsData(updatedCards);
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
          <div className="row g-4">                                          
            <div className="col-lg-6">    
                <div className="row">
                  <div className="col-lg-6 mb-3">                      
                      <button className='btn btn-sm btn-primary' onClick={() => RecipeAlerts()}>Itinerary Recipe</button>                       
                  </div>  
                  <div className="col-lg-6 d-flex justify-content-end mb-3">    
                        {
                          activeLayout?.id ? 
                            <button className='btn btn-sm btn-success' onClick={() => handleRecipe()}>Update Itinerary</button>
                          : null
                        }                                        
                  </div>  
                </div>             
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
            </div>
            <div className="col-lg-4">
                <div className="row mb-3 d-flex align-items-center">
                  <div className="col-12">
                      <h4>Components</h4>
                  </div>
                </div>
                <div className="row g-4">
                    {
                      alertsData.map((item, i) => {
                        return (
                          <div className="col-lg-6">
                              <button className="btn border w-100 text-center" disabled={!activeLayout?.id} onClick={() => addNewCard(item)}>
                                <div type="button" className='it-img p-2 mx-auto' key={i}>
                                    <img className='img-fluid' src={item?.icon} alt="" />
                                </div>
                                {item?.name}
                              </button>
                          </div>
                        )
                      })
                    }
                </div>
            </div>
            <div className="col-lg-12 mt-5">
                <div className="row mb-2">
                  <div className="col-12">
                      <h4>Itineraries</h4>
                  </div>
                </div>
                <div className="row g-3">
                    {
                      recipeData && recipeData.map((item, i) => {
                        return (<div className="col-lg-3">
                              <div className={`layout-card position-relative bg-light px-3 py-2 ${ activeLayout?.id === item?.id ? 'acitve':''}`} onClick={() => handelLayoutPreView(item)}>
                                  <span style={{fontSize:'10px'}}>Itinerary {i+1}</span>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default ItineraryPage;