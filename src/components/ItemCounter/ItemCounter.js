
import "./itemcounter.scss";

export const ItemCounter = ({ max, counter, setCounter, handleAgregar }) => {



  const handleSumar = () => {
    counter < max && setCounter(counter + 1);
  };

  const handleRestar = () => {
    counter > 1 && setCounter (counter - 1)
  };

  return (
    <div className="my-3">
      <div>
        <button onClick={handleRestar} className="btn btn-outline-danger my-2">
          -
        </button>
        <span className="mx-2 my-2"> {counter} </span>
        <button onClick={handleSumar} className="btn btn-primary my-2">
          +
        </button>
      </div>

      <br />

      <div>
        <button onClick={handleAgregar} className="btn btn-success my-2">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
