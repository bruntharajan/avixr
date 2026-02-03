export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-200">
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about" className="hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gray-900 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-900 transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Empty Middle Column (to match spacing like image) */}
          <div></div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <a
                  href="mailto:ceo@avixr.in"
                  className="hover:text-gray-900 transition-colors"
                >
                  ceo@avixr.in
                </a>
              </p>
              <p>Chennai, India</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <img
                  src="/Screenshot 2025-12-29 at 4.30.37 PM.png"
                  alt="LinkedIn"
                  className="h-5 w-5 object-contain"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <img
                  src="/youtube.png"
                  alt="YouTube"
                  className="h-5 w-5 object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <img
                  src="/Screenshot 2025-12-29 at 4.29.26 PM.png"
                  alt="Instagram"
                  className="h-5 w-5 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-sm text-gray-500">
          <p>© 2025 Avixr Technologies Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

