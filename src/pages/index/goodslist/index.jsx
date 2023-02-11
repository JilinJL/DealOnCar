// 引入 Swiper, SwiperItem 组件
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Image, View, Text } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import './index.less'

export default class GoodsList extends Component {

    constructor(props) {
        super(props);
        this.state = {goods: []}; //存储商品
      }

    //处理请求的数据
    handleRequest(dataArr) {
        console.log(dataArr)
    }

    //跳转到详情
    gotoDetails(id){
        Taro.navigateTo({
            url: 'details'
        })
    }

    componentDidMount() {
        this.goodsRequest = Taro.request({
            url: 'http://localhost:3000/goodsData',
            success:(res)=>{
                this.setState({goods:[...res.data]})
                console.log(res.data)
            }
        })
    }

    componentDidUpdate(){
        console.log(this.state.goods[0].name)
    }

    componentWillUnmount(){
        this.goodsRequest.abort();
    }

    render() {
        return (
            <View className='goodsList'>
                <AtList
                hasBorder
                >
                {
                    this.state.goods.map((good,index)=>{
                        return(
                            <AtListItem
                            onClick={this.gotoDetails(good.id)}
                            extraText={good.price}
                            title={good.name}
                            thumb={good.imgUrl}
                        />
                        )
                    })

                }

                </AtList>
            </View>
        )
    }

}
