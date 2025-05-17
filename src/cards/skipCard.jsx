import React from 'react'

import { useSkips } from '../context/getSkip';

export default function SkipCard({ skip }) {

    const priceWithVat = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

    const { setIsModalOpen, setModalSkipData, setSelectedSkip, selectedSkip } = useSkips();
    const isSelectedCard = selectedSkip?.size === skip.size;


    return (
        <>
            <div
                className={`relative w-full max-w-[350px] mb-[20px] mx-auto rounded-t-lg cursor-pointer transition duration-200 ${isSelectedCard ? 'shadow-[0_0_2px_2px_rgb(0,55,193)]' : 'shadow-sm'} hover:shadow-[0_0_8px_rgb(0,55,193)]`}
                style={{
                    background: 'rgb(28,28,28)',
                }}
            >
                {isSelectedCard && (
                    <div className="absolute top-0 right-0  text-white text-xs font-semibold px-2 py-1  z-50 " style={{ background: 'rgb(0,55,193)',borderRadius: '0 5px 0 5px' }}>
                        Selected
                    </div>
                )}
                <div onClick={() => {
                    if (selectedSkip?.size === skip.size) {
                        setSelectedSkip(null);
                    } else {
                        setSelectedSkip(skip);
                    }
                }}>
                    <div className="w-full relative overflow-hidden rounded-t-lg aspect-video sm:h-48 h-40">
                        <img
                            className="w-full h-full object-cover"
                            src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
                            alt={skip.size}
                        />
                    {!skip.allowed_on_road && (
                        <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-yellow-100 text-yellow-800 border border-yellow-300 px-2 py-1  text-xs font-medium z-10 shadow-sm max-w-[90%]" style={{ borderRadius: '0 5px 0 0' }}>
                            <svg className="w-3.5 h-3.5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.518 11.593c.75 1.333-.213 2.99-1.742 2.99H3.48c-1.53 0-2.492-1.657-1.742-2.99L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a.75.75 0 01-.75-.75V8a.75.75 0 011.5 0v2.25c0 .414-.336.75-.75.75z" clipRule="evenodd" />
                            </svg>
                            Not Allowed On Public Road
                        </div>
                    )}
                    </div>
                        
                    <div className="p-5">
                        <button type="button" className="appearance-none text-left">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 ">
                                {skip.size} Yarder Skip
                            </h5>
                        </button>
                        <div className='mb-3'>
                            <div className=' flex  items-center '>
                                <p className=" font-semibold text-white ">
                                    £{skip.price_before_vat}
                                </p>
                                <p className='text-xs text-gray-400 ml-2'>/ 14 days</p>
                            </div>
                            <p className="mb-3 text-gray-400  text-xs  ">
                                £{priceWithVat} (incl. VAT {skip.vat}%)
                            </p>
                        </div>
                        <div className='mb-3'>
                            <p className={` font-normal  ${skip.per_tonne_cost !== null ? 'text-gray-100' : 'text-gray-700'} `} >
                                £{skip.per_tonne_cost || '0.00'}  per tonne
                            </p>
                            <p className={` font-normal  ${skip.transport_cost !== null ? 'text-gray-100' : 'text-gray-700'} `}>
                                £{skip.transport_cost || '0.00'}  transport cost
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex  items-center m-4'>
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                        onClick={() => {
                            setModalSkipData(skip);
                            setIsModalOpen(true);
                        }}
                        style={{ background: 'rgb(0,55,193)' }}
                    >
                        Read more
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
