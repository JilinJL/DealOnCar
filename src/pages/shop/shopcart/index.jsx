import { View, Image, Text } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtBadge, AtFloatLayout,AtMessage } from 'taro-ui'
import { throttle } from '../../../utils/throttle'
import ShopCartList from '../shopcartlist'
import img from '../../../images/icon/shop-cart.png'
import './index.less'

export default class ShopCart extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            number: 0,
            goods: [],
            noRepeatGoods: [],
            totalPrice: 0,
            showCart: false,
        })
    }

    //更新数量 
    componentDidUpdate(prevProps, prevState) {
        //通过判断prevProps和当前props可以避免陷入update死循环
        if (prevProps.itemToCart !== this.props.itemToCart) {
            this.setState({ goods: [...this.state.goods, this.props.itemToCart] }, () => {
                this.setState({ noRepeatGoods: this.handleGoods(this.state.goods) }, () => {
                    this.computeTotalPrice(this.child.props.goodsList)
                })
                this.setState({ number: this.state.goods.length })
            });
        }
    }

    // 处理小红点显示数
    handleDot = (goodsList) => {
        let count = goodsList.reduce((total, item) => {
            return total + item.quantity
        }, 0)
        this.setState({ number: count })
    }

    //数组去重同一个id的商品合并 计算quantity
    handleGoods = (list) => {

        // 先记录了每个id出现次数
        let itemCount = list.reduce((pre, cur) => {
            pre[cur.id] = (pre[cur.id] + 1) || 1
            return pre;
        }, {})

        //for循环写法
        // for (let i = 0; i < list.length;i++){
        // let item = list[i].id 
        // newList[item] = (newList[item] + 1) || 1
        // }

        // 给数组去重
        let hash = {}
        let noRepeatList = list.reduce((item, next) => {
            hash[next.id] ? '' : (hash[next.id] = true, item.push(next))
            return item
        }, [])

        //重组数组
        noRepeatList.map((item) => {
            item.quantity = itemCount[item.id]
            return item
        })

        return noRepeatList
    }


    //计算总价  储存订单信息
    computeTotalPrice = (goodsList) => {
        let totalPrice = goodsList.reduce((total, item) => {
            return total + item.quantity * item.price
        }, 0)
        this.setState({ totalPrice: totalPrice })

        // 储存购物车
        Taro.setStorage({
            key: 'cart',
            data: {
                goodsList,
                totalPrice: goodsList.reduce((total, item) => {
                    return total + item.quantity * item.price
                }, 0)
            },
            success: ()=>{
                Taro.atMessage({
                    'message': '添加成功',
                    'type': 'success',
                    'duration': 500
                  })
            }
        })
        return totalPrice;
    }

    //弹出购物车列表
    showCart = () => {
        let flag = !this.state.showCart
        this.setState({ showCart: flag })
    }

    //处理添加和减少 (添加节流)
    throttleUpdate = throttle(this.handleGoodsUpdate, 500)

    handleGoodsUpdate(id, type) {

    }


    //去结算
    toPay = () => {
        //判断是否登录
        Taro.navigateTo({
            url: '../pay/index'
        })
    }
    render() {
        return (
            <>
            <AtMessage/>
                <View className="shop-cart">
                    <View className="shop-cart-icon">
                        {this.state.number ? <AtBadge className="badge" value={this.state.number} />
                            : null}
                        <Image onClick={this.showCart} src={img}></Image>

                    </View>
                    <View className="shop-cart-total">{this.state.totalPrice}</View>
                    <View className="shop-cart-toPay" onClick={this.toPay}>去结算</View>

                </View>
                {/*购物车弹出框*/}
                <AtFloatLayout
                    isOpened={this.state.showCart}
                    scrollY
                    title="购物车"
                    onClose={this.showCart}
                >
                    <ShopCartList
                        handleDot={this.handleDot}
                        ref={e => this.child = e}
                        computeTotalPrice={this.computeTotalPrice}
                        goodsList={this.state.noRepeatGoods}
                        total={this.state.totalPrice} />

                </AtFloatLayout>
            </>

        )
    }
}
