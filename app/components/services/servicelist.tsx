"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

type ApproachTab = "Evidence" | "Holistic" | "Empowering";

interface TabContentItem {
  title: string;
  description: string;
  image: string;
}

const Topdecorative = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className=" fill-[#8FC2AA] absolute  rotate-180 left-[20%] "
  >
    <path d="M 11.589 31.972 C 11.589 33.132 12.528 34.067 13.674 34.048 L 20.877 33.926 C 32.426 33.731 41.892 43.152 41.892 54.841 L 41.892 58.141 C 41.892 61.364 39.31 63.978 36.124 63.978 C 32.939 63.978 30.357 61.364 30.357 58.141 L 30.357 54.841 C 30.357 49.675 26.173 45.511 21.069 45.598 L 13.866 45.719 C 6.275 45.847 0.054 39.655 0.054 31.972 C 0.054 24.289 6.275 18.098 13.866 18.225 L 21.069 18.347 C 26.173 18.433 30.357 14.269 30.357 9.102 L 30.357 5.904 C 30.357 2.68 32.939 0.067 36.124 0.067 C 39.31 0.067 41.892 2.68 41.892 5.904 L 41.892 9.102 C 41.892 20.792 32.426 30.213 20.877 30.018 L 13.674 29.897 C 12.528 29.878 11.589 30.812 11.589 31.972 Z"></path>
  </svg>
);

const servicelist = () => {
  const [activeTab, setActiveTab] = useState<ApproachTab>("Evidence");

  const tabContent: Record<ApproachTab, TabContentItem> = {
    Evidence: {
      title: "Fresh Meal Delivery Service ",
      description:
        "We are what we repeatedly eat. Healthy eating is not an act, but a habit.Felicity Luckey Enjoy delicious, healthy, and balanced meals delivered straight to your door. Rem Fresh is perfect for busy lifestyles or those seeking support with healthy eating. We offer a variety of meal plans to suit different dietary needs and preferences, all created by our internationally trained specialist dietitians, nutritionists and team of experienced chefs using fresh, high-quality ingredients.Don't worry, you won't be stuck munching on boring salads—our menu is diverse, authentic, and delicious. Plus, it will nourish and heal your body from the inside out! Our meal delivery plan is customisable. That means you can select how often you want your meals delivered, what kind of cuisine you want to eat, and whether you just want the recipes instead! Every journey is unique, and so is our programme! ",
      image:
        "https://framerusercontent.com/images/4pcOz1O3xO2KV3rdELIIAlQBo.jpg?scale-down-to=1024",
    },
    Holistic: {
      title: "Holistic wellness programs",
      description:
        "Comprehensive care for your overall well-being using a collaborative approach with health experts.",
      image:
        "https://framerusercontent.com/images/xwxrapMGZZvxYPvSiK8qgJD2vrs.jpg?scale-down-to=1024",
    },
    Empowering: {
      title: "Empowering patient education",
      description:
        "Emphasise patient education and empowerment in rehab by highlighting the importance of understanding conditions, treatment",
      image:
        "https://framerusercontent.com/images/lxAtPAUIneh071YKKbabBgH7edY.jpg?scale-down-to=2048",
    },
  };

  return (
    // <div className="w-full pt-40 relative bg-[#EBE5DA] min-h-00px]">

    <div className="w-full pt-30 pb-40 bg-[var(--background-color-plain2)] min-h-[700px]">
      {/* <Topdecorative /> */}

      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollAnimation>
          <h2 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-2xl sm:text-[40px] text-3xl  mb-4">
            The Fizeo Approach
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <p className="text-[var(--text-color-dark)] font-['DM_Sans','sans-serif'] text-lg sm:text-[20px] max-w-5xl mx-auto mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius<span className="hidden md:block"></span> enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros
            <span className="hidden md:block"></span> dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="inline-flex bg-[var(--background-color-plain)] -mb-5 sm:rounded-full rounded-2xl px-15 py-2 shadow-sm gap-10 max-sm:flex-wrap">
            {(["Evidence", "Holistic", "Empowering"] as ApproachTab[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2 max-sm:w-full  text-lg rounded-full text-[20px] font-['Libre_Baskerville',serif] transition-colors ${
                    activeTab === tab
                      ? "bg-[var(--background-color-dark)] text-[var(--text-color-plain)]"
                      : "text-[#043A22] hover:bg-fizeo-beige-bg/50"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </ScrollAnimation>

        {/* Tab content */}
        <ScrollAnimation delay={0.6}>
          <div className="relative rounded-xl  mb-10 w-[98%] max-w-[1400px] mx-auto">
            <AnimatePresence mode="wait">
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#8FC2AA] rounded-2xl z-0"></div>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative mt-12"
              >
                <motion.img
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  className="w-full h-[500px] md:h-[580px] object-cover rounded-3xl z-10"
                />
                <div className="absolute inset-0 bg-black/50 z-20 rounded-3xl"></div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                className="absolute bottom-0 left-0 p-12 z-20 text-left"
              >
                <h3 className="text-[var(--text-color-plain)] text-[45px] font-['Libre_Baskerville',serif] mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-[var(--text-color-plain)] text-[20px] font-['DM_Sans', 'sans-serif'] text-lg max-w-2xl">
                  {tabContent[activeTab].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Green border accent */}
            {/* <div className="absolute bottom-0 right-0 w-full h-4 bg-[#8FC2AB]"></div>
            <div className="absolute top-0 right-0 w-4 h-full bg-[#8FC2AB]"></div> */}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default servicelist;
