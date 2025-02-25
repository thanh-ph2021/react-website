import { Link } from 'react-router-dom'
import { resources } from '../resource';

import "./app.css";

export default function App() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl place-items-center mx-auto">
        {resources.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 w-80"
          >
            <div className="w-20 h-20 flex justify-center items-center bg-gray-200 rounded-full shadow-md">
              <img src={item.logo} alt="logo-app" className="w-14 h-14 object-contain" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-4">{item.name}</h2>
            <div className="flex gap-4 mt-3">
              <Link to={`/react-website/privacy-policy/${item.id}`} className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                Privacy Policy
              </Link>
              <Link to={`/react-website/terms-of-service/${item.id}`} className="px-4 py-2 text-sm text-white bg-gray-600 rounded-md hover:bg-gray-700 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}