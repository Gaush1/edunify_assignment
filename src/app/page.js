import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-200 to-purple-200">
      <div className="text-center text-gray-800">
        <h1 className="text-5xl font-extrabold mb-8">Welcome to SchoolHub</h1>
        <p className="text-lg text-gray-600 mb-6">
          Empowering Education, Building Futures
        </p>
        <div className="flex flex-col gap-6">
          <Link href="/showschool">
            <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
              Explore Schools
            </button>
          </Link>
          <Link href="/addschool">
            <button className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
              Add a School
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
