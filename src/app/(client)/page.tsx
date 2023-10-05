'use client'

import CarouselSlider from '../components/Slider'
import ProductCard from '../components/cards/ProductCard'
import useWindowDimensions from '../utils/hooks/useDimension';

const BANNER_DATA = [
  { id: '01', title: 'Slide 1', imageSrc: '/assets/images/banner.png' },
  { id: '02', title: 'Slide 2', imageSrc: '/assets/images/banner.png' },
  { id: '03', title: 'Slide 3', imageSrc: '/assets/images/banner.png' }
]

const PRODUCT_DATA: Product[] = [
  { id: '01', title: 'Euodia', price: 200000, imageSrc: '/assets/images/product-1.png' },
  { id: '02', title: 'Euodia', price: 200000, imageSrc: '/assets/images/product-2.png' },
  { id: '03', title: 'Euodia', price: 200000, imageSrc: '/assets/images/product-2.png' },
  { id: '04', title: 'Euodia', price: 200000, imageSrc: '/assets/images/product-2.png' },
  { id: '05', title: 'Euodia', price: 200000, imageSrc: '/assets/images/product-2.png' },
  { id: '06', title: 'Euodia', price: 200000, imageSrc: '/assets/images/product-2.png' },
]

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-6 mt-[100px]">
      <div className='w-11/12 md:w-9/12'>
        <div className='my-5'>
          <CarouselSlider data={BANNER_DATA} spaceBetween={10} slidesPerView={1} type='banner' />
        </div>
        <div className='my-10'>
          <h2 className='font-semibold text-lg'>Terbaru</h2>
          <CarouselSlider data={PRODUCT_DATA} spaceBetween={10} slidesPerView={width <= 640 ? 2 : 5} type='list-card' />
        </div>
        <div className='my-10'>
          <h2 className='font-semibold text-lg'>Produk Tersedia</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5'>
            {PRODUCT_DATA.map((product: Product) =>
              <ProductCard
                key={product.id}
                data={product}
              />
            )}
          </div>
          <center>
            <button className='font-sans  text-sm px-4 py-2 border-[1px] border-primary  text-primary border-blackrounded-xs'>
              Lihat lebih banyak
            </button>
          </center>
        </div>
      </div>
    </main >
  )
}
