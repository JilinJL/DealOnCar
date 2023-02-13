// 引入 Swiper, SwiperItem 组件
import {Component} from 'react'
import {Image, View, Text } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'
import img1 from '../../../images/swiper/swiper1.png'
import img2 from '../../../images/swiper/swiper2.png'
import img3 from '../../../images/swiper/swiper3.png'
import img4 from '../../../images/swiper/swiper4.png'
import './index.less'

export default class IndexSwiper extends Component{

    render() {
        return (
            <View className='swiperView'>
                <Swiper
                    className='indexswiper'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots='true'
                    autoplay>
                    <SwiperItem>
                        <View className='swiper-img'><Image mode='heightFix' src={img1} /></View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='swiper-img'><Image mode='heightFix' src={img2} /></View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='swiper-img'><Image mode='heightFix' src={img3} /></View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='swiper-img'><Image mode='heightFix' src={img4} /></View>
                    </SwiperItem>
                </Swiper>
            </View>
        )
    }
    
}
