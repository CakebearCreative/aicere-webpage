'use client';
import { motion } from 'framer-motion';
import { Briefcase, Users, Compass } from 'lucide-react';
import Link from 'next/link';

interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
  applyLink: string;
}

export default function CareersPage() {
  // Placeholder for job openings
  const jobOpenings: JobOpening[] = [
    // Example job:
    // {
    //   title: 'Senior Frontend Engineer (React/Next.js)',
    //   location: 'Stockholm, Sweden / Remote',
    //   type: 'Full-time',
    //   description: 'Join our passionate team to build the next generation of AI tools. We are looking for an experienced frontend engineer with a knack for creating beautiful and performant user interfaces.',
    //   applyLink: 'mailto:careers@aicere.com?subject=Application: Senior Frontend Engineer'
    // },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-green-600 via-emerald-500 to-teal-600 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="h-16 w-16 mx-auto mb-6 text-emerald-400" />
          <h1 className="text-5xl font-extrabold sm:text-6xl">Careers at Aicere</h1>
          <p className="mt-6 text-xl text-white/80">
            Join us in building the future of AI-powered productivity. We're looking for passionate individuals to help shape Aicere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl ring-1 ring-white/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Users className="h-10 w-10 mx-auto mb-3 text-emerald-400" />
            <h3 className="text-xl font-bold mb-2">Our Culture</h3>
            <p className="text-sm text-white/70">Innovative, collaborative, and focused on impact. We value creativity and a drive to solve complex problems.</p>
          </motion.div>
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl ring-1 ring-white/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Compass className="h-10 w-10 mx-auto mb-3 text-emerald-400" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-sm text-white/70">To build powerful, privacy-focused AI tools that empower developers, designers, and businesses worldwide.</p>
          </motion.div>
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl ring-1 ring-white/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Briefcase className="h-10 w-10 mx-auto mb-3 text-emerald-400" />
            <h3 className="text-xl font-bold mb-2">Why Join Us?</h3>
            <p className="text-sm text-white/70">Be part of a cutting-edge AI startup, work on exciting products, and make a real difference.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Current Openings</h2>
          {jobOpenings.length > 0 ? (
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10">
                  <h3 className="text-xl font-bold text-emerald-400">{job.title}</h3>
                  <p className="text-sm text-white/70 mb-1">{job.location} • {job.type}</p>
                  <p className="text-white/80 my-3">{job.description}</p>
                  <a href={job.applyLink} className="btn-primary text-sm">Apply Now</a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <p className="text-xl text-white/70 mb-4">
                We don't have any open positions at the moment, but we're always interested in hearing from talented individuals.
              </p>
              <p className="text-white/70">
                Feel free to send your resume and a cover letter to <a href="mailto:careers@aicere.com" className="font-medium text-emerald-400 hover:underline">careers@aicere.com</a>, and we'll keep you in mind for future opportunities.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 