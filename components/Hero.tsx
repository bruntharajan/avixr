export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-blue-600">Simplifying complex ideas into </span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              powerful, scalable digital solutions.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Smart solutions for complex challenges, simplified pathways to your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <a
              href="#services"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors text-center"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}