import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {

  const { id } = useParams();
  const navigate = useNavigate();

  const teamMembers = {
    1: {
      name: "Prem",
      role: "Strategy Planning & Business Developer",
      description:
        "Prem specializes in building strategic business solutions, identifying growth opportunities, and developing strong client relationships for long-term success.",
    },

    2: {
      name: "Akhil",
      role: "Execution & Performance Optimization",
      description:
        "Akhil manages campaign execution and performance optimization, ensuring every project delivers measurable business results efficiently.",
    },

    3: {
      name: "Praveen",
      role: "Content Creator",
      description:
        "Praveen creates engaging digital content and creative branding materials that enhance audience engagement and business visibility.",
    },
  };

  const member = teamMembers[id];

  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl">

      <h2 className="text-4xl font-bold mb-4">
        {member.name}
      </h2>

      <p className="text-yellow-500 text-xl font-semibold mb-6">
        {member.role}
      </p>

      <p className="text-gray-600 leading-8 text-lg mb-10">
        {member.description}
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Back To Home
      </button>

    </div>
  );
}

export default UserProfile;