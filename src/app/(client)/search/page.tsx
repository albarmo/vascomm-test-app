'use client'

import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/cards/ProductCard'
import { fetchProductList } from '../../helpers/product_server';
import useCustomQuery from '../../utils/hooks/useCustomQuery';


export default function SearchPage() {
  const queryParam = useSearchParams()
  const keywordValue = queryParam.get('keyword')

  const { data: products, isLoading } = useCustomQuery(
    'searchProduct',
    { keyword: keywordValue, limit: 10, offset: 0 },
    fetchProductList
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-6 mt-[100px]">
      <div className='w-11/12 md:w-9/12'>
        <div className='my-10'>
          <h2 className='font-semibold text-lg'>Hasil Pencarian {keywordValue} </h2>
          {!isLoading && products?.data?.length === 0 ?
            <h2 className='font-semibold text-lg'>Tidak Dapat Menemukan Produk dengan nama {keywordValue} </h2>
            :
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5'>
              {products?.data?.map((product: Product) =>
                <div key={product.id}>
                  {isLoading ?
                    <div className='h-20 w-20 bg-gray-300'>Loading</div>
                    :
                    <ProductCard
                      key={product.id}
                      data={product}
                    />
                  }
                </div>
              )}
            </div>
          }

        </div>
      </div>
    </main >
  )
}
