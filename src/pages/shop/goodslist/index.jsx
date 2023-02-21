// 引入 Swiper, SwiperItem 组件
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'
import { AtList, AtListItem,AtDivider } from 'taro-ui'


import GoodItem from '../gooditem'
import './index.less'

export default class GoodsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goods: [],  //存储商品
            goodsInCart: []  //暂时存储购物车内商品
        };
    }

    //下拉刷新
    onPullDownRefresh = () => {
        this.forceUpdate()
        this.goodsRequest()
        Taro.stopPullDownRefresh()
    }

    //处理请求的数据
    handleRequest(dataArr) {
        console.log(dataArr)
    }

    //添加到购物车
    addToShopCart = (id, name, price, quantity) => {
        this.setState(
            { goodsInCart: [...this.state.goodsInCart, { id: id, name: name, price: price, quantity: quantity }] }
            ,   //这里写回调防止setState不同步的问题导致数据差一个
            () => {
                // 数据处理 传给父组件<Shop/>
                this.props.saveGoodsInCart(this.state.goodsInCart);
            })
    }


    //获取商品列表
    goodsRequest = () => {
        Taro.request({
            method: 'get',
            url: 'http://localhost:3000/goodsData',
            // data:
            // {
            //     "currentPage": 1,
            //     "pageSize": 5,
            //     "vehicleId": 1,
            //     "queryString": "绿箭"
            // },

            success: (res) => {
                this.setState({ goods: [...res.data] })
                console.log(res.data)
            }
        })
    }

    // 商品详情
    gotoDetails(id) {
        console.log(id)
    }

    componentDidMount() {
        this.goodsRequest()
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        this.goodsRequest.abort();
    }

    render() {
        return (
            <View className='goods-list'>
                {
                    this.state.goods.map((good, index) => {
                        return (
                            <GoodItem
                                imgSrc={good.imgUrl}
                                name={good.name}
                                price={good.price}
                                key={good.id}
                                surplus={good.surplus}
                                onClick={() => this.gotoDetails(good.id)}
                                addToCart={() => this.addToShopCart(good.id, good.name, good.price, 1)}
                            ></GoodItem>
                        )
                    })
                }
                <View style={{position: 'relative',left: '-3rem'}}>没有更多了...</View>
            </View>
        )
    }

}
