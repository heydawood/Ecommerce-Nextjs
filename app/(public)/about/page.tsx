import Image from 'next/image';
import Link from 'next/link';
import { teamMembers, values } from './data';

export const metadata = {
  title: 'About Us | Furnish',
  description: 'Learn about Furnish, your trusted online furniture retailer.',
};



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#282828] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Furnish</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your living spaces with our curated collection of premium furniture. Since 2015,
                we've been committed to delivering exceptional quality, stunning design, and unbeatable value
                to homes across the country.
              </p>
              <Link
                href="/#shop"
                className="inline-block px-8 py-4 bg-[#ffae00] text-[#282828] font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 text-lg"
              >
                Shop Our Collection
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop"
                  alt="Modern furniture showroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#282828] mb-4">Our Story</h2>
          <div className="h-1 w-20 bg-[#ffae00] mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
                alt="Furnish journey"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Furnish was founded with a simple vision: to make premium furniture accessible to everyone.
                Our founders, Sarah and Michael, spent years in the furniture industry, witnessing the gap between
                quality and affordability. They decided to change that.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small online store with 50 products has grown into a thriving business serving
                over 100,000 happy customers nationwide. We've built strong relationships with manufacturers,
                designers, and suppliers to bring you the best furniture at unbeatable prices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we offer over 5,000 products across multiple categories, from living room essentials to
                bedroom collections, office furniture, and outdoor pieces. Every item is carefully selected and
                tested for quality, durability, and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#282828]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <div className="h-1 w-20 bg-[#ffae00] mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white bg-opacity-5 border-l-4 border-[#ffae00] p-8 rounded-lg hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#ffae00] mb-3">{value.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-[#ffae00] mb-2">100K+</div>
              <p className="text-xl text-gray-700 font-semibold">Happy Customers</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#ffae00] mb-2">5K+</div>
              <p className="text-xl text-gray-700 font-semibold">Products</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#ffae00] mb-2">10+</div>
              <p className="text-xl text-gray-700 font-semibold">Years Experience</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-[#ffae00] mb-2">99%</div>
              <p className="text-xl text-gray-700 font-semibold">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#282828] mb-4">Meet Our Team</h2>
          <div className="h-1 w-20 bg-[#ffae00] mb-12"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 border-t-4 border-[#ffae00]">
                  <h3 className="text-xl font-bold text-[#282828] mb-2">{member.name}</h3>
                  <p className="text-[#ffae00] font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#282828] mb-4">Why Choose Furnish?</h2>
          <div className="h-1 w-20 bg-[#ffae00] mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-[#282828] mb-3">Fast Delivery</h3>
              <p className="text-gray-700">
                Free shipping on orders over $500. We deliver to your doorstep in 7-14 business days.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-[#282828] mb-3">Quality Guarantee</h3>
              <p className="text-gray-700">
                All our products come with manufacturer warranties. If something's wrong, we make it right.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold text-[#282828] mb-3">Expert Support</h3>
              <p className="text-gray-700">
                Our furniture experts are here to help. Chat, call, or email us 24/7 for advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#282828] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Browse our collection of premium furniture and find the perfect pieces for your home. 
            Every purchase is backed by our satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-[#ffae00] text-[#282828] font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 text-lg"
            >
              Browse Collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#ffae00] text-[#ffae00] font-bold rounded-lg hover:bg-[#ffae00] hover:text-[#282828] transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}