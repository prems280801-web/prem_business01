import { useState } from "react";

function Home() {
    const [showContact, setShowContact] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-28 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Grow Your Business <br />
            With Powerful Digital Promotion
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We help startups, brands, and businesses increase
            their online presence through modern marketing,
            branding, and digital growth strategies.
          </p>

          <button
  onClick={() =>
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition"
>
  Explore Services
</button>

        </div>
      </section>

      {/* Services Section */}
<section id="services" className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">

              <h3 className="text-3xl font-bold mb-5">
                Social Media Marketing
              </h3>

              <p className="text-gray-600 leading-7">
                Build your audience and grow engagement through
                strategic social media campaigns across all platforms.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">

              <h3 className="text-3xl font-bold mb-5">
                Brand Promotion
              </h3>

              <p className="text-gray-600 leading-7">
                Create a strong and memorable brand identity
                that attracts customers and builds trust.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">

              <h3 className="text-3xl font-bold mb-5">
                SEO Optimization
              </h3>

              <p className="text-gray-600 leading-7">
                Improve your Google rankings and drive more
                traffic to your business website organically.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Grow Your Business?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Partner with us and take your business to the next level.
          </p>

          <button
  onClick={() => setShowContact(!showContact)}
  className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
>
  Contact Us
</button>
{showContact && (
  <div className="mt-8 bg-white text-black p-6 rounded-2xl shadow-xl max-w-md mx-auto">
    <h3 className="text-2xl font-bold mb-4">Contact Details</h3>

    <p className="mb-2">
      📧 Email: PAP&CO@gmail.com
    </p>

    <p>
      📸 Instagram: PAP&CO
    </p>
  </div>
)}

        </div>
      </section>
      
    </div>
  );
}

export default Home;