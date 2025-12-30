'use client'

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-purple-600">
              Meet Our Founder
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-purple-200 shadow-lg">
                  <img
                    src="/founder.png"
                    alt="KV Avinash Sarma - Founder"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Founder image failed to load:', e.currentTarget.src);
                    }}
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2 text-gray-900">
                  KV Avinash Sarma
                </h3>
                <p className="text-xl text-purple-600 mb-4 font-semibold">
                  Founder & CEO - Avixr Technologies Pvt Ltd
                </p>
                <a
                  href="https://www.linkedin.com/in/avinashsarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-blue-600 hover:text-blue-700 mb-6 inline-block font-medium"
                >
                  Connect on LinkedIn →
                </a>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  KV Avinash Sarma brings extensive experience in the software startup industry, with a proven track record of leadership and strategic vision. His expertise lies in delivering high-quality software solutions and building successful technology teams.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Experienced in project management, business development, and client relations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Strong commitment to innovation and quality</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Expertise in managing cross-functional teams for complex software delivery</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Passionate about leadership and mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

