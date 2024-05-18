import React, { useEffect, useState } from "react";
import Carausal from "../components/carausal"
import Card from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default function Homescreen() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItems] = useState([]);
  const [search, setSearch] = useState('')

  const loadData = async () => {
    let response = await fetch("http://localhost:7000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    setFoodItems(data[0]);
    
    setFoodCat(data[1]);
    
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

<div className="carousel-inner " id='carousel'>
    <div className=" carousel-caption  " style={{ zIndex: "9" }}>
        <div className=" d-flex justify-content-center mt-100 " style={{marginTop:"20px"}}>  {/* justify-content-center, copy this <form> from navbar for search box */}
            <input className="form-control me-2 w-75 bg-light text-dark " type="search"value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="search your fvourate food..." aria-label="Search" />
            {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
        </div>
    </div>
    <div className="carousel-item active" >
        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
    </div>
    <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
    </div>
    <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

      </div>
      <div className="m-4">
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3 " style={{fontSize:"50px",color:"black",fontWeight:"700px"}}>
                  <div key={data._id} classNaame="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem && foodItem.length > 0 ? (
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 "> 
                            <Card foodItems={filterItems}
                            options={filterItems.options[0]}
                            
                            image={filterItems.image}
                            name={filterItems.name}
                            
                            
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>no such data found</div>
                  )}
                </div>
              );
            })
          : ""}
        
      </div>
      <Footer/>
      </div>
    
    
  );

}