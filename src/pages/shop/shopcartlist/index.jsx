import { View,Text } from '@tarojs/components'
import React, { Component } from 'react'
import ShopCartItem from '../shopcartitem'
import './index.less'

export default class ShopCartList extends Component {
    constructor(props){
        super(props)
        this.state = ({
            items: [],
        })
    }
    
    //拿到传入物品 渲染去重后的购物车
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.goodsList!==this.props.goodsList){
            this.setState({items: this.props.goodsList},()=>{
            })
        }
    }

    //处理某商品数量
    handleQuantity=(id,step)=>{
      const cloneItems = [...this.state.items]
      cloneItems.find(curr=>curr.id === id).quantity += step

      //判断是否删除
      this.handleDelete(cloneItems)
      
      this.setState({items:cloneItems},()=>this.props.computeTotalPrice(this.state.items))
      
      //处理小红点
      this.props.handleDot(this.state.items)
    }

    //quantity为0 删除该商品
    handleDelete=(cloneItems)=>{
      cloneItems.map((item)=>{
        if(item.quantity <= 0){
          //先找到其索引 然后从数组中移除
            let index = this.state.items.findIndex((one)=>one.id===item.id)
            cloneItems.splice(index,1)
        }
      })
    }

  render() {
    return (
      <View className="shop-cart-list">
        {this.state.items.map((item)=>{
            return (
                <ShopCartItem
                good={item}
                key={item.id}
                handleQuantity={this.handleQuantity}
                ></ShopCartItem>
            )
        })}
        <Text>总价:{this.props.total}元</Text>
      </View>
    )
  }
}
