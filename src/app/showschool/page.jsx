"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import SchoolCard from "../../components/SchoolCard";
import { useRouter } from "next/navigation";

const ShowSchool = () => {
  const [schoolData, setSchoolData] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function getPageData() {
      try {
        const response = await axios.get("/api/schools/showschool");
        setSchoolData(response.data.data);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    }
    getPageData();
  }, []);

  const filteredSchools = schoolData
    ? schoolData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCity === "" || item.city.toLowerCase() === selectedCity.toLowerCase())
      )
    : [];

  const cities = schoolData
    ? Array.from(new Set(schoolData.map((item) => item.city)))
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200">
      <div>
        <label htmlFor="city">Select City:</label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => router.back()}
        className="bg-white text-blue-500 py-2 px-4 m-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Home
      </button>
      <div className="w-full flex justify-center items-center flex-wrap gap-10">
        {filteredSchools.map((item, ind) => (
          <SchoolCard
            key={ind + "data"}
            name={item.name}
            address={item.address}
            city={item.city}
            image={item.image}
            state={item.state}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowSchool;
