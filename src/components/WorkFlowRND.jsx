import React, { useState } from "react";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  flexDirection:'column',
  alignItems: "center",
  justifyContent: "end",
  border: "solid 2px #ddd",
  background: "#fff",
  overflow:'hidden',
  objectFit:'cover',
  borderRadius:'0',
  position:'relative',
};


function WorkFlowRND({ boundaryElm, RND, Id, SetRND, activeCard, setActiveCard, priView, setPriView, previewMode}) {
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
      title={RND?.data?.workflowName}
    >
      <input value={Id} onFocus={(e) => handleFocus(e.target.value)} style={{height:'100%', width:"100%"}} hidden/>
      {
        RND?.icon ? 
          <img src={RND?.icon} alt="" style={{ width: `100%`, height: `100%` }} />
        : null
      }
      <span>{RND?.data?.workflowName}</span>
    </Rnd>
  );
}

export default WorkFlowRND;
