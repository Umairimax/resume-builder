// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Hero = () => {

//     const {user} = useSelector(state=>state.auth)

//     const [menuOpen, setMenuOpen] = React.useState(false);


//   return (
//     <>
//             <div className="min-h-screen py-2">
//                 {/* Navbar */}
//                 <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
//                     <a href="https://prebuiltui.com">
//                         <img src="/logo.svg" alt="logo" className='h-11 w-auto' />
//                     </a>

//                     <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
//                         <a href="#" className="hover:text-green-600 transition">Home</a>
//                         <a href="#features" className="hover:text-green-600 transition">Features</a>
//                         <a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a>
//                         <a href="#cta" className="hover:text-green-600 transition">Contact</a>
//                     </div>

//                     <div className="flex gap-2">
//                         <Link to='/app?state=register' className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white" hidden={user}>
//                             Get started
//                         </Link>
//                         <Link to='/app?state=login' className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" hidden={user}>
//                             Login
//                         </Link>
//                         <Link to='/app' className="hidden md:block px-8 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white" hidden={!user}>
//                             DashBoard
//                         </Link>
//                     </div>

//                     <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
//                             <path d="M4 5h16M4 12h16M4 19h16" />
//                         </svg>
//                     </button>
//                 </nav>

//                 {/* Mobile Menu */}
//                 <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
//                     <a href="/" className="text-white">Home</a>
//                     <a href="#features" className="text-white">Features</a>
//                     <a href="#testimonials" className="text-white">Testimonials</a>
//                     <a href="#cta" className="text-white">Contact</a>
//                     <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-green-700 transition text-white rounded-md flex" >
//                         X
//                     </button>
//                 </div>

//                 {/* Hero Section */}
//                 <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
//                     <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

//                     {/* Avatars + Stars */}
//                     <div className="flex items-center mt-24">
//                     </div>

//                     {/* Headline + CTA */}
//                     <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
//                         Land your dream job with <span className=" bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-wrap"> <br/> AI-Powered </span>
//                         resumes.
//                     </h1>

//                     <p className="max-w-md text-center text-base my-7">Create, edit and download professional resumes with AI-Powered assistance.</p>

//                     {/* CTA Buttons */}
//                     <div className="flex items-center gap-4 ">
//                         <Link to='/app' className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors">
//                             Get started
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                         </Link>
//                         <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
//                             <span>Try demo</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <style>
//                 {`
//                     @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

//                     * {
//                         font-family: 'Poppins', sans-serif;
//                     }
//                 `}
//             </style>
//         </>
//   )
// }

// export default Hero








// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FileText, Menu, X } from 'lucide-react';

// const Hero = () => {
//   const { user } = useSelector((state) => state.auth);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
//       }}
//     >
//       {/* Background decorative blobs */}
//       <div
//         className="absolute top-0 right-0 -z-0 opacity-20 pointer-events-none"
//         style={{
//           width: '600px',
//           height: '600px',
//           background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
//           transform: 'translate(30%, -30%)',
//         }}
//       />
//       <div
//         className="absolute bottom-0 left-0 -z-0 opacity-10 pointer-events-none"
//         style={{
//           width: '400px',
//           height: '400px',
//           background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
//           transform: 'translate(-30%, 30%)',
//         }}
//       />

//       {/* Navbar */}
//       <nav className="relative z-50 flex items-center justify-between w-full py-5 px-6 md:px-16 lg:px-24 xl:px-40">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors">
//             <FileText size={18} className="text-white" />
//           </div>
//           <span
//             className="text-2xl font-black tracking-tight text-slate-800"
//             style={{ fontFamily: "'Sora', sans-serif" }}
//           >
//             Res<span className="text-blue-600">ux</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <div
//           className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
//           <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
//           <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
//         </div>

//         {/* CTA Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           {!user && (
//             <>
//               <Link
//                 to="/app?state=login"
//                 className="px-5 py-2 text-sm font-semibold text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all"
//                 style={{ fontFamily: "'DM Sans', sans-serif" }}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/app?state=register"
//                 className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md hover:shadow-lg transition-all active:scale-95"
//                 style={{ fontFamily: "'DM Sans', sans-serif" }}
//               >
//                 Get Started
//               </Link>
//             </>
//           )}
//           {user && (
//             <Link
//               to="/app"
//               className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all active:scale-95"
//               style={{ fontFamily: "'DM Sans', sans-serif" }}
//             >
//               Dashboard
//             </Link>
//           )}
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition"
//         >
//           <Menu size={22} className="text-slate-700" />
//         </button>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-all duration-300 md:hidden ${
//           menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//         }`}
//         style={{
//           background: 'rgba(255,255,255,0.97)',
//           backdropFilter: 'blur(16px)',
//           fontFamily: "'DM Sans', sans-serif",
//         }}
//       >
//         <a href="#home" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition">Home</a>
//         <a href="#features" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition">Features</a>
//         <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition">Contact</a>
//         {!user && (
//           <>
//             <Link to="/app?state=register" onClick={() => setMenuOpen(false)} className="text-blue-600">Get Started</Link>
//             <Link to="/app?state=login" onClick={() => setMenuOpen(false)} className="text-slate-600">Login</Link>
//           </>
//         )}
//         {user && (
//           <Link to="/app" onClick={() => setMenuOpen(false)} className="text-blue-600">Dashboard</Link>
//         )}
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 transition"
//         >
//           <X size={24} className="text-slate-600" />
//         </button>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 xl:px-40 pt-20 pb-28">
//         {/* Badge */}
//         <div
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 mb-8 shadow-sm"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
//           AI-Powered Resume Builder
//         </div>

