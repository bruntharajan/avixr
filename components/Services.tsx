export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your needs',
    },
    {
      icon: '🎨',
      title: 'UI/UX & Graphic Designing',
      description: 'Beautiful, user-friendly designs that engage and convert',
    },
    {
      icon: '⚙️',
      title: 'Technical Consulting',
      description: 'Expert guidance for your technology decisions',
    },
    {
      icon: '🎓',
      title: 'LMS & ERP Solutions',
      description: 'Comprehensive learning and enterprise resource planning systems',
    },
    {
      icon: '⚡',
      title: 'Automation',
      description: 'Streamline your processes with intelligent automation',
    },
    {
      icon: '🤖',
      title: 'AI, ML & Web3',
      description: 'Next-generation technologies for future-ready solutions',
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Data-driven strategies to boost your online presence',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-purple-600">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Avixr Technologies Pvt Ltd delivers innovative and reliable IT solutions across multiple domains
          </p>
          {/* Decorative underline */}
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

