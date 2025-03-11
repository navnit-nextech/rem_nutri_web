import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="w-full bg-[#024027] py-20 relative">
      {/* Top decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-fizeo-beige-bg border-r-[30px] border-r-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading section */}
        <div className="text-center mb-16">
          <h2 className="text-white font-serif text-4xl mb-4">
            Real stories, <span className="text-fizeo-mint-green">real transformations</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            These real stories illuminate the path to transformation, showcasing the impact of personalized care on physical well-being.
          </p>
        </div>

        {/* Video testimonial */}
        <div className="max-w-full mx-auto mb-16 relative flex justify-center">
  <div className="rounded-2xl overflow-hidden shadow-lg w-[900px]">
    <iframe
      className="w-full h-[500px] rounded-2xl"
      src="https://www.youtube.com/embed/W-XQS2NoRdc"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
            {/* Heart decoration */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
              <div className="w-12 h-12 bg-fizeo-peach rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 12.572L12 20L4.5 12.572C3.33333 11.4053 2.75 9.89867 2.75 8.05C2.75 6.20133 3.33333 4.69467 4.5 3.528C5.66667 2.36133 7.18333 1.778 9.05 1.778C10.9167 1.778 12.4333 2.36133 13.6 3.528L12 5.128L10.4 3.528C9.7 2.82933 8.85 2.48 7.85 2.48C6.85 2.48 6 2.82933 5.3 3.528C4.6 4.22733 4.25 5.072 4.25 6.065C4.25 7.05933 4.6 7.90467 5.3 8.604L12 15.2518L18.7 8.604C19.4 7.90467 19.75 7.05933 19.75 6.065C19.75 5.072 19.4 4.22733 18.7 3.528C18 2.82933 17.15 2.48 16.15 2.48C15.15 2.48 14.3 2.82933 13.6 3.528L12 5.128"
                    stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial text */}
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Star rating */}
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fizeo-mint-green">
                <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="currentColor" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-white text-lg italic mb-6">
            "After a sports injury left me sidelined, Fizeo's physiotherapy team played a crucial role in my recovery. Their personalized approach and targeted exercises not only alleviated my pain but also helped me regain strength and flexibility. I'm back in the game, thanks to Fizeo!"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/lovable-uploads/c64700c5-fd24-45d5-9767-e964340a771a.png"
                alt="Sarah M"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white">Sarah M</span>
          </div>

          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-fizeo-dark-green/50 rounded-full p-2">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-fizeo-dark-green/50 rounded-full p-2">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-fizeo-dark-green border-r-[30px] border-r-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonials;
