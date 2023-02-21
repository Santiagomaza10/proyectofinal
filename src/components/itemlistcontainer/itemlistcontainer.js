import "./itemlistcontainer.scss";

export const Itemlistcontainer = ( {nombre, direccion, mail} ) => {


  return (
    <div className="itemlistcontainer">
      <h2 className="ilc-title">Bienvenidos a {nombre} !</h2>
      <hr/>
      <p className="ilc-text"> Cada colección evoca un sentimiento e implica una técnica diferente. Equipá todo tu hogar con una misma impronta de diseño. <br/> Podes escribirnos a {mail} o encontrarnos en {direccion}.  </p>
    </div>
  );
};
