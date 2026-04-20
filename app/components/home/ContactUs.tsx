export default function ContactUs() {
  return (
    <>

    <section id="contact-us" className=" py-16 bg-white">
      <div className=" max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#282828] mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-12">
          Have a question? We'd love to hear from you.
        </p>

        {/* Contact Info */}
        
        <div className=" flex flex-col md:flex-row justify-between gap-8">
          {/* Email */}
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              Email
            </p>
            <a
              href="mailto:info@furniturepro.com"
              className="text-lg text-[#282828] hover:text-[#ffae00] transition-colors font-medium"
            >
              info@furnish.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              Phone
            </p>
            <a
              href="tel:+1234567890"
              className="text-lg text-[#282828] hover:text-[#ffae00] transition-colors font-medium"
            >
              +1 (234) 567-890
            </a>
          </div>

          {/* Address */}
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              Address
            </p>
            <p className="text-md text-[#282828]">
              123 Furniture Street<br />
              New York, NY 10001
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Hours
             
            </p>
            <p className="text-md text-[#282828]">
              Mon - Fri: 9AM - 6PM<br />
              Sat: 10AM - 4PM<br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}