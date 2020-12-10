import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { getProductList, addItemToCart } from "action/product"
import { ProductCard } from '../../component/product/index'
import { getCartList } from "action/cart"

export class productListClass extends Component {

    state = {
        productList: []
    }

    componentDidMount() {
        this.getProductList()
    }

    getProductList = () => {
        this.props.getProductList({ page: 1 }).then((data) => {
            console.log(data)
            // let results = data.results
            this.setState({
                productList: data.data,
            })
            this.props.getCartList()
        })
    }

    handelAddCart = (productId, count) => {
        let body = {
            "userId": "User4",
            "cartId": 1,
            "productId": productId,
            "quantity": count
        }
        this.props.addItemToCart(body).then((data) => {
            alert("added sucessfully")
            this.getProductList()
        })
    }


    render() {
        let { productList = [] } = this.state
        return (
            <>
                {/* Login listtt {data} */}
                <div className="container">
                    <ProductCard title={true} />
                    {
                        productList.map((data, index) => {
                            return (
                                <div className="" key={'product' + index}>
                                    <ProductCard {...data} title={false} addToCart={this.handelAddCart} />
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getProductList,
        addItemToCart,
        getCartList
    }, dispatch)
}


export const ProductList = connect(null, mapDispatchToProps)(productListClass)
