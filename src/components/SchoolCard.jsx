import Image from "next/image";

const SchoolCard = ({ name, address, city, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full sm:w-[360px] h-full">
      <div className="relative h-56 sm:h-64">
        <Image
          className="w-full h-full object-cover object-center"
          src={`/schoolImages/${image}`}
          alt="School Image"
          layout="fill"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">School:</span> {name}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> {address}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">City:</span> {city}
        </p>
      </div>
      <style jsx>{`
        /* Additional styles for the SchoolCard component */
        .relative {
          width: 100%;
          padding-top: 75%; /* Adjust this for the desired aspect ratio */
        }

        @media (min-width: 640px) {
          .relative {
            padding-top: 50%; /* Adjust this for the desired aspect ratio on larger screens */
          }
        }

        .text-gray-700 {
          /* You can adjust the text color as needed */
          color: #4a5568;
        }
      `}</style>
    </div>
  );
};

export default SchoolCard;
