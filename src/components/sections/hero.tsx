import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative isolate min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8d5ff] via-blue-200 to-[#e6f0ff]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/20 to-indigo-400/30" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 h-96 w-96 animate-blob rounded-full bg-blue-500 opacity-30 mix-blend-multiply filter blur-xl" />
        <div className="absolute -bottom-8 right-0 h-96 w-96 animate-blob rounded-full bg-indigo-500 opacity-30 mix-blend-multiply filter blur-xl [animation-delay:2000ms]" />
      </div>
      <div className="relative mx-auto flex max-w-[88rem] flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-32">
        <h1 className="mb-4 pt-44 text-3xl font-bold leading-relaxed tracking-tight text-text-primary opacity-0 sm:pt-28 sm:text-4xl lg:pt-32 lg:text-5xl animate-in fade-in-0 slide-in-from-bottom-5 duration-300 [animation-delay:1350ms] [animation-fill-mode:forwards]">
          Get AI powered role-based insights, curated for you!
        </h1>
        <p className="mb-8 max-w-3xl py-4 text-lg leading-relaxed text-gray-600 opacity-0 sm:text-xl animate-in fade-in-0 slide-in-from-bottom-5 duration-300 [animation-delay:1550ms] [animation-fill-mode:forwards]">
          Adaapt AI seamlessly integrates data across departments and delivers actionable insights curated as per your roles right at your fingertips!
        </p>
        <a
          href="https://demo.adaapt.ai/"
          className="mb-12 rounded-lg bg-gradient-to-r from-purple-accent via-pink-accent to-pink-accent px-8 py-3 text-lg font-semibold text-white opacity-0 transition-opacity hover:opacity-90 animate-in fade-in-0 duration-300 [animation-delay:1750ms] [animation-fill-mode:forwards]"
        >
          Try Adaapt
        </a>
        <div className="mt-4 w-full max-w-5xl opacity-0 animate-in fade-in-0 zoom-in-95 duration-400 [animation-delay:1900ms] [animation-fill-mode:forwards]">
          <div className="relative">
            <div className="relative h-0 w-full pb-[calc(56.39%+25px)]">
              <iframe
                className="absolute left-0 top-0 h-full w-full rounded-xl border border-[rgba(63,95,172,0.35)] bg-white/5 shadow-[0px_0px_18px_rgba(26,19,72,0.15)] backdrop-blur-sm"
                src="https://app.storylane.io/demo/og5lh8byppha?embed=inline"
                title="Adaapt AI Demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;