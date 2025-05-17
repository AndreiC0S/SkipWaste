import React, { useState } from 'react'
import { useSkips } from '../context/getSkip';

import SkipInfoModal from '../cards/skipInfoModal';

import SkipCard from '../cards/skipCard';
import SkipFilter from '../components/skipFilter';

export default function SelectSkip() {
  const { skips, loading, error, isModalOpen, modalSkipData } = useSkips();
  const [filters, setFilters] = useState({ size: '', price: '' });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Eroare: {error.message}</p>;

  const filteredSkips = skips.filter((skip) => {
    const price = skip.price_before_vat;
    const size = skip.size;

    let sizeMatch = true;
    if (filters.size === '<10') sizeMatch = size < 10;
    else if (filters.size === '10 - 20') sizeMatch = size >= 10 && size <= 20;
    else if (filters.size === '>=20') sizeMatch = size > 20;

    let priceMatch = true;
    if (filters.price === '0-400') priceMatch = price <= 400;
    else if (filters.price === '400-500') priceMatch = price > 400 && price <= 500;
    else if (filters.price === '500+') priceMatch = price > 500;

    return sizeMatch && priceMatch;
  });

  console.log('Skips:', skips);

  return (
    <>

      {isModalOpen && modalSkipData && <SkipInfoModal />}
      <div className='flex justify-center pt-10 pb-20 min-h-screen ' style={{ background: 'rgb(18,18,18)' }}>
        <div className='relative w-full  lg:max-w-[1700px] flex flex-col  items-center border border-gray-600 rounded-xl z-30'>
          <h1 className='text-3xl text-white font-bold pt-10 mb-4'>Select Your Skip</h1>
          <SkipFilter filters={filters} setFilters={setFilters} />
          <div className="w-[80%] flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4  p-4">
            {filteredSkips.map((skip) => (
              <SkipCard key={skip.id} skip={skip} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
