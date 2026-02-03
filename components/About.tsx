export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main About Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              About Avixr Technologies Pvt Ltd
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Avixr Technologies Pvt Ltd is a research-driven software company founded by KV Avinash Sarma,
              with extensive expertise in development. We excel in transforming visionary ideas into top-tier
              mobile and web solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our mission is to deliver highly efficient, scalable, and user-centric business solutions using
              cutting-edge technologies while adhering to the highest industry standards.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Why Choose Us */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <img
                  src="/why.png"
                  alt="Why Choose Us"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Why Choose Us
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Expertise in cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Customized solutions tailored to business needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>On-time delivery with uncompromised quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>End-to-end support from ideation to post-launch maintenance</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <img
                  src="/vision.png"
                  alt="Vision"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                At Avixr Technologies Pvt Ltd, we envision a world where technology empowers businesses to
                achieve their full potential. Our goal is to lead the industry by delivering groundbreaking
                digital solutions that drive innovation, foster growth, and create lasting impact.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <img
                  src="/mission.png"
                  alt="Mission"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform Ideas into Reality - We transform innovative concepts into functional, high-quality
                digital solutions that create meaningful impact. Each project undergoes rigorous evaluation
                and refinement before moving into design and development, ensuring innovation, quality, and
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}