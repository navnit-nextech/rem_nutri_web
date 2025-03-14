// "use client";

// import Image from "next/image";
// import Navbar from "../components/Navbar";

// import Footer from "../components/Footer";


// const Blog = () => {
//   return (
//     <div>
//       <Navbar />

      

      
//       <Footer />
//     </div>
//   );
// };

// export default Blog;



// import React from 'react';


// import { useParams } from 'react-router-dom';
// import { Calendar, Clock, User } from 'lucide-react';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

// interface BlogContent {
//   title: string;
//   slug: string;
//   description: string;
//   image: string;
//   date: string;
//   author: string;
//   readTime: string;
//   content: React.ReactNode;
// }

// const blogPosts: Record<string, BlogContent> = {
//   "the-transformative-power-of-physiotherapy": {
//     title: "The transformative power of physiotherapy",
//     slug: "the-transformative-power-of-physiotherapy",
//     description: "Physiotherapy, a beacon of hope in healthcare, employs diverse techniques to address physical ailments, fostering recovery and overall well-being.",
//     image: "/lovable-uploads/61bd7484-664d-4ca8-8e1f-c80b48d6071b.png",
//     date: "Jan 25, 2024",
//     author: "John Smith",
//     readTime: "5 mins",
//     content: (
//       <>
//         <p className="mb-6">
//           In the realm of healthcare, physiotherapy stands as a beacon of hope for individuals 
//           seeking recovery and improved well-being. This holistic approach to healing 
//           encompasses a wide array of techniques and exercises designed to address 
//           various physical ailments and promote overall health. In this blog, we will delve into 
//           the transformative power of physiotherapy, exploring its benefits, applications, and 
//           the profound impact it can have on one's life.
//         </p>

//         <h2 className="text-2xl font-serif mb-3 mt-10">Understanding physiotherapy</h2>
//         <p className="mb-6">
//           Physiotherapy, often referred to as physical therapy, is a healthcare profession that 
//           focuses on optimizing physical function and movement. Whether recovering from 
//           an injury, managing a chronic condition, or seeking preventive measures, 
//           physiotherapy plays a pivotal role in enhancing the quality of life.
//         </p>

//         <h2 className="text-2xl font-serif mb-3 mt-10">Tailored treatment plans</h2>
//         <p className="mb-6">
//           One of the key strengths of physiotherapy lies in its personalized approach. Each 
//           individual is unique, and so are their healthcare needs. Physiotherapists carefully 
//           assess a patient's condition, taking into account their medical history, lifestyle, and 
//           specific goals. This comprehensive evaluation forms the basis for creating tailored 
//           treatment plans that address the root cause of the issue.
//         </p>

//         <h2 className="text-2xl font-serif mb-3 mt-10">Targeting pain and restoring functionality</h2>
//         <p className="mb-6">
//           Pain management is a common reason individuals seek physiotherapy. Whether it's 
//           back pain, joint discomfort, or muscle stiffness, physiotherapists employ a variety 
//           of techniques to alleviate pain and restore functionality. Through manual therapy, 
//           exercises, and specialized interventions, they aim to enhance mobility and promote 
//           optimal physical function.
//         </p>
//       </>
//     )
//   }
// };

// const BlogPost = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const blogPost = slug ? blogPosts[slug] : null;

//   if (!blogPost) {
//     return (
//       <div className="min-h-screen">
//         <Navbar />
//         <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
//           <h1 className="text-4xl font-serif mb-6">Blog post not found</h1>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <div className="w-full bg-fizeo-dark-green">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
//           <Breadcrumb>
//             <BreadcrumbList className="text-white">
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/" className="text-white hover:text-fizeo-mint-green">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator className="text-white" />
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/blog" className="text-white hover:text-fizeo-mint-green">Blog</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator className="text-white" />
//               <BreadcrumbItem>
//                 <span className="text-white">{blogPost.title}</span>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </div>

//       <div className="w-full bg-fizeo-dark-green pt-8 pb-16">
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <h1 className="text-white text-4xl md:text-5xl font-serif mb-5">
//             {blogPost.title}
//           </h1>
//           <p className="text-white text-lg mb-8">
//             {blogPost.description}
//           </p>
//         </div>
//       </div>

//       <div className="w-full bg-fizeo-beige-bg">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 -mt-4">
//           <div className="rounded-lg overflow-hidden mb-8">
//             <img 
//               src={blogPost.image} 
//               alt={blogPost.title}
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
//             <div className="flex items-center gap-8">
//               <div className="flex items-center gap-2">
//                 <Calendar className="text-fizeo-dark-green h-5 w-5" />
//                 <span className="text-fizeo-dark-green">
//                   {blogPost.date}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <User className="text-fizeo-dark-green h-5 w-5" />
//                 <span className="text-fizeo-dark-green">
//                   {blogPost.author}
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <Clock className="text-fizeo-dark-green h-5 w-5" />
//               <span className="text-fizeo-dark-green">
//                 {blogPost.readTime}
//               </span>
//             </div>
//           </div>

//           <div className="prose max-w-none text-fizeo-dark-green mb-16">
//             {blogPost.content}
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default BlogPost;

