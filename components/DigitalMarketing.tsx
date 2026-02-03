// export default function DigitalMarketing() {
//   const services = [
//     {
//       icon: '🔍',
//       title: 'SEO',
//       description: 'Keyword optimization, on-page & off-page SEO, technical SEO, and link building.',
//     },
//     {
//       icon: '📱',
//       title: 'SMM',
//       description: 'Social media strategies, content creation, audience engagement, and paid campaigns.',
//     },
//     {
//       icon: '⚡',
//       title: 'PPC',
//       description: 'Google Ads, social media advertising, retargeting, and budget optimization.',
//     },
//     {
//       icon: '📊',
//       title: 'Content Marketing',
//       description: 'Blogs, website content, videos, and email marketing',
//     },
//     {
//       icon: '✉️',
//       title: 'Email Marketing & Automation',
//       description: 'Personalized campaigns, segmentation, drip campaigns, and analytics',
//     },
//   ]

//   const platforms = [
//     { 
//       name: 'Google', 
//       icon: '/Screenshot 2025-12-29 at 4.27.19 PM.png',
//       url: 'https://share.google/DtNk1wkdKMF0j1ZrO'
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: '/Screenshot 2025-12-29 at 4.30.37 PM.png',
//       url: 'https://www.linkedin.com/company/avixr-private-limited/'
//     },
//     { 
//       name: 'Instagram', 
//       icon: '/Screenshot 2025-12-29 at 4.29.26 PM.png',
//       url: 'https://www.instagram.com/avixr_pvt_ltd/'
//     },
//   ]

//   return (
//     <section id="digital-marketing" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//             Digital Marketing Solutions
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
//             Boost Your Brand, Maximize Your Growth.
//           </p>
//           <p className="text-lg text-gray-700 max-w-4xl mx-auto">
//             In today's digital landscape, a strong online presence is crucial for business success. Our comprehensive digital marketing solutions help you reach your target audience, engage effectively, and drive measurable results.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
//             >
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Platforms Section */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
//             Platforms We Leverage
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
//             {platforms.map((platform, index) => (
//               <a
//                 key={index}
//                 href={platform.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer block"
//               >
//                 <div className="mb-4 flex justify-center">
//                   <img
//                     src={platform.icon}
//                     alt={`${platform.name} logo`}
//                     className="h-12 w-auto object-contain"
//                   />
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900">{platform.name}</h4>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
const services = [
  {
    icon: "/seo.png",
    title: "SEO",
    description:
      "Keyword optimization, on-page & off-page SEO, technical SEO, and link building.",
  },
  {
    icon: "/ssm.png",
    title: "SMM",
    description:
      "Social media strategies, content creation, audience engagement, and paid campaigns.",
  },
  {
    icon: "/ppc.png",
    title: "PPC",
    description:
      "Google Ads, social media advertising, retargeting, and budget optimization.",
  },
  {
    icon: "/conte.png",
    title: "Content Marketing",
    description: "Blogs, website content, videos, and email marketing",
  },
  {
    icon: "/email.png",
    title: "Email Marketing & Automation",
    description:
      "Personalized campaigns, segmentation, drip campaigns, and analytics",
  },
]
