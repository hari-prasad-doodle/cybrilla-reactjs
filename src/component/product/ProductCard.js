import React, { useState } from 'react'

export const ProductCard = ({ title = false, productId, productName, quantityAvailable, cost, addToCart }) => {
    const [count, setCount] = useState(1);

    return (
        <>
            <div className="d-flex justify-content-between">
                {/* <div style={{'width' : '20%'}}>  {title ? 'productId' : productId} </div> */}
                <div style={{ 'width': '20%' }}>  {title ? 'productName' : productName} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'quantityAvailable' : quantityAvailable} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'quantityAvailable' :
                    <>
                        <input type="number"
                            value={count}
                            onChange={(e) => {
                                if (e.target.value <= quantityAvailable && e.target.value > 0) {
                                    setCount(e.target.value)
                                }
                            }} />
                    </>
                } </div>
                <div style={{ 'width': '20%' }}>  {title ? 'cost' : cost} </div>
                <div style={{ 'width': '20%' }}>  {title ? 'action' : <button className="btn btn-danger btn-lg" onClick={() => addToCart(productId, count)}>Add to cart</button>}  </div>
            </div>
            <hr />
        </>
    )
}