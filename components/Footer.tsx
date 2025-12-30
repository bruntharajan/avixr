export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">AVIXR TECHNOLOGIES PVT LTD</h3>
          <p className="text-gray-300 text-lg mb-4">
            Simplifying complex ideas into powerful, scalable digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
            <span>+91 81226 43899</span>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:ceo@avixr.in" className="hover:text-white transition-colors">
              ceo@avixr.in
            </a>
          </div>
        </div>
        <div className="border-t border-purple-700 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Avixr Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

