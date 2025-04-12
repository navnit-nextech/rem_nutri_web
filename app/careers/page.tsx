"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type SubmitStatusType = {
  success: boolean;
  message: string;
} | null;

const CareersPage = () => {
  const [navTheme, setNavTheme] = useState("dark");
  const heroRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    
    if (file.size > maxSize) {
      setSubmitStatus({
        success: false,
        message: 'File size exceeds 5MB limit. Please upload a smaller file.'
      });
      return;
    }
    
    // Check file type
    const validTypes = ['.pdf', '.docx', '.doc'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    if (!validTypes.includes(fileExtension)) {
      setSubmitStatus({
        success: false,
        message: 'Please upload a PDF or Word document (.pdf, .docx, .doc).'
      });
      return;
    }
    
    setSelectedFile(file);
    setSubmitStatus(null); // Clear any previous error messages
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndSetFile(file);
    }
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Validate required fields including resume
    if (!selectedFile) {
      setSubmitStatus({
        success: false,
        message: 'Please upload your resume to continue.'
      });
      return;
    }
    
    setIsSubmitting(true);
    // First status update - Application sent
    setSubmitStatus({
      success: true,
      message: 'Application sent! Processing your submission...'
    });
    
    console.log('Preparing file for upload:', selectedFile.name);
    
    try {
      // Create FormData to handle file upload
      const formDataToSend = new FormData();
      formDataToSend.append('resume', selectedFile);
      console.log('Resume file added to FormData');
      
      // Add all other form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value as string);
      });
      console.log('Form fields added to FormData', Object.fromEntries(formDataToSend));
      
      // Second status update - Processing on server
      setTimeout(() => {
        if (isSubmitting) {
          setSubmitStatus({
            success: true,
            message: 'Processing on server... This may take a moment.'
          });
        }
      }, 2000);
      
      // Send multipart/form-data to the server (direct file upload)
      console.log('Starting fetch request to /api/careers');
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });
      
      console.log('Fetch response received, status:', response.status);
      // Try to see response text first for debugging
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      let data;
      try {
        // Parse the text response as JSON
        data = JSON.parse(responseText);
        console.log('Response parsed:', data);
      } catch (jsonError) {
        console.error('Error parsing response JSON:', jsonError);
        throw new Error(`Failed to parse server response: ${responseText}`);
      }
      
      if (response.ok) {
        console.log('Form submission successful');
        let message = data.message || 'Thank you for your application! We will review it and contact you if your qualifications match our requirements.';
        
        // If there's a resume link, add it to the success message
        if (data.resumeLink) {
          console.log('Resume link received:', data.resumeLink);
          message += ` Your resume can be viewed at: <a href="${data.resumeLink}" target="_blank" style="color:#22c55e;text-decoration:underline">View Resume</a>`;
        }
        
        // If there was an error with the upload, note it in the message
        if (data.uploadError) {
          console.warn('Upload error received:', data.uploadError);
          message += ` (Note: There was an issue with the file upload: ${data.uploadError})`;
        }
        
        // Final success status
        setSubmitStatus({
          success: true,
          message: message
        });
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          coverLetter: ''
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        console.error('Form submission failed with status:', response.status);
        setSubmitStatus({
          success: false,
          message: data.message || 'Failed to submit the application. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error (exception):', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission process completed');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > viewportHeight * 0.5) {
        setNavTheme("light");
      } else {
        setNavTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openings = [
    {
      title: "Nutrition Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Join our team as a Nutrition Specialist to help clients achieve their health goals through personalized nutrition plans."
    },
    {
      title: "Health Coach",
      type: "Full-time",
      location: "Remote",
      description: "Guide clients through their health journey, providing support and accountability for their nutrition and wellness goals."
    },
    {
      title: "Content Writer",
      type: "Part-time",
      location: "Remote",
      description: "Create engaging, science-backed content about nutrition, health, and wellness for our blog and social media platforms."
    }
  ];

  const internships = [
    {
      title: "Nutrition Research Assistant",
      type: "3-month",
      location: "Remote",
      description: "Assist our research team in gathering and analyzing data for nutrition studies and client outcomes."
    },
    {
      title: "Marketing Assistent Intern",
      type: "6-month",
      location: "Remote",
      description: "Help promote our nutrition programs through digital marketing strategies and social media campaigns."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[var(--background-color-plain)]/20">
      <Navbar theme={navTheme} />

      {/* Hero Section */}
      <div ref={heroRef} className="relative bg-[var(--background-color-dark)] text-white pt-36 pb-28 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)]"></div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--primary-color)]/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[var(--background-color-light)]/10 filter blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-[42px] md:text-[60px] font-['Libre_Baskerville',serif] mb-5 leading-tight">
              Join Our <span className="text-[var(--primary-color)]">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl font-['DM_Sans', 'sans-serif'] text-white/90 mb-10">
              Be part of a team revolutionizing personalized nutrition and health solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
  <Button
    className="bg-[var(--background-color-light)] hover:bg-[var(--background-color-light)]/90 text-[var(--text-color-dark)] w-full sm:w-[200px] px-8 py-3 rounded-lg text-lg font-medium shadow-lg shadow-[var(--background-color-dark)]/20 transition-all hover:translate-y-[-2px] text-[18px]"
    asChild
  >
    <a href="#openings">View Openings</a>
  </Button>
  <Button
    className="bg-white hover:bg-white/90 text-[var(--background-color-dark)] w-full sm:w-[200px] px-8 py-3 rounded-lg text-lg font-medium border border-white/10 backdrop-blur-sm shadow-lg transition-all hover:translate-y-[-2px] text-[18px]"
    asChild
  >
    <a href="#apply">Apply Now</a>
  </Button>
</div>

          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <svg className="h-full w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              fill="var(--background-color-plain)"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Current Openings Section */}
      <section id="openings" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
            variants={fadeInUp}
          >
            <h2 className="text-[32px] md:text-[42px] font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-5 relative inline-block">
              Current Openings
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[var(--primary-color)]/50 rounded-full"></span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-color-dark)]/70 max-w-2xl mx-auto">
              Join our growing team and contribute to our mission of transforming health through nutrition.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {openings.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[var(--background-color-plain3)]/50 group hover:border-[var(--primary-color)]/50"
              >
                <h3 className="text-xl font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-3 ">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[var(--background-color-plain)]/40 text-[var(--text-color-dark)] font-semibold text-xs py-1 px-3 rounded-full">
                    {job.type}
                  </span>
                  <span className="bg-[var(--background-color-plain)]/40 text-[var(--text-color-dark)] font-semibold text-xs py-1 px-3 rounded-full">
                    {job.location}
                  </span>
                </div>
                <p className="text-[var(--text-color-dark)]/80 font-['DM_Sans', 'sans-serif'] mb-6 flex-grow">
                  {job.description}
                </p>
                <div className="group">
                  <Button
                    className="bg-[var(--background-color-dark)] group-hover:bg-[rgba(30,30,30,0.7)] text-white font-medium text-sm mt-auto self-start px-5 py-2.5 rounded-md transition-all duration-300"
                    asChild
                  >
                    <a href="#apply">Apply Now</a>
                  </Button>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internship Opportunities - Compact Section */}
      <section className="py-14 bg-[var(--background-color-plain)]/30">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-3">
              Internship Opportunities
            </h2>
            <p className="text-[var(--text-color-dark)]/70 max-w-2xl mx-auto">
              Gain valuable experience and kickstart your career in nutrition and wellness
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--background-color-plain3)]/50 flex flex-col hover:border-[var(--primary-color)]/30"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-['Libre_Baskerville',serif] text-[var(--text-color-dark)]">
                    {internship.title}
                  </h3>
                  <span className="bg-[var(--background-color-light)]/80 text-[var(--text-color-dark)] text-xs font-semibold py-1 px-3 rounded-full">
                    {internship.type}
                  </span>
                </div>
                <p className="text-[var(--text-color-dark)]/80 text-sm font-['DM_Sans', 'sans-serif'] mb-4">
                  {internship.description}
                </p>
                <Button
                  className="bg-[var(--background-color-dark)] hover:bg-[var(--background-color-dark)]/70 text-white font-medium text-sm mt-auto self-start px-5 py-2.5 rounded-md transition-all duration-300 "
                  asChild
                >
                  <a href="#apply">Apply Now</a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Life at Rem */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[var(--background-color-plain)]/30 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--background-color-plain)]/20 rounded-tr-[100px]"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/12.avif"
                  alt="Team collaboration at Rem Nutri"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-[var(--primary-color)] px-3 py-1 text-xs rounded-full font-medium mb-2 inline-block">Our Culture</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-[32px] md:text-[40px] font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-5 relative inline-block">
                Life at Rem Nutri
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[var(--primary-color)]/50 rounded-full"></span>
              </h2>
              <p className="text-lg md:text-xl font-['DM_Sans', 'sans-serif'] text-[var(--text-color-dark)]/80 mb-8">
                At Rem Nutri, we value collaboration, innovation, and a shared commitment to improving lives through better nutrition and health practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[var(--background-color-plain)]/30 p-6 rounded-xl border border-[var(--background-color-plain3)]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--text-color-dark)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-2">
                    Growth & Development
                  </h4>
                  <p className="text-[var(--text-color-dark)]/80 font-medium">
                    Continuous learning and clear paths for career advancement.
                  </p>
                </div>
                <div className="bg-[var(--background-color-plain)]/30 p-6 rounded-xl border border-[var(--background-color-plain3)]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-[var(--primary-color)]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--text-color-dark)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-2">
                    Work-Life Balance
                  </h4>
                  <p className="text-[var(--text-color-dark)]/80 font-medium">
                    Flexible hours and remote work options for your wellbeing.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="py-20 md:py-28 bg-[var(--background-color-dark)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dot.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--primary-color)]/5 filter blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[var(--background-color-light)]/5 filter blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-[32px] md:text-[40px] font-['Libre_Baskerville',serif] mb-4">
              Apply Now
            </h2>
            <p className="text-lg md:text-xl font-['DM_Sans', 'sans-serif'] text-white/90">
              Ready to join our team? Send your application and let us know which position interests you.
            </p>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-white mb-2 text-sm font-medium">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--background-color-light)] transition-all"
                  placeholder="Your first name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2 text-sm font-medium">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--background-color-light)] transition-all"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-white mb-2 text-sm font-medium">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--background-color-light)] transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2 text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--background-color-light)] transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="text-white mb-2 text-sm font-medium">Position Applying For*</label>
              <select 
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--background-color-light)] appearance-none transition-all"
              >
                <option value="" className="text-gray-800">Select position</option>
                <option value="Nutrition Specialist" className="text-gray-800">Nutrition Specialist</option>
                <option value="Health Coach" className="text-gray-800">Health Coach</option>
                <option value="Content Writer" className="text-gray-800">Content Writer</option>
                <option value="Nutrition Research Assistant" className="text-gray-800">Nutrition Research Assistant</option>
                <option value="Digital Marketing Intern" className="text-gray-800">Digital Marketing Intern</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="text-white mb-2 text-sm font-medium">Upload Resume*</label>
              <div 
                onClick={handleFileUploadClick}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`border-2 ${selectedFile ? 'border-green-400/50' : 'border-white/30'} border-dashed rounded-lg cursor-pointer ${selectedFile ? 'bg-green-400/10' : 'bg-white/20'} hover:bg-white/30 transition-all p-6 text-center`}
              >
                {selectedFile ? (
                  <>
                    <svg className="w-8 h-8 mx-auto mb-3 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white mb-1 font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-white/70">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    <p className="text-xs text-green-400/80 mt-2 font-medium">File uploaded - click to change</p>
                  </>
                ) : (
                  <>
                    <svg className="w-8 h-8 mx-auto mb-3 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-white mb-1 font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-white/70">PDF or DOCX (MAX. 5MB)</p>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.doc"
                  className="hidden" 
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="text-white mb-2 text-sm font-medium">Additional Information</label>
              <textarea
                className="w-full rounded-md border-0 bg-white/5 p-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm"
                rows={4}
                placeholder="Tell us about your relevant experience, why you want to join our team, or anything else you'd like us to know."
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
              ></textarea>
            </div>
            
            {submitStatus && (
              <div 
                className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100/20 text-green-100' : 'bg-red-100/20 text-red-100'}`}
                dangerouslySetInnerHTML={{ __html: submitStatus.message }}
              />
            )}
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--background-color-light)]  text-[var(--text-color-dark)] cursor-pointer font-semibold py-3 px-8 rounded-lg w-full transition-all duration-300 shadow-lg shadow-[var(--background-color-light)]/10 hover:shadow-[var(--primary-color)]/20 disabled:opacity-70"
            >
              {isSubmitting ? 'Processing...' : 'Submit Application'}
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
