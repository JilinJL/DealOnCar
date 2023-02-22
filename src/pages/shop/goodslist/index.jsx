// 引入 Swiper, SwiperItem 组件
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtDivider } from 'taro-ui'


import GoodItem from '../gooditem'
import './index.less'

export default class GoodsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goods: [],  //存储商品
            
        };
    }

    //下拉刷新
    onPullDownRefresh() {
        console.log(123);
        
    }


    //处理请求的数据
    handleRequest(dataArr) {
        console.log(dataArr)
    }

    //获取商品列表
    goodsRequest = () => {

        // 本地测试请求
        Taro.request({
            method: 'get',
            url: 'http://localhost:3000/goodsData',
            success: (res) => {
                this.setState({ goods: [...res.data] })
                console.log(res.data)
            }
        })

        // Taro.request({
        //     method: 'POST',
        //     url: 'http://192.168.199.238:7676/api/passenger/product/list',
        //     data: {
        //         "currentPage" : 0,
        //         "pageSize" : 100,
        //         "queryString" : null,
        //         "vehicleId" : 1
        //     },
        //     success: (res) => {
        //         this.setState({ goods: [...res.data.result] })
        //     }
        // })
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
                                id={good.id}
                                imgSrc={good.image}    //物品图片
                                name={good.storeName}    //物品名
                                price={good.price}
                                key={good.id}
                                surplus={good.surplus}

                                // addToCart={() => this.addToShopCart(good.id,good.image,good.storeName, good.price, 1)}
                                addToCart={this.props.addToCart}
                                saveItemToCart={this.props.saveItemToCart}
                            ></GoodItem>
                        )
                    })
                }
                <View style={{ position: 'relative', left: '-3rem' }}>没有更多了...</View>
            </View>
        )
    }

}
