import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[30rem] lg:w-[40rem]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome to ExigirTech
        </h2>
        <div className="flex flex-col gap-4">
          <Link to="/form">
            <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Add New Case
            </button>
          </Link>
          <Link to="/table">
            <button className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              View All Cases
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
