import React from 'react';

export default function SkipFilter({ filters, setFilters }) {

    const sizeRange = [
        { label: "All", value: "" },
        { label: "<10 yd", value: "<10" },
        { label: "10 - 20 yd", value: "10 - 20" },
        { label: ">20 yd", value: ">=20" },
      ]
    const priceRange = [
        { label: "All", value: "" },
        { label: "0 - 400£", value: "0-400" },
        { label: "400 - 500£", value: "400-500" },
        { label: "500£+", value: "500+" },
      ];
  return (
    <div className=" bg-slate-900 p-5 rounded-md mb-8 text-white w-full max-w-4xl mx-auto space-y-4 border border-gray-700">
      <div className="flex flex-col sm:flex-row gap-2 "> 
        
        <div className="flex-1  ">
          <label className="block mb-2 text-sm font-semibold text-gray-400">Size</label>
          <div className="flex flex-wrap gap-2">
            {sizeRange.map((opt) => (
              <button
                key={opt.value}
                className={`px-4 py-2 rounded-md border text-sm transition ${
                  filters.size === opt.value
                    ? "bg-blue-700 border-blue-600 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500"
                }`}
                onClick={() => setFilters({ ...filters, size: opt.value })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold text-gray-400">Price</label>
          <div className="flex flex-wrap gap-2">
            {priceRange.map((opt) => (
              <button
                key={opt.value}
                className={`px-4 py-2 rounded-md border text-sm transition ${
                  filters.price === opt.value
                    ? "bg-blue-700 border-blue-600 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500"
                }`}
                onClick={() => setFilters({ ...filters, price: opt.value })}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}