"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import SchoolCard from "@/components/SchoolCard";
import { useRouter } from "next/navigation";

const ShowSchool = () => {
  const [schoolData, setSchoolData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function getPageData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/schools/showschool"
        );
        console.log(response);
        setSchoolData(response.data.data);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    }
    getPageData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-purple-200 ">
      <button
        onClick={() => router.back()}
        className="bg-white text-blue-500 py-2 px-4 m-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Home
      </button>
      <div className="w-full flex justify-center items-center flex-wrap gap-10">
        {schoolData &&
          schoolData.map((ele, idx) => (
            <SchoolCard
              key={idx + "data"}
              name={ele.name}
              address={ele.address}
              city={ele.city}
              contact={ele.contact}
              email_id={ele.email_id}
              image={ele.image}
              state={ele.state}
            />
          ))}
      </div>
    </div>
  );
};

export default ShowSchool;
