import React, { useState } from "react";
import { Rnd } from "react-rnd";

import "../styles/workflowPage.css";
import "../styles/StepsPage.css";

const style = {
  display: "flex",
  flexDirection:'column',
  alignItems: "start",
  // justifyContent: "center",
  padding:'5px',
  border: "solid 2px #ddd",
  background: "#fff",
  overflow:'hidden',
  objectFit:'cover',
  borderRadius:'0',
  position:'relative',
  minHeight:'30px',
};


function WorkFlowRND({ boundaryElm, RND, Id, SetRND, activeCard, setActiveCard, priView, noOfIndex, setPriView, previewMode, removeCard}) {
  const changePosition = (e, d) => {
    handleFocus(Id)
    SetRND(Id, { x: d.x, y: d.y });
  };

  const changeSize = (e, direction, ref, delta, position) => {
    handleFocus(Id)
    console.log(e, direction, ref, delta, position, 'e, direction, ref, delta, position')
    SetRND(Id, {
      width: ref.style.width,
      height: ref.style.height,
      ...position
    });
  };
  const handleFocus = (value) => {
    setActiveCard(value)
    if(previewMode){
      setPriView(Id)
    }else{
      setPriView(null)
    }
  }

  const handleBorderRadius = () => {
    switch(RND?.cardType) {
      case 'none':
        return '0';
      case 'rounded':
        return '1rem';
      case 'circle':
        return '50%';
      default:
        return '0';
    }
  }

  return (
    <Rnd
      style={{...style, borderColor: activeCard  === Id ? 'red' : '#ddd', borderRadius: handleBorderRadius(), backgroundColor: RND?.bg && !RND?.icon ? RND?.bg : '#fff' }}
      size={{ width: RND?.width, height: RND?.height }}
      position={{ x: RND?.x, y: RND?.y }}
      bounds={boundaryElm}
      onDragStop={changePosition}
      onResizeStop={changeSize}
      onClick={() => handleFocus(Id)}
      title={RND?.name}
    >
      <input value={Id} onFocus={(e) => handleFocus(e.target.value)} style={{height:'100%', width:"100%"}} hidden/>
      <div style={{fontSize:'12px',lineHeight:'16px'}}>step : {Id+1}</div>
      <div className="d-flex align-items-center">
        {
          RND?.icon ? 
            <div className="itm-img">
                <img className='img-fluid' src={RND?.icon} alt="" />
            </div>
          : null
        }
        <span style={{fontSize:'16px',lineHeight:'20px', fontWeight:'600', marginLeft:'6px', marginTop:'8px'}}>{RND?.name}</span>
      </div>
      {
        Id === noOfIndex-1 ? 
          <button className="btn cutom-btn" onClick={() => {
            removeCard()
          }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        : null
      }
    </Rnd>
  );
}

export default WorkFlowRND;
