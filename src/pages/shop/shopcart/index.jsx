import { View, Image, Text } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtBadge,AtFloatLayout } from 'taro-ui'
import { throttle } from '../../../utils/throttle'
import img from '../../../images/icon/shop-cart.png'
import './index.less'

export default class ShopCart extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            number: 0,
            goods: [],
            totalPrice: 0,
            showCart: false,
        })
    }

    //更新数量 
    componentDidUpdate(prevProps, prevState) {
        //通过判断prevProps和当前props可以避免陷入update死循环
        if (prevProps.goodsInCart !== this.props.goodsInCart) {
            this.setState({ goods: this.props.goodsInCart })
            this.setState({ totalPrice: this.computeTotalPrice(this.props.goodsInCart) })
            this.setState({ number: this.props.goodsInCart.length },
                () => {
                    //回调处理
                })
        }
    }

    //计算总价
    computeTotalPrice = (goodsList) => {
        const total = goodsList.reduce((pre,cur)=>{
            return (pre + Number(cur.price))
        },0)
        return total;
    }

    //弹出购物车列表
    showCart=()=>{
        let flag = !this.state.showCart
        this.setState({showCart: flag})
    }

    //处理添加和减少 (添加节流)
    throttleUpdate = throttle(this.handleGoodsUpdate, 500)

    handleGoodsUpdate(id, type) {
        console.log(111)
    }


    //去结算
    toPay = () => {
        Taro.setStorage({
            key: 'shopCart',
            data: {
                total: this.state.totalPrice
            }
        })
        Taro.navigateTo({
            url: '../pay/index?totalPrice=123' 
        })
    }
    render() {
        return (
            <View className="shop-cart">
                <View className="shop-cart-icon">
                    {this.state.number ? <AtBadge className="badge" value={this.state.number} />
                        : null}
                    <Image onClick={this.showCart} src={img}></Image>

                </View>
                <View className="shop-cart-total">{this.state.totalPrice}</View>
                <View className="shop-cart-toPay" onClick={this.toPay}>去结算</View>
            
            {/*购物车弹出框*/}
            <AtFloatLayout 
            isOpened={this.state.showCart} 
            scrollY
            title="购物车"
            onClose={this.showCart}
            >
            
          </AtFloatLayout>
            </View>
        )
    }
}
