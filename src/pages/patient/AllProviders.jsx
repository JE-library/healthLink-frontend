import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";

// Image import
import heroImage from "../../assets/doctor-hero.png"; 

const AllProviders = () => {
  const [providers, setProviders] = useState([]);
  const [query, setQuery] = useState({
    fullName: "",
    specialization: "",
    experienceYears: "",
  });

  const navigate = useNavigate();

  const fetchProviders = async (filters = {}) => {
    try {
      const response = await axios.get("/providers", { params: filters });
      const approvedProviders = response.data.providers.filter(
        (p) => p.status === "approved"
      );
      setProviders(approvedProviders);
    } catch (err) {
      console.error("Error fetching providers", err);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchProviders({
        fullName: query.fullName || undefined,
        specialization: query.specialization || undefined,
        experienceYears: query.experienceYears || undefined,
      });
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-blue-100 rounded-xl p-6 md:p-10 shadow-sm">
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 leading-snug">
            Find Trusted Care, <span className="text-blue-600">Faster</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            Search our network of highly qualified healthcare providers by
            specialty, experience, and more and book with confidence.
          </p>
        </div>

        <img
          src={heroImage}
          alt="Doctor illustration"
          className="w-full md:w-[300px] mt-6 md:mt-0"
        />
      </div>

      {/* Filters */}
      <div className="grid sm:grid-cols-3 gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
        <div className="flex items-center bg-white border-3 border-main-body focus:outline-primary-body rounded-lg px-3 py-2 shadow-sm">
          <Search className="w-4 h-4 text-blue-400 mr-2" />
          <input
            type="text"
            name="fullName"
            placeholder="Search by name"
            value={query.fullName}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-500"
          />
        </div>

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={query.specialization}
          onChange={handleChange}
          className="border-3 border-main-body focus:outline-primary-body rounded-lg px-3 py-2 text-sm w-full bg-white shadow-sm  placeholder:text-gray-500"
        />

        <input
          type="number"
          name="experienceYears"
          placeholder="Min. Years of Experience"
          value={query.experienceYears}
          onChange={handleChange}
          className="border-3 border-main-body focus:outline-primary-body rounded-lg px-3 py-2 text-sm w-full bg-white shadow-sm  placeholder:text-gray-500"
        />
      </div>

      {/* Provider Cards */}
      <div className="space-y-4">
        {providers.map((provider) => (
          <div
            key={provider._id}
            onClick={() => navigate(`/patient/providers/${provider._id}`)}
            className="flex flex-col sm:flex-row items-center justify-between bg-white hover:bg-blue-50 border border-gray-100 rounded-xl shadow-md px-4 py-4 cursor-pointer transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={provider.profilePhoto?.url}
                alt={provider.fullName}
                className="w-16 h-16 rounded-full object-cover border border-blue-300"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                 {provider.fullName}
                </h2>
                <p className="text-sm text-gray-600 capitalize">
                  {provider.specialization}
                </p>
              </div>
            </div>

            <div className="text-sm text-blue-700 mt-2 sm:mt-0 sm:text-right">
              <p className="font-medium">
                {provider.experienceYears} yrs experience
              </p>
            </div>
          </div>
        ))}
      </div>

      {providers.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No specialists found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default AllProviders;