//         {/* Headline */}
//         <h1
//           className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 max-w-4xl leading-[1.08] tracking-tight mb-6"
//           style={{ fontFamily: "'Sora', sans-serif" }}
//         >
//           Get hired by creating an{' '}
//           <span
//             className="relative inline-block"
//             style={{
//               background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             AI-powered
//           </span>{' '}
//           resume in minutes.
//         </h1>

//         {/* Subheadline */}
//         <p
//           className="text-lg md:text-xl text-slate-500 max-w-xl mb-10"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           Build a standout resume with smart AI suggestions, beautiful templates, and one-click export — no design skills needed.
//         </p>

//         {/* CTA */}
//         <Link
//           to="/app?state=register"
//           className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-blue-300/50 transition-all active:scale-95 text-base"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           Get Started — It's Free
//           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
//         </Link>

//         {/* Social proof */}
//         <p
//           className="mt-6 text-sm text-slate-400"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           Trusted by <span className="font-semibold text-slate-600">10,000+</span> job seekers worldwide
//         </p>

//         {/* Floating card decorations */}
//         <div className="relative mt-16 w-full max-w-3xl mx-auto">
//           <div
//             className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100"
//             style={{ background: 'linear-gradient(145deg, #f8fbff, #eef5ff)' }}
//           >
//             <div className="flex items-center gap-2 px-5 py-3 border-b border-blue-100 bg-white/70">
//               <div className="w-3 h-3 rounded-full bg-red-400" />
//               <div className="w-3 h-3 rounded-full bg-yellow-400" />
//               <div className="w-3 h-3 rounded-full bg-green-400" />
//               <span className="ml-3 text-xs text-slate-400 font-mono">resux.ai — resume editor</span>
//             </div>
//             <div className="p-8 grid grid-cols-3 gap-4">
//               {['Professional', 'Modern', 'Creative'].map((label, i) => (
//                 <div
//                   key={i}
//                   className="rounded-2xl bg-white border border-blue-100 shadow-sm p-4 flex flex-col gap-2"
//                 >
//                   <div className="w-full h-3 bg-blue-100 rounded-full" />
//                   <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
//                   <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
//                   <div className="w-full h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mt-1" />
//                   <span className="text-xs text-blue-500 font-semibold text-center mt-1">{label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

















import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
      }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 right-0 -z-0 opacity-20 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 -z-0 opacity-10 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Navbar — centered, sharp-cornered border */}
      <div className="relative z-50 flex justify-center w-full pt-5 px-4">
        <nav className="flex items-center justify-between w-full max-w-4xl py-5 px-6 bg-white border border-slate-200 shadow-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-600 flex items-center justify-center shadow group-hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              Resux
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {!user && (
              <>
                <Link
                  to="/app?state=login"
                  className="px-5 py-2 text-sm font-semibold text-blue-600 border border-blue-300 hover:bg-blue-50 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/app?state=register"
                  className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow transition-all active:scale-95"
                >
                  Get Started
                </Link>
              </>
            )}
            {user && (
              <Link
                to="/app"
                className="px-5 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow transition-all active:scale-95"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 hover:bg-blue-50 transition">
            <Menu size={22} className="text-slate-700" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <a href="#home" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition">Home</a>
        <a href="#features" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition">Features</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600 transition">Contact</a>
        {!user && (
          <>
            <Link to="/app?state=register" onClick={() => setMenuOpen(false)} className="text-blue-600">Get Started</Link>
            <Link to="/app?state=login" onClick={() => setMenuOpen(false)} className="text-slate-600">Login</Link>
          </>
        )}
        {user && (
          <Link to="/app" onClick={() => setMenuOpen(false)} className="text-blue-600">Dashboard</Link>
        )}
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 p-2 hover:bg-slate-100 transition">
          <X size={24} className="text-slate-600" />
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 xl:px-40 pt-20 pb-28">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-blue-500 animate-pulse" />
          AI-Powered Resume Builder
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 max-w-4xl leading-[1.08] tracking-tight mb-6">
          Get hired by creating an{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI-powered
          </span>{' '}
          resume in minutes.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10">
          Build a standout resume with smart AI suggestions, beautiful templates, and one-click export — no design skills needed.
        </p>

        {/* CTA */}
        <Link
          to="/app?state=register"
          className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl hover:shadow-blue-300/50 transition-all active:scale-95 text-base"
        >
          Get Started — It's Free
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>

        {/* Social proof */}
        <p className="mt-6 text-sm text-slate-400">
          Trusted by <span className="font-semibold text-slate-600">10,000+</span> job seekers worldwide
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
        body, * { font-family: 'Google Sans', 'Product Sans', Arial, sans-serif !important; }
      `}</style>
    </section>
  );
};

export default Hero;