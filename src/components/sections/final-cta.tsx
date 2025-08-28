import Link from 'next/link';

const FinalCtaSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-50 shadow-lg">
          {/* Decorative animated blobs */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute right-0 top-0 h-64 w-64 animate-blob rounded-full bg-purple-200 opacity-50 blur-2xl mix-blend-multiply filter [animation-delay:_2s]"></div>
            <div className="absolute -bottom-16 -left-16 h-64 w-64 animate-blob rounded-full bg-blue-200 opacity-50 blur-2xl mix-blend-multiply filter [animation-delay:_4s]"></div>
          </div>

          {/* Content */}
          <div className="relative py-12 px-6 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
              AI-POWERED INSIGHTS
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience the new era of AI-powered insights
            </h2>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;