import React from "react";
import DesignCard from "./DesignCard";
import Navbar from "../components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Designs
        </h2>
        <br />
        <p className="text-center mb-4">
          A list of some of my designs created with Adobe Suite.
        </p>
        <br />
        <main className="h-52 md:h-72 rounded-t-xl relative group px-4 py-12">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {/* <main className="h-52 md:h-72 rounded-t-xl relative-group" style={{ background: `url(${imgUrl})`}}> */}
            <DesignCard
              title="Coffee"
              description="Warm energetic colors"
              imageUrl="https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/coffee1.png?alt=media&token=69013e9a-0cb0-4ba0-bd07-93807512e2d0"
              link="https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/coffee1.png?alt=media&token=69013e9a-0cb0-4ba0-bd07-93807512e2d0"
            />
            <DesignCard
              title="Hamburger"
              description="Various topping mixtures"
              imageUrl="https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/hamburger.png?alt=media&token=39bb75c9-b062-4d34-b8f6-1453495f4391"
              link="https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/hamburger.png?alt=media&token=39bb75c9-b062-4d34-b8f6-1453495f4391"
            />
            <DesignCard
              title="Launch"
              description="Warm saturated color palette"
              imageUrl="https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/rocketship.png?alt=media&token=d7e20a0c-69f4-48ea-a446-71dacd22e7e3"
              link="https://firebasestorage.googleapis.com/v0/b/angulardesigns-aaa7c.appspot.com/o/rocketship.png?alt=media&token=d7e20a0c-69f4-48ea-a446-71dacd22e7e3"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
