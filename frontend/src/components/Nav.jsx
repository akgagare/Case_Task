import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
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
  );
};

export default Nav;
