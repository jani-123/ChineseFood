import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import { calculatePrice ,sumPrice, setQuantity} from "./actions";
import './checkout.css';

const CHECHOUT = ({food,cart}) => { 
  
  const foodTable = cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <div><img src={food[item.id].img} className="js-imagen" />
              <span className="product-name">{food[item.id].name}</span>
            </div>
          </td>
          <td><input type="number" min="1" value={item.quantity} onChange={(e) =>setQuantity(item.id , e.target.value)}/></td>
          <td><p className="table-price">${food[item.id].price}</p></td>
        </tr>
      )
  });

  return (
    <div className="container">
      <div className="row">
     <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
      <div id="details-checkout">
        <h1>Orden Details</h1>
        <table className="su-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quanty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {foodTable}
          </tbody>
        </table>
          <p id="total-checkout" className="text-rigth">
          <button className="btn btn-link" >Total:</button>
          <span className="">${sumPrice().toFixed(2)}</span></p>
        <a className="cancel-order" href="#">cancel order</a>
        <button className="order-now" href="#">order now!</button>
      
      </div>
    </div>
   </div>
    </div>
  )
}

const mapToProps = ({food,cart}) => ({food,cart});
export default connect(mapToProps)(CHECHOUT)
