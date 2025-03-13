
"use client"


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";



const Contact= () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (

    <div>

      <Navbar/>

      <ContactForm/>
      <Footer/>

    </div>

 
  );
};

export default Contact;

