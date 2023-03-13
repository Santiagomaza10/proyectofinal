import { useState } from "react"
import "./itemcounter.scss"

export const ItemCounter = () => {

    
    const [counter, setCounter] = useState (1)
    
    const handleSumar = () => {
        setCounter(counter + 1);
      };

      const handleRestar = () => {
        if (counter > 1) {
          setCounter(counter - 1);
        }
      };
  

    return (

        <div className="itemcounter">
            <button onClick={handleRestar} className="btn btn-primary">-</button>
            <p> {counter} </p>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
        </div>
    )

}