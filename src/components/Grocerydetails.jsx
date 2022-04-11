import React from "react"
import data from '../data.json'
import "../App.css";
import CartButton from "./CartButton";


const GroceryDetails = (props)=>{
const {discount,id,imgURL,mrp,sellingPrice,title} = props;
// console.log(props)
// console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
          { data.map((el) =>{
              console.log(el)
              return (
              <div>
                  <div className="disc">{el.discount}</div>
                  <img src={el.imgURL}/>
                  <p>{el.title}</p>
                  <div className="conFlx">
                      <div>{el.sellingPrice}</div>
                      <span>{"MRP"}</span>
                      <div><strike>{el.mrp}</strike></div>
                      <CartButton/>
                  </div>
                  
              </div>
              
              )
           })}
        </div>
        </>
    )
}
export default GroceryDetails