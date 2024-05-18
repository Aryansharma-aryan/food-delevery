import React, { useState } from "react";
import {Modal} from 'react-bootstrap'

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{margin:'10px'}} className="shadow-lg p-3 mb-5  bg-body rounded">
      <h1>{pizza.name}</h1>
      <div className="m-8"onClick={handleShow}>
      <img
        src={pizza.image}
        className="img-fluid  "
        style={{ height: "280px", width: "330px" ,objectFit:"fill"}}
        alt={pizza.name}
        
      />
    
      </div>
      <div className="flex-container">
        <div className=" m-3 w-100">
          <h5><b> varients</b></h5>
          <select className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}>
            {pizza.varients.map((varient,index) => {
              return <option key ={index}
               value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className=" m-3 w-100"> 
          <h5><b>  Quantity</b></h5>
          <select className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}>
            {[...Array(10).keys()].map((i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
      
        <div className="m-1 w-100">
          {pizza && pizza.prices && pizza.prices[0] &&
            <h3 className="mt-1">Price: {(pizza.prices[0][varient] * quantity) } {pizza.prices[0].currency}Rs/-</h3>
          }
          </div>
         
         
         <div className="w-100">
          <button className="btn">Add To Cart</button>
         </div>
         
         

         </div>
         <Modal show={show}>
          <Modal.Header >
            <Modal.Title><h2>{pizza.name}</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
        src={pizza.image}
        className="img-fluid"
        style={{ height: "300px", width: "400px" }}
        
        alt=""
        
      />
      <h5>+{pizza.description}</h5>
            
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" onClick={handleClose}>close</button>
          </Modal.Footer>
         </Modal>
         
           </div>
        
      
    
  );
}
