import React from "react";
import Navbar from "../components/Navbar";
import { journeyData, achievements } from "./journey";
import Link from "next/link";
import Footer from "../components/Footer";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Journey
        </h2>
        <br />
        <p className="text-center mb-4">
          {journeyData.map((journeyData) => (
            <p key={journeyData.id}>{journeyData.title}</p>
          ))}
        </p>
        <p className="text-center mb-4">
          {achievements.map((achievements) => (
            <li key={achievements.id}>{achievements.name}</li>
          ))}
        </p>
        <p className="text-center mb-4">
          {journeyData.map((journeyData) => (
            <p key={journeyData.id}>{journeyData.description}</p>
          ))}
        </p>
        <p className="text-center">
          Return <Link href="/">Home</Link>
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default page;
