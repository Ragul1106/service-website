import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '13+', label: 'Years Experience' },
    { value: '100+', label: 'Emergency Repairs' },
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '500+', label: 'Skilled Professionals' },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {index !== 0 && (
              <span className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-20 bg-black"></span>

            )}
            <p className="text-5xl font-bold text-gray-500">{stat.value}</p>
            <p className="text-2xl font-bold text-gray-600 mt-5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
