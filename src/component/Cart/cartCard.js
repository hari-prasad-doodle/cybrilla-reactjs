import React, { Component } from 'react'

export const CartCard = ({ title = false, cartId, productName, discount, cost, quantity }) => {

    return (
        <>
            <div className="d-flex justify-content-between">
                <div style={{ 'width': '20%' }}>  {title ? 'cartId' : cartId} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'discount' : discount} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'productName' : productName} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'quantity' : quantity} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'cost' : cost} </div>
                {/* <div style={{ 'width': '20%' }}>  {title ? 'action' : <button onClick={() => addToCart(productId)}>Add to cart</button>}  </div> */}
            </div>
            <hr />
        </>
    )
}