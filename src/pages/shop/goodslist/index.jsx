// 引入 Swiper, SwiperItem 组件
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'


import GoodItem from '../gooditem'
import './index.less'

export default class GoodsList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            goods: [],  //存储商品
        }; 
    }

    //处理请求的数据
    handleRequest(dataArr) {
        console.log(dataArr)
    }


    //分类数据


    // 商品详情
    gotoDetails(id){
      console.log(id)
    }

    componentDidMount() {

        //获取商品列表
        this.goodsRequest = Taro.request({
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

    componentDidUpdate() {
        console.log(this.state.goods[0].name)
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
                                onClick={()=>this.gotoDetails(good.id)}
                                ></GoodItem>
                            )
                        })

                    }
                    <Text>没有更多了..</Text>
            </View>
        )
    }

}
