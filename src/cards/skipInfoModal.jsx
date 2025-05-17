import React from 'react'
import { useSkips } from '../context/getSkip';
import { useEffect } from 'react';



export default function SkipInfoModal() {

    const { isModalOpen, setIsModalOpen, modalSkipData } = useSkips();

    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isModalOpen]);

    return (
      <>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 w-full h-full flex items-center justify-center text-gray-200 p-4 bg-black bg-opacity-50 overflow-y-scroll sm:overflow-y-auto scrolling-touch">
            <div className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-md shadow-xl animate-fade-in max-h-[90vh] overflow-y-auto ">
              <img
                src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${modalSkipData.size}-yarder-skip.jpg`}
                alt={`${modalSkipData.size} Yarder Skip`}
                className="max-h-60 sm:max-h-72 md:max-h-80 object-contain w-full"
              /> 
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-center uppercase text-white">
                  The {modalSkipData.size} Yarder Skip
                </h2>
                <p className="mb-4 text-sm text-gray-300 leading-relaxed text-center">
                  The {modalSkipData.size} yarder skip is perfect for construction sites, home renovations, and garden clearances. It can hold a variety of materials, including soil, rubble, and general waste.
                </p>
                <div className="mb-4">
                  <p className="text-gray-400 font-semibold mb-2">Recommended for:</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Construction waste</li>
                    <li>Garden waste</li>
                    <li>Household waste</li>
                    <li>Office clearance</li>
                  </ul>
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-2 rounded shadow-lg"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
}
