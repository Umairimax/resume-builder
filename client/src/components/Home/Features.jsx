// import React from 'react'
// import { Zap } from 'lucide-react';
// import Title from './Title.jsx';

// const Features = () => {
//   const [isHover, setIsHover] = React.useState(false);

//   return (
//     <div id='features' className='flex flex-col items-center my-10 scroll--mt-12'>
//         <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 border border-green-200 rounded-full px-4 py-1">
//             <Zap width={14}/>
//             <span>Simple Process</span>
//         </div>

//         <Title title='Build your resume' description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features' />


//         <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">
//                 <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
//                 <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
//                     <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
//                         <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
//                             <div className="space-y-2">
//                                 <h3 className="text-base font-semibold text-slate-700">Real-Time Analytics</h3>
//                                 <p className="text-sm text-slate-600 max-w-xs">Get instant insights into your finances with live dashboards.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
//                         <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
//                             <div className="space-y-2">
//                                 <h3 className="text-base font-semibold text-slate-700">Bank-Grade Security</h3>
//                                 <p className="text-sm text-slate-600 max-w-xs">End-to-end encryption, 2FA, compliance with GDPR standards.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
//                         <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
//                             <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
//                             <div className="space-y-2">
//                                 <h3 className="text-base font-semibold text-slate-700">Customizable Reports</h3>
//                                 <p className="text-sm text-slate-600 max-w-xs">Export professional, audit-ready financial reports for tax or internal review.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     </div>

//   )
// }

// export default Features





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Sparkles, LayoutTemplate, Download } from 'lucide-react';

// const features = [
//   {
//     icon: <Sparkles size={28} className="text-blue-600" />,
//     title: 'AI-Powered Writing Assistant',
//     description: 'Let our AI craft compelling bullet points and summaries tailored to your target role.',
//     bg: 'bg-blue-50',
//     border: 'border-blue-100',
//   },
//   {
//     icon: <LayoutTemplate size={28} className="text-cyan-600" />,
//     title: 'Professionally Designed Templates',
//     description: 'Choose from dozens of ATS-friendly templates built by top career coaches.',
//     bg: 'bg-cyan-50',
//     border: 'border-cyan-100',
//   },
//   {
//     icon: <Download size={28} className="text-indigo-600" />,
//     title: 'One-Click PDF Export',
//     description: 'Download your polished resume as a pixel-perfect PDF instantly, ready to send.',
//     bg: 'bg-indigo-50',
//     border: 'border-indigo-100',
//   },
// ];

// const Features = () => {
//   return (
//     <section
//       id="features"
//       className="w-full bg-white py-24 px-6 md:px-16 lg:px-24 xl:px-40"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <span className="inline-block px-4 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-4">
//           Why Resux?
//         </span>
//         <h2
//           className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight"
//           style={{ fontFamily: "'Sora', sans-serif" }}
//         >
//           Everything you need to{' '}
//           <span
//             style={{
//               background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             land the job
//           </span>
//         </h2>
//         <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
//           Powerful features that make resume building fast, smart, and stress-free.
//         </p>
//       </div>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {features.map((f, i) => (
//           <div
//             key={i}
//             className={`group relative rounded-3xl border ${f.border} p-8 ${f.bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
//           >
//             <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-white">
//               {f.icon}
//             </div>
//             <h3 className="text-xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
//               {f.title}
//             </h3>
//             <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
//             {/* Subtle number */}
//             <span className="absolute top-6 right-7 text-5xl font-black text-slate-100 select-none" style={{ fontFamily: "'Sora', sans-serif" }}>
//               0{i + 1}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Attraction / CTA Banner */}
//       <div
//         className="mt-24 rounded-3xl relative overflow-hidden text-white text-center px-8 py-16 max-w-4xl mx-auto shadow-2xl"
//         style={{
//           background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0891b2 100%)',
//         }}
//       >
//         {/* decorative circles */}
//         <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
//         <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

//         <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-white/20 border border-white/30 rounded-full mb-5 backdrop-blur-sm">
//           🚀 Ready to stand out?
//         </span>
//         <h2
//           className="text-3xl md:text-4xl font-black leading-tight max-w-xl mx-auto mb-4"
//           style={{ fontFamily: "'Sora', sans-serif" }}
//         >
//           Your dream job is one great resume away.
//         </h2>
//         <p className="text-blue-100 mb-8 text-base max-w-md mx-auto">
//           Join thousands of professionals who landed roles at top companies using Resux.
//         </p>
//         <Link
//           to="/app?state=register"
//           className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-9 py-4 rounded-2xl hover:bg-blue-50 shadow-xl active:scale-95 transition-all text-sm"
//         >
//           Build Your Resume Now
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Features;
















import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, LayoutTemplate, Download } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={26} className="text-blue-600" />,
    title: 'AI-Powered Writing Assistant',
    description: 'Let our AI craft compelling bullet points and summaries tailored to your target role.',
    iconBg: 'bg-blue-50 border-blue-100',
    cardBorder: 'border-blue-100',
    cardBg: 'bg-blue-50/40',
    num: '01',
  },
  {
    icon: <LayoutTemplate size={26} className="text-cyan-600" />,
    title: 'Professionally Designed Templates',
    description: 'Choose from dozens of ATS-friendly templates built by top career coaches.',
    iconBg: 'bg-cyan-50 border-cyan-100',
    cardBorder: 'border-cyan-100',
    cardBg: 'bg-cyan-50/40',
    num: '02',
  },
  {
    icon: <Download size={26} className="text-indigo-600" />,
    title: 'One-Click PDF Export',
    description: 'Download your polished resume as a pixel-perfect PDF instantly, ready to send.',
    iconBg: 'bg-indigo-50 border-indigo-100',
    cardBorder: 'border-indigo-100',
    cardBg: 'bg-indigo-50/40',
    num: '03',
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-white py-24 px-6 md:px-16 lg:px-24 xl:px-40">

      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">
          Why Resux?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          Everything you need to{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            land the job
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
          Powerful features that make resume building fast, smart, and stress-free.
        </p>
      </div>

      {/* Feature Cards — sharp corners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className={`relative border ${f.cardBorder} ${f.cardBg} p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            <div className={`w-13 h-13 border ${f.iconBg} p-3 inline-flex items-center justify-center mb-6 shadow-sm`}>
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {f.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            {/* Number accent */}
            <span className="absolute top-5 right-6 text-5xl font-black text-slate-100 select-none">
              {f.num}
            </span>
          </div>
        ))}
      </div>

      {/* Attraction / CTA Banner — sharp corners */}
      <div
        className="mt-24 relative overflow-hidden text-white text-center px-8 py-16 max-w-4xl mx-auto shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0891b2 100%)',
        }}
      >
        {/* Decorative */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 blur-3xl" />

        <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-white/20 border border-white/30 mb-5">
          🚀 Ready to stand out?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl mx-auto mb-4">
          Your dream job is one great resume away.
        </h2>
        <p className="text-blue-100 mb-8 text-base max-w-md mx-auto">
          Join thousands of professionals who landed roles at top companies using Resux.
        </p>
        <Link
          to="/app?state=register"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-9 py-4 hover:bg-blue-50 shadow-xl active:scale-95 transition-all text-sm"
        >
          Build Your Resume Now
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  );
};

export default Features;