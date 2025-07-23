import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <img
        src="https://illustrations.popsy.co/gray/error.svg"
        alt="404 Not Found"
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-4xl sm:text-6xl font-extrabold text-primary mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-xl">
        Sorry, the page you're looking for doesn’t exist or may have been moved. Let’s get you back on track.
      </p>
      <Link
        to="/"
        className="bg-primary-body text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-primary transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
