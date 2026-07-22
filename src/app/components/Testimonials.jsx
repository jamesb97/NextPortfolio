"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "../../testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="testimonials" className="my-12 md:my-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Testimonials
      </h2>
      <p className="text-center text-white mb-8">
        Here are some of the things that my clients have said about me.
      </p>
      <ul ref={ref}>
        {testimonials.map((testimonial, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
