import React, {useState, useRef, useEffect} from "react";
import {useDispatchCart, useCart} from "./ContextReducer";

export default function Card(props) {
  
  let dispatch = useDispatchCart();
  let data = useCart();

  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItems = props.item;

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("small");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItems._id) {
        food = item;

        break;
      }
    }
    
    console.log(new Date());
    if (food !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItems._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } 
      else if (food.size !== size) {
        
   await dispatch({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
    return
    }
    return
  }

  await dispatch({
    type: "ADD",
    id: props.foodItems._id,
    name: props.foodItems.name,
    price: finalPrice,
    qty: qty,
    size: size
  });
}
    // await console.log(data);
  

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  let finalPrice = qty * parseInt(options[size]); //This is where Price is changing


  return (
    <div>
      <div
        className="card at-1 shadow-lg p-3  mb-5  bg-light " 
        style={{ width: "26rem", margin: "10px", height: "600px", marginTop:"70px",justifyContent:"space-evenly",justifyContent:"space-between"}}
      >

      
        <img
          src={props.image}
          
          className="card-img-top"
          style={{
            height: "280px",
            width: "100%",
            objectFit: "fill",
            marginTop: "2px",
            marginLeft:"2"
          }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItems.name}</h5>

          <div className=" LOVELY  " >quantity
            <select className="  h-30   bg-success rounded "
            onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="  bg-success rounded"style={{marginLeft:200,color:"black"}} ref={priceRef}

              onChange={(e) => setSize(e.target.value)}>
               
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <h3 className="sumit" >varients</h3>
            <div className="pandit ">Rupees:  {finalPrice}/-</div>
          </div>
          <hr className="pannu" style={{ marginTop: -100 }}></hr>
          <button
            className={`btn btn-success justify-center ms-2 `}
            style={{color:"black" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
 
