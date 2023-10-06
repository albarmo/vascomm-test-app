'use client'

import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/cards/ProductCard'
import { fetchProductList } from '../../helpers/product_server';
import useCustomQuery from '../../utils/hooks/useCustomQuery';


export default function SearchPage() {
  const queryParam = useSearchParams()
  const keywordValue = queryParam.get('keyword')
  const params = {
    limit: 10, offset: 0, keyword: keywordValue
  }
  const { data: productLatest } = useCustomQuery(
    'latestProduct',
    { ...params },
    fetchProductList
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-6 mt-[100px]">
      <div className='w-11/12 md:w-9/12'>
        <div className='my-10'>
          <h2 className='font-semibold text-lg'>Produk Tersedia</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5'>
            {productLatest?.data?.map((product: Product) =>
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
