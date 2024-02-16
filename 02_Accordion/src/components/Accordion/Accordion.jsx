// single selection
// multi selection
import data from "./data";
import { useState } from "react";
import './Accordion.css'

export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="wrapper">
    <button onClick={}>Enable multi-selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="item">
              <div
                onClick={() => handleSingleSelection(item.id)}
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? 
              <div className="content">
                {item.answer}
                <div>{item.explanation}</div>
              </div>
               : null}
            </div>
          ))
        ) : (
          <div>No Data Available!</div>
        )}
      </div>
    </div>
  );
};
