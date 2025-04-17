import Image from "next/image";
//import { motion } from "framer-motion";

const DesignCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative group h-52 md:h-72">
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="object-cover w-full h-40"
      />
      <div className="p-3"></div>
      <h3 className="text-lg text-black font-semibold mb-1 mt-2 px-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-2 px-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:underline text-sm mb-2 px-2"
        >
          View Design →
        </a>
      )}
    </div>
  );
};

export default DesignCard;
