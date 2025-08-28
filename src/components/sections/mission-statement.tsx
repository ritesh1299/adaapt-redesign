import React from 'react';

const MissionStatement = () => {
  const metrics = [
    { value: '85', label: 'Efficiency Increase' },
    { value: '20', label: 'Data Sources Integrated' },
    { value: '100', label: 'Hours Saved Weekly' },
    { value: '200', label: 'ROI Improvement' },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="container mx-auto rounded-xl bg-gray-50 px-6 py-12 text-center sm:px-12 xl:max-w-7xl">
        <div className="mx-auto mb-16 max-w-5xl">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Unlock AI-driven insights to supercharge everyone's potential and drive impactful change.
          </h2>
          <h3 className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            Adaapt is dedicated to transforming how enterprises access and utilize data. Our mission is to provide a seamless AI-driven platform that connects multiple databases, enabling instant insights and informed decision-making for enhanced productivity.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="animate-text mb-2 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
                {metric.value}+
              </div>
              <p className="text-xl font-semibold text-gray-700">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;