export default function ContactUs() {
  return (
    <section id="contact-us" className="py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-[#ffae00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our furniture? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-[#282828] p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-white mb-3">Address</h3>
            <p className="text-gray-300 leading-relaxed">
              123 Furniture Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-[#ffae00] hover:text-yellow-500 transition-colors text-lg font-semibold block mb-2"
            >
              +1 (234) 567-890
            </a>
            <p className="text-gray-400 text-sm">
              Mon-Fri: 9AM - 6PM EST
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
            <a
              href="mailto:info@furniturepro.com"
              className="text-[#ffae00] hover:text-yellow-500 transition-colors text-lg font-semibold block mb-2"
            >
              info@furniturepro.com
            </a>
            <p className="text-gray-400 text-sm">
              Reply within 24 hours
            </p>
          </div>
        </div>

        {/* Business Hours Section */}
        <div className="mt-16 bg-gray-900 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Business Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-[#ffae00] font-semibold mb-2">Weekdays</p>
              <p className="text-gray-300">Monday - Friday</p>
              <p className="text-gray-400">9:00 AM - 6:00 PM EST</p>
            </div>
            <div>
              <p className="text-[#ffae00] font-semibold mb-2">Weekend</p>
              <p className="text-gray-300">Saturday</p>
              <p className="text-gray-400">10:00 AM - 4:00 PM EST</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6">
            Closed on Sundays and public holidays
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Follow us on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-[#ffae00] hover:text-yellow-500 transition-colors text-2xl"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="text-[#ffae00] hover:text-yellow-500 transition-colors text-2xl"
              aria-label="Instagram"
            >
              📷
            </a>
            <a
              href="#"
              className="text-[#ffae00] hover:text-yellow-500 transition-colors text-2xl"
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a
              href="#"
              className="text-[#ffae00] hover:text-yellow-500 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}