import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { getCartList } from "action/cart"

import { CartCard } from '../../component/Cart/index'

export class CartClass extends Component {

    state = {
        productList: [],
        additionalDiscount: 0,
        totalWithDiscounts: 0,
        totalWithOutDiscounts: 0
    }

    componentDidMount() {

        this.props.getCartList({ userId: 'User4', cartId: 1 }).then((data) => {
            console.log(data)

            this.setState({
                productList: data.data.cartDetails,
                additionalDiscount: data.data.additionalDiscount,
                totalWithDiscounts: data.data.totalWithDiscounts,
                totalWithOutDiscounts: data.data.totalWithOutDiscounts
            })

        })

    }



    render() {
        let { productList = [], additionalDiscount, totalWithDiscounts, totalWithOutDiscounts } = this.state
        return (
            <>
                <div className="container">
                    <CartCard title={true} />
                    {
                        productList.map((data, index) => {
                            return (
                                <div className="" key={'product' + index}>
                                    <CartCard {...data} addToCart={this.handelAddCart} />
                                </div>
                            )
                        })
                    }


                    <div className="d-flex justify-content-between">
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}> Total  <hr /></div>
                        <div style={{ 'width': '20%' }}>  {totalWithOutDiscounts}  ₹<hr /></div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}> Discount
            <hr />

                        </div>
                        <div style={{ 'width': '20%' }}> {additionalDiscount} ₹
                        <hr /></div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}>  </div>
                        <div style={{ 'width': '20%' }}> <h4>Total</h4>  <hr /></div>
                        <div style={{ 'width': '20%' }}> <h4> {additionalDiscount > 0 ? totalWithDiscounts : totalWithOutDiscounts} ₹</h4> <hr /></div>
                    </div>

                </div>

            </>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getCartList
    }, dispatch)
}


export const Cart = connect(null, mapDispatchToProps)(CartClass)
