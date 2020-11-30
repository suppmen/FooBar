
import React, {useState} from "react";
import Popup from './Popup';

// From https://github.com/cluemediator/react-popup

export default function Beer(props) {

  const [count, setCount]= useState(0);

  const handleIncrement = ()=>{
    setCount(count + 1);
    }

    const handleDecrement = ()=>{
        setCount( count - 1);  
    }


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }


  return (
    <article>
      <h2>{props.name}</h2>
      <p>Category: {props.category}</p>

      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
     
      <input
      type="button"
      value="See Details"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <b>{props.name}</b>
        <p>{props.description.overallImpression}</p>
        <p>{props.description.appearance}</p>
        <p>{props.description.mouthfeel}</p>
        
      </>}
      handleClose={togglePopup}
    />}
   

    </article>
  );
}
