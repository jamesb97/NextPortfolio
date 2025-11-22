"use client";
import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import { motion, useInView } from "framer-motion";
import { videosData } from "../videosdata";

const VideosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="videos" className="my-12 md:my-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Latest Videos
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {videosData.map((video, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <VideoCard
              imgUrl={video.image}
              title={video.title}
              description={video.description}
              previewUrl={video.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default VideosSection;
