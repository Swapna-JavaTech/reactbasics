import React, { Component } from "react";
import '../css/Product.css';

const products = [{
    name : "ice cream",
    price : 10
},{
    name : "Donut",
    price : 100
},{
    name : "oreo milk shake",
    price : 150
}];
export default class Product extends Component{
    //declaring the state
    state = {
        cart : [],
        total : 0
    }

    currencyOptions = {
        minimumFractionDigits : 2,
        maximumFractionDigits : 2
    }

    add = (product) =>{
        this.setState(state =>({
            cart : [...state.cart,product],
        }))
    }

    remove = (product) =>{
        this.setState(state => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p=>p.name === product.name);
            if(productIndex < 0){
                return;
            }
            cart.splice(productIndex,1);
            return({
                cart
            })
        })
    }

    getTotal = () =>{
        const total = this.state.cart.reduce((totalCost,product) => totalCost + product.price,0 )
        return total.toLocaleString(undefined,this.currencyOptions)
    }

    render(){
        return(
            <div className="wrapper">
                <h1>State Example</h1>
                <div>
                    {/* accessing the state */}
                    Shopping Cart : {this.state.cart.length} total items
                </div>
                <div>
                    Total : {this.getTotal()}
                </div>
                <div>
                    {
                    products.map(product =>(
                        <div key={product.name}>
                            <div  className="product">
                                <span>{product.name}</span>
                            </div>
                            <button className="btn btn-primary" onClick={()=>this.add(product)}>Add</button>
                            <button className="btn btn-danger" onClick={() => this.remove(product)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}