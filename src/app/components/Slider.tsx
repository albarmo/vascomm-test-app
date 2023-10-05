'use client';

import React from 'react'
import Image from 'next/image';

import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from './cards/ProductCard';

interface IPropsCarouselSlider {
    data: any[],
    spaceBetween: number
    slidesPerView: number
    type: 'banner' | 'list-card'
}

const RenderSliderItem = ({ data, type }: { data: any, type: 'banner' | 'list-card' }) => {
    switch (type) {
        case 'banner':
            return <Image src={'/assets/images/banner.png'} priority alt='banner' width={800} height={200} className='w-full' />
        case 'list-card':
            return (
                <ProductCard data={data} />
            )
        default:
            return <div>s</div>
    }
}

const CarouselSlider: React.FC<IPropsCarouselSlider> = ({ data, spaceBetween, slidesPerView, type }) => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
        >
            {data?.map((item) =>
                <SwiperSlide key={item.id} className='bg-gray-100'>
                    <RenderSliderItem data={item} type={type} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default CarouselSlider