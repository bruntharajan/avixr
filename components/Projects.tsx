export default function Projects() {
  const projects = [
    {
      name: 'BrumBella',
      logoType: 'image',
      logo: '/brumbella-logo.png', // place the provided logo image in public/brumbella-logo.png
      description: '',
    },
    {
      name: 'Q Simutron',
      logoType: 'image',
      logo: '/qsimutron.png',
      description: '',
    },
    {
      name: 'Akasaperna',
      logoType: 'image',
      logo: '/img.png',
      description: 'AKASAPRERNA',
    },
    {
      name: 'Astrosolstice',
      logoType: 'image',
      logo: '/img2.png',
      description: '',
    },
    {
      name: 'ATRIBS',
      logoType: 'image',
      logo: '/img6.png',
      description: '',
    },
    {
      name: 'introto.in',
      logoType: 'image',
      logo: '/img5.png',
      description: '',
    },
    {
      name: 'SEIKO MARAICA',
      logoType: 'image',
      logo: '/img4.png',
      description: '',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Key Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our successful collaborations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow text-center"
            >
              <div className="mb-4 flex justify-center">
                {project.logoType === 'image' ? (
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-6xl">{project.logo}</span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {project.name}
              </h3>
              {project.description && (
                <p className="text-gray-600">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

