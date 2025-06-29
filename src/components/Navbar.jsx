// import React from "react";
// import SearchBar from "./SearchBar";
// import GenreDropdown from "./GenreDropdown";
// import CountryDropdown from "./CountryDropdown";

// function Navbar({ genres, countries, onGenreSelect, onCountrySelect, onSearch }) {
//   return (
//     <nav className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between shadow-md relative z-10">
//       {/* Left - Genre and Country Dropdowns */}
//       <div className="flex items-center space-x-4">
//         <GenreDropdown genres={genres} onGenreSelect={onGenreSelect} />
//         <CountryDropdown countries={countries} onCountrySelect={onCountrySelect} />
//       </div>

//       {/* Right - Search Bar */}
//       <div className="flex justify-end w-1/3">
//         <SearchBar onSearch={onSearch} />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// // src/components/Navbar.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import GenreDropdown from "./GenreDropdown";
// import CountryDropdown from "./CountryDropdown";

// function Navbar({ genres, countries, onGenreSelect, onCountrySelect, onSearch ,onReset }) {
//   const navigate = useNavigate();

//   const handleGoHome = () => {
//     onReset();
//     navigate("/");
//   };

//   return (
//     <nav className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between shadow-md relative z-10">
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={handleGoHome}
//           className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
//         >
//           Home
//         </button>
//         <GenreDropdown genres={genres} onGenreSelect={onGenreSelect} />
//         <CountryDropdown countries={countries} onCountrySelect={onCountrySelect} />
//       </div>

//       <div className="flex justify-end w-1/3">
//         <SearchBar onSearch={onSearch} />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import GenreDropdown from "./GenreDropdown";
import CountryDropdown from "./CountryDropdown";

function Navbar({ genres, countries, onGenreSelect, onCountrySelect, onSearch, onReset }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    onReset();
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md relative z-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap items-center space-x-2 gap-y-2">
          <button
            onClick={handleGoHome}
            className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
          >
            Home
          </button>
          <GenreDropdown genres={genres} onGenreSelect={onGenreSelect} />
          <CountryDropdown countries={countries} onCountrySelect={onCountrySelect} />
        </div>

        <div className="w-full md:w-1/3">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

