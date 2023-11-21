import React, { useRef, useState } from 'react';
import Xarrow from 'react-xarrows';

const DynamicArrows = () => {
  const [arrows, setArrows] = useState([]);
  const arrowRefs = useRef([]);

  const addArrow = () => {
    const newArrows = [...arrows];
    newArrows.push({ start: 'box1', end: 'box2' });
    setArrows(newArrows);
  };

  const removeArrow = (index) => {
    const newArrows = [...arrows];
    newArrows.splice(index, 1);
    setArrows(newArrows);
  };

  const handleArrowDrag = (arrowId, pos) => {
    // Handle arrow drag if needed
  };

  const handleArrowHeadDrag = (arrowId, pos) => {
    // Handle arrow head drag if needed
  };

  return (
    <div>
      <div
        id="box1"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          position: 'absolute',
          top: '50px',
          left: '50px',
        }}
      >
        Box 1
      </div>
      <div
        id="box2"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightcoral',
          position: 'absolute',
          top: '200px',
          left: '200px',
        }}
      >
        Box 2
      </div>
      {arrows.map((arrow, index) => (
        <Xarrow
          key={index}
          start={arrow.start}
          end={arrow.end}
          path="smooth"
          strokeWidth={3}
          arrowHeadSize={6}
          onDrag={(pos) => handleArrowDrag(index, pos)}
          onArrowHeadDrag={(pos) => handleArrowHeadDrag(index, pos)}
          ref={(ref) => (arrowRefs.current[index] = ref)}
        />
      ))}
      <button onClick={addArrow}>Add Arrow</button>
      {arrows.map((_, index) => (
        <button key={index} onClick={() => removeArrow(index)}>
          Remove Arrow {index + 1}
        </button>
      ))}
    </div>
  );
};

export default DynamicArrows;
