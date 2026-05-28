import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-5">
            Our Core Team
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the professionals behind our business growth,
            marketing strategies, and creative digital solutions.
          </p>

        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Prem */}
          <Link
            to="1"
            className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold mb-3">
              Prem
            </h2>

            <p className="text-yellow-500 font-semibold mb-5 text-lg">
              Strategy Planning & Business Developer
            </p>

            <p className="text-gray-600 leading-7">
              Specializes in business growth strategies,
              client acquisition, and long-term development planning
              for modern brands and startups.
            </p>

          </Link>

          {/* Akhil */}
          <Link
            to="2"
            className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold mb-3">
              Akhil
            </h2>

            <p className="text-yellow-500 font-semibold mb-5 text-lg">
              Execution & Performance Optimization
            </p>

            <p className="text-gray-600 leading-7">
              Focuses on campaign execution, performance analysis,
              and optimizing marketing strategies for maximum results.
            </p>

          </Link>

          {/* Praveen */}
          <Link
            to="3"
            className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold mb-3">
              Praveen
            </h2>

            <p className="text-yellow-500 font-semibold mb-5 text-lg">
              Content Creator
            </p>

            <p className="text-gray-600 leading-7">
              Creates engaging and creative content that helps
              businesses connect with audiences and strengthen brand identity.
            </p>

          </Link>

        </div>

        {/* Nested Route Output */}
        <div className="mt-16">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default User;