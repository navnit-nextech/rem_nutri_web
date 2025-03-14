import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";

const AboutTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zoe Williams",
      role: "Founder & Principal Physiotherapist",
      image: "/images/about/team/1.avif",
      linkedin: "https://linkedin.com/in/zoewilliams",
    },
    {
      id: 2,
      name: "Marcus Turner",
      role: "Physiotherapist",
      image: "/images/about/team/2.avif",
      linkedin: "https://linkedin.com/in/marcusturner",
    },
    {
      id: 3,
      name: "Ava Rodriguez",
      role: "Physiotherapist",
      image: "/images/about/team/3.avif",
      linkedin: "https://linkedin.com/in/avarodriguez",
    },
    {
      id: 1,
      name: "Zoe Williams",
      role: "Founder & Principal Physiotherapist",
      image: "/images/about/team/4.avif",
      linkedin: "https://linkedin.com/in/zoewilliams",
    },
    {
      id: 2,
      name: "Marcus Turner",
      role: "Physiotherapist",
      image: "/images/about/team/5.webp",
      linkedin: "https://linkedin.com/in/marcusturner",
    },
    {
      id: 3,
      name: "Ava Rodriguez",
      role: "Physiotherapist",
      image: "/images/about/team/6.webp",
      linkedin: "https://linkedin.com/in/avarodriguez",
    },
  ];

  return (
    <div className="bg-[#024027] text-white pb-10 sm:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <div className="py-12 pt-32">
            <h2 className="font-['Libre_Baskerville',serif] text-3xl md:text-5xl mb-5 max-w-4xl">
              Meet your{" "}
              <span className="text-[#75FB91]">dedicated partners</span> in
              wellness
            </h2>
            <p className="text-lg max-w-3xl mb-12 md:px-0">
              Embark on a journey to optimal well-being with our dedicated
              partners in wellness. We are committed to supporting and guiding
              you on your path to a healthier and happier life.
            </p>
          </div>
        </ScrollAnimation>

        {/* team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {teamMembers.map((member, index) => (
            <ScrollAnimation key={member.id} delay={0.1 * (index % 3)}>
              <div className="bg-[#F5F0E1] text-black rounded-2xl overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold font-['Libre_Baskerville',serif]">
                        {member.name}
                      </h3>
                      <p className="text-[#024027]">{member.role}</p>
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-[#024027]"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
