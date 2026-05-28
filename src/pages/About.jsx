function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-12">

          <h1 className="text-5xl font-bold text-center mb-10">
            About Our Agency
          </h1>

          <p className="text-lg text-gray-600 leading-8 mb-8">
            We are a modern digital business promotion agency
            focused on helping brands grow faster in the online world.
          </p>

          <p className="text-lg text-gray-600 leading-8 mb-12">
            Our team specializes in digital marketing, social media
            growth, SEO optimization, and brand awareness campaigns
            that help businesses reach more customers globally.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">

            <div className="bg-black text-white p-10 rounded-2xl text-center">

              <h2 className="text-5xl font-bold text-yellow-400 mb-4">
                250+
              </h2>

              <p className="text-lg">
                Businesses Promoted
              </p>

            </div>

            <div className="bg-yellow-400 p-10 rounded-2xl text-center">

              <h2 className="text-5xl font-bold mb-4">
                5 Years
              </h2>

              <p className="text-lg">
                Industry Experience
              </p>

            </div>

            <div className="bg-black text-white p-10 rounded-2xl text-center">

              <h2 className="text-5xl font-bold text-yellow-400 mb-4">
                98%
              </h2>

              <p className="text-lg">
                Client Satisfaction
              </p>

            </div>

          </div>

          {/* Mission */}
          <div className="bg-gray-100 p-10 rounded-3xl">

            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Our mission is to empower businesses with innovative
              marketing solutions that create long-term growth,
              customer engagement, and brand success.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default About;