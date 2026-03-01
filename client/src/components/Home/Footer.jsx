// import React from 'react';

// const Footer=()=>{
//     return(
//         <>
//             <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-black-500 bg-gradient-to-r from-white via-green-200/60 mt-24">
//                 <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
//                     <a href="#">
//                         <img src="./logo.svg" alt="logo" className='h-9 w-auto' />
//                     </a>
//                     <div>
//                         <p className="text-black font-semibold">Product</p>
//                         <ul className="mt-2 space-y-2">
//                             <li><a href="/" className="hover:text-green-600 transition">Home</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Support</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Pricing</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Affiliate</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <p className="text-black font-semibold">Resources</p>
//                         <ul className="mt-2 space-y-2">
//                             <li><a href="/" className="hover:text-green-600 transition">Company</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Blogs</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Community</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Careers<span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">About</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <p className="text-slate-100 font-semibold">Legal</p>
//                         <ul className="mt-2 space-y-2">
//                             <li><a href="/" className="hover:text-green-600 transition">Privacy</a></li>
//                             <li><a href="/" className="hover:text-green-600 transition">Terms</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
//                     <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
//                     <div className="flex items-center gap-4 mt-3">
//                         <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble size-5 hover:text-green-500" aria-hidden="true">
//                                 <circle cx="12" cy="12" r="10"></circle>
//                                 <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
//                                 <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
//                                 <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
//                             </svg>
//                         </a>
//                         <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-green-500" aria-hidden="true">
//                                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                                 <rect width="4" height="12" x="2" y="9"></rect>
//                                 <circle cx="4" cy="4" r="2"></circle>
//                             </svg>
//                         </a>
//                         <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter size-5 hover:text-green-500" aria-hidden="true">
//                                 <path
//                                     d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
//                                 </path>
//                             </svg>
//                         </a>
//                         <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube size-6 hover:text-green-500" aria-hidden="true">
//                                 <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
//                                 </path>
//                                 <path d="m10 15 5-3-5-3z"></path>
//                             </svg>
//                         </a>
//                     </div>
//                     <p className="mt-3 text-center">© 2026 Resume Builder</p>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer;










// import React from 'react';
// import { FileText, Linkedin, Facebook, Instagram } from 'lucide-react';

// const Contact = () => {
//   return (
//     <footer
//       id="contact"
//       className="w-full bg-slate-900 text-white pt-16 pb-8 px-6 md:px-16 lg:px-24 xl:px-40"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Top Row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <FileText size={18} className="text-white" />
//               </div>
//               <span
//                 className="text-2xl font-black tracking-tight"
//                 style={{ fontFamily: "'Sora', sans-serif" }}
//               >
//                 Res<span className="text-blue-400">ux</span>
//               </span>
//             </div>
//             <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
//               Build beautiful, AI-powered resumes that get you noticed — and get you hired.
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4">
//             {[
//               { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
//               { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
//               { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
//             ].map(({ icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 aria-label={label}
//                 className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-90 border border-white/5"
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Row */}
//         <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
//           <p>© {new Date().getFullYear()} Resux. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Contact;












import React from 'react';
import { FileText, Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="w-full bg-slate-900 text-white pt-16 pb-8 px-6 md:px-16 lg:px-24 xl:px-40">
      <div className="max-w-5xl mx-auto">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-blue-600 flex items-center justify-center shadow-lg">
                <FileText size={18} className="text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Resux
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Build beautiful, AI-powered resumes that get you noticed — and get you hired.
            </p>
          </div>

          {/* Social Icons — sharp */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
              { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
              { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-90 border border-white/10"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Resux. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;