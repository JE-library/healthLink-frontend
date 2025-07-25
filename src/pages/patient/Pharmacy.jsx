import React, { useState } from "react";
import { MapPin, CheckCircle } from "lucide-react";

const Pharmacy = () => {
  const [prescription, setPrescription] = useState(null);
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      setPrescription(null);
    } else {
      setError("");
      setPrescription(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prescription || !address) {
      setError("Please upload your prescription and enter your delivery address.");
      return;
    }

    // Simulated API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPrescription(null);
    setAddress("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-6">
        {submitted ? (
          <div className="text-center space-y-4">
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
            <h2 className="text-2xl font-semibold">Prescription Sent!</h2>
            <p className="text-gray-600">Your medications will be delivered shortly.</p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Another
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Upload Prescription</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium">Prescription (PDF/Image)</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="mt-2 w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Delivery Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  className="mt-2 w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
