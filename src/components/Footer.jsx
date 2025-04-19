import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 - About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">IPL Score Tracker</h3>
          <p className="text-sm text-gray-400">
            The ultimate destination for IPL cricket fans to stay updated with
            live scores, team standings, and match schedules.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Live Scores</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Stats</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 mb-3">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <i className="fab fa-twitter text-white text-lg"></i>
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <i className="fab fa-facebook-f text-white text-lg"></i>
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <i className="fab fa-instagram text-white text-lg"></i>
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <i className="fab fa-youtube text-white text-lg"></i>
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Download our mobile app for a better experience
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
