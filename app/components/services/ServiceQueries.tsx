
import React from 'react';
import { Plus, X } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "../../components/ui/accordion";
const faqItems = [
  {
    question: "How can physiotherapy benefit me?",
    answer: "Physiotherapy enhances mobility, reduces pain, and promotes overall well-being. Our personalized approach addresses your specific needs, whether recovering from an injury, managing a chronic condition, or optimizing performance."
  },
  {
    question: "What conditions do physiotherapists treat?",
    answer: "Physiotherapists treat a wide range of conditions, including musculoskeletal issues, sports injuries, neurological disorders, and respiratory conditions. Our team is equipped to address diverse health concerns."
  },
  {
    question: "How long does a typical physiotherapy session last?",
    answer: "Sessions typically last 45 to 60 minutes, but the duration may vary based on your condition and treatment plan. Our focus is on quality care, ensuring ample time for assessment, treatment, and education."
  },
  {
    question: "What should I expect during my first physiotherapy session?",
    answer: "Your initial session involves a comprehensive assessment, where we discuss your medical history, assess your condition, and outline a personalized treatment plan. It's an opportunity for us to understand your goals and tailor our approach."
  },
  {
    question: "Is physiotherapy painful?",
    answer: "While some treatments may involve discomfort, our goal is to minimize pain and maximize comfort. We communicate closely with you, adjusting treatments based on your feedback to ensure a positive and effective experience."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your condition and response to treatment. We work collaboratively, regularly assessing progress and adjusting the treatment plan to achieve optimal results."
  },
  {
    question: "Do I need a referral from a doctor to see a physiotherapist?",
    answer: "In most cases, you can directly access physiotherapy without a doctor's referral. However, some insurance plans may require a referral for coverage. Check with your insurance provider or contact us for more information."
  },
  {
    question: "Can physiotherapy help prevent injuries?",
    answer: "Absolutely! Physiotherapy includes education on proper body mechanics, posture, and exercises to strengthen and prevent future injuries. We focus not only on treatment but also on empowering you with tools for injury prevention."
  },
  {
    question: "What should I wear to a physiotherapy session?",
    answer: "Wear comfortable clothing that allows easy movement and access to the area being treated. We may ask you to change into a gown for specific assessments, so it's helpful to bring appropriate attire."
  },
  {
    question: "Can I continue physio exercises at home?",
    answer: "Yes, home exercises are often a crucial part of your treatment plan. We provide clear instructions and any necessary equipment, empowering you to continue progress between sessions and maintain your health over the long term."
  }
];

const ServiceQueries = () => {
  return (
    <div className="w-full bg-[url('https://framerusercontent.com/images/o58voyKMKfklvmDAsffE229zIwE.png')]  bg-cover bg-center bg-no-repeat py-[10%]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-4xl md:text-5xl md:text-[56px] text-center mb-16">
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
      </div>
    </div>
  );
};

export default ServiceQueries;