import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#FF7A00]/3 text-[#2B2B2B] border-t border-[#2B2B2B]/20">
      
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10">
            
            <div>
            {/* <img src={assets.CD_logo2} alt="logo" className="w-20 sm:w-24" /> */}
            <p className="max-w-[420px] mt-4 text-sm sm:text-base leading-relaxed">
                This is an official platform for students of <strong>LSPGCOER </strong> 
                to share their Campus Stories, experiences, and creative ideas.
            </p>
            <a className="mt-3 inline-block text-[#FF7A00] font-medium cursor-pointer" href="https://www.gcoer.ac.in/index.html" target="_blank" rel="noopener noreferrer">
                Visit Official College Website →
            </a>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex flex-col md:items-end text-center md:text-right">
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-sm">Loknete Shamrao Peje Government College of Engineering,<br/> Ratnagiri, Maharashtra - 415612</p>
            <p className="text-sm mt-1">info@lspgcoer.edu.in</p>
            <p className="text-sm mt-1">+91 12345 67890</p>
            </div>
        </div>

        <div className="border-t border-[#2B2B2B]/30"></div>

        <div className="py-4 text-center text-sm md:text-base">
            <p>Copyright © 2025 LSPGCOER'S CAMPUS DIARIES</p>
            <p className="mt-1 text-[#FF7A00] font-medium">Made by Paras & Moin</p>
        </div>
    </footer>
  );
};


export default Footer
