
'use client'
import React, { useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "../../components/ui/accordion";

// Decorative divider for visual appeal
const Divider = () => (
  <div className="flex items-center justify-center my-5 md:my-10">
    <div className="w-40 h-[1px] bg-[#EBE5DA]"></div>
  </div>
);

const faqItems = [
  {
    question: "How does diabetes affect the body?",
    answer: "Diabetes is a metabolic disorder characterised by high blood glucose levels due to insufficient insulin production or ineffective insulin use in the body."
  },
  {
    question: "What does it mean to have prediabetes?",
    answer: "Prediabetes is a condition where blood glucose levels are higher than normal but not yet high enough to be diagnosed as type 2 diabetes."
  },
  {
    question: "Why is high blood pressure dangerous?",
    answer: "High blood pressure, or hypertension, is a condition where the force of blood against the artery walls is consistently too high, increasing the risk of heart disease and other health complications."
  },
  {
    question: "What are PCOS and PCOD, and how do they impact health?",
    answer: "PCOS (Polycystic Ovary Syndrome) or PCOD (Polycystic Ovarian Disorder) is a hormonal disorder common among women of reproductive age, characterised by irregular menstrual cycles, excess androgen levels, and cysts in the ovaries, often leading to fertility issues and other health concerns."
  },
  {
    question: "What happens during menopause?",
    answer: "Menopause is a natural biological process that occurs in women typically around the age of 50, marking the end of menstrual cycles and fertility due to a decrease in hormone production, often accompanied by symptoms like hot flashes, mood swings, and changes in sleep patterns."
  },
  {
    question: "How does hypothyroidism affect the body?",
    answer: "Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormones, leading to symptoms such as fatigue, weight gain, cold sensitivity, and dry skin. It can affect metabolism and overall bodily functions if left untreated."
  },
  {
    question: "What is cardiovascular disease, and what causes it?",
    answer: "Cardiovascular disease refers to conditions that affect the heart or blood vessels, including coronary artery disease, heart attacks, stroke, and peripheral artery disease, often caused by factors like high blood pressure, high cholesterol, smoking, and diabetes. It is a leading cause of death worldwide."
  },
  {
    question: "What is fatty liver, and how can it impact health?",
    answer: "Fatty liver, also known as hepatic steatosis, is a condition where excess fat accumulates in the liver cells. Fatty liver can lead to inflammation, liver scarring (cirrhosis), and liver failure if not managed properly."
  },
  {
    question: "How do overweight and obesity affect health?",
    answer: "Overweight and obesity are conditions characterized by excessive body fat accumulation, impacting health and well-being. Overweight is defined by a Body Mass Index (BMI) between 25 and 29.9, while obesity is indicated by a BMI of 30 or higher, posing significant risks to various aspects of physical and mental health."
  },
  {
    question: "What does 'Healthy You' mean, and how can it be achieved?",
    answer: "'Healthy You' encompasses a holistic approach to well-being, focusing on maintaining physical, mental, and emotional health through balanced nutrition, regular exercise, adequate sleep, stress management, and positive lifestyle choices."
  }
];

const ServiceQueries = () => {
  const consultationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add CSS animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .fade-in-up {
        animation: fadeInUp 0.8s forwards ease-out;
      }
    `;
    document.head.appendChild(style);

    // Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (consultationRef.current) {
      observer.observe(consultationRef.current);
    }

    return () => {
      if (consultationRef.current) {
        observer.unobserve(consultationRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full bg-[var(--background-color-plain)] bg-cover bg-center bg-no-repeat pt-[10%] pb-[5%]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-4xl md:text-5xl md:text-[56px] text-center mb-5 md:mb-16">
          Unraveling your<br />health queries
        </h2>
        
        <Accordion type="single" collapsible className="w-full mt-[10%]">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#024027]/10 py-2">
              <AccordionTrigger className="flex text-[var(--text-color-dark)]  font-['Libre_Baskerville',serif] hover:no-underline  sm:text-lg py-5 text-24px ">
                <span className="text-left">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif']  md:text-[20px] sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Consultation CTA */}
        <div className="max-w-2xl mx-auto text-center mt-10 md:mt-20 mb-10 ">
          <Divider />
          <div 
            ref={consultationRef}
            className="opacity-0 bg-[var(--background-color-plain)] py-10 px-8 rounded-2xl border border-[#EBE5DA] shadow-sm relative overflow-hidden hover:shadow-xl hover:border-[var(--text-color-light)]/30 transition-all duration-500"
          >
            <h2 className="font-['Libre_Baskerville',serif] text-2xl text-[var(--text-color-dark)] mb-4 font-bold relative z-10 transition-transform duration-300 hover:scale-[1.02]">
              Still struggling to understand which programme will help manage your health concern?
            </h2>
            <p className="text-[var(--text-color-dark)]/90 mb-8 text-lg font-medium relative z-10 transition-all duration-300 hover:text-[var(--text-color-dark)]">
              Let's talk and find the perfect solution for you.
            </p>
            <button className="bg-[var(--background-color-dark)] text-[var(--text-color-plain)] font-bold py-4 px-10 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md active:translate-y-0.5 relative z-10 hover:bg-[var(--background-color-dark)]/90 hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceQueries;