import Image from "next/image";
import { motion } from "framer-motion";

const DesignCard = ({ title, description, imageUrl, link }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      //   whileHover={{ scale: 1.03 }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View Design →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default DesignCard;
