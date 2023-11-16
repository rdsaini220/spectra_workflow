import React from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  height:'auto',
  display:'inline-block',
  border: "1px solid red", 
  padding: "0 1rem", 
  width: "auto",
  height:'30px',
};

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
    bg:'', 
    title:'type 2',
    // cardType:'rounded',
    isedit:true,
  },
]


const DraggableBox = ({ id }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable bounds=".parent-element" onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={boxStyle}>
        {id}
      </div>
    </Draggable>
  );
};

const V2Example = () => {
  return (
    <section>
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                  <div className="parent-element" style={{ display: "flex", justifyContent: "space-evenly", width: "100%",  background:'#ccc', minHeight:'500px' }}>
                    <Xwrapper>
                      <DraggableBox id={"type1"} />
                      <DraggableBox id={"type2"} />
                      <Xarrow
                        start={"type1"}
                        end="type2"
                        labels={''}
                      />
                      <Xarrow
                        start={"type2"}
                        end="type4"
                        labels={''}
                      />
                      <DraggableBox id={"type4"} />
                    </Xwrapper>
                  </div>
              </div>
            </div>
        </div>
  </section>
  );
};
export default V2Example;
