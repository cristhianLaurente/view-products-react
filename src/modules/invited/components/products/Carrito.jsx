import React from "react";

const Carrito = (props) => (
  <div className="Carrito">
    <div className="Carrito__item" onClick={props.handleSidebarShopping} >
      <i className="fas fa-shopping-cart"></i>
    </div>
  </div>
);

export default Carrito;
