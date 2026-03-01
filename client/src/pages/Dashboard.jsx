// import {useEffect, useState} from 'react';
// import {FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon} from 'lucide-react';
// import { dummyResumeData } from '../assets/assets';
// import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
// import api from '../configs/api.js'
// import pdfToText from 'react-pdftotext'

// const Dashboard=()=>{
//     const {user, token}=useSelector(state=>state.auth);

//     const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
//     const [allResumes, setAllResumes]=useState([]);
//     const [showCreateResume, setShowCreateResume]=useState(false);
//     const [showUploadResume, setShowUploadResume]=useState(false);
//     const [title, setTitle]=useState('');
//     const [resume,setResume]=useState(null);
//     const [editResumeId, setEditResumeId]=useState('');

//     const [isLoading, setIsLoading] = useState(false);

//     const navigate=useNavigate();

//     const loadAllResumes=async()=>{
//         try{
//             const {data} = await api.get('/api/users/resumes', {headers:{Authorization:token}});
//             setAllResumes(data.resumes)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const createResume=async(event)=>{
//         try{
//             event.preventDefault();
//             const {data} = await api.post('/api/resumes/create',{title}, {headers:{Authorization:token}});
//             setAllResumes([...allResumes,data.resume]);
//             setTitle('');
//             setShowCreateResume(false);
//             navigate(`/app/builder/${data.resume._id}`);
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const uploadResume=async(event)=>{
//         event.preventDefault();
//         setIsLoading(true);
//         try{
//             const resumeText=await pdfToText(resume);
//             const {data} = await api.post('/api/ai/upload-resume',{title,resumeText}, {headers:{Authorization:token}});
//             setTitle('')
//             setShowUploadResume(false);
//             setResume(null)
//             navigate(`/app/builder/${data.resumeId}`)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//         setIsLoading(false)
//     }

//     const editTitle=async(event)=>{
//         try{
//             event.preventDefault();
//             const {data} = await api.put('/api/resumes/update',{resumeId:editResumeId, resumeData:{title}} ,{headers:{Authorization:token}});
//             setAllResumes(allResumes.map(resume=>resume._id===editResumeId ? {...resume,title}: resume))
//             setTitle('')
//             setEditResumeId('')
//             toast.success(data.message)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const deleteResume=async(resumeId)=>{
//         try{
//             const confirm=window.confirm("Are you sure you want to delete this resume?");
//             if(confirm){
//                 const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers:{Authorization:token}});
//                 setAllResumes(allResumes.filter(resume=>resume._id!==resumeId))
//                 toast.success(data.message);
//             }
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }

//     }

//     useEffect(()=>{
//         loadAllResumes();
//     },[])

//     return(
//         <div>
//             <div className='max-w-7xl mx-auto px-4 py-8'>
//                 <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Umair Hassan</p>

//                 <div className='flex flex-col sm:flex-row gap-4'>
//                     <button onClick={()=>setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
//                         <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
//                         <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Create Resume</p>
//                     </button>

//                     <button onClick={()=>setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
//                         <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
//                         <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
//                     </button>
//                 </div>

//                 <hr className='border-slate-300 my-6 sm:w-[306px]' />

//                 <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
//                     {allResumes.map((resume,index)=>{
//                         const baseColor=colors[index % colors.length];
//                         return(
//                             <button key={index} onClick={()=>{navigate(`/app/builder/${resume._id}`)}} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, borderColor: baseColor+'40'}}>
//                                 <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{color:baseColor}} />
//                                 <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' style={{color:baseColor}}>{resume.title}</p>
//                                 <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{color:baseColor+'90'}}>Updated on {new Date(resume.updatedAt).toLocaleDateString()}</p>
//                                 <div onClick={e=>e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
//                                     <TrashIcon onClick={()=>deleteResume(resume._id)} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
//                                     <PencilIcon onClick={()=>{setEditResumeId(resume._id);setTitle(resume.title)}} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
//                                 </div>
//                             </button>
//                         )
//                     })}
//                 </div>

//                 {showCreateResume && (
//                     <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)} className="fixed inset-0 bg-black/50 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
//                         <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
//                             <h2 className='text-xl font-bold mb-4'>Create  Resume</h2>
//                             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="" id="" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />
//                             <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>
//                                 Create Resume
//                             </button>
//                             <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{setShowCreateResume(false); setTitle('')}} />
//                         </div>
//                     </form>
//                 )}

//                 {showUploadResume && (
//                     <form onSubmit={uploadResume} onClick={()=>setShowUploadResume(false)} className="fixed inset-0 bg-black/50 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
//                         <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
//                             <h2 className='text-xl font-bold mb-4'>Upload  Resume</h2>
//                             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="" id="" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />
//                               <div>
//                                 <label htmlFor="resume-input" className='block text-sm text-slate-700' >Select Resume File
//                                     <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors' >
//                                         {resume?(
//                                             <p className='text-green-700'>{resume.name}</p>
//                                         ):(
//                                             <>
//                                               <UploadCloudIcon className='size-14 stroke-1' />
//                                               <p>Upload Resume</p>
//                                             </>
//                                         )}
//                                     </div>
//                                 </label>
//                                 <input type="file" id='resume-input' accept='pdf' hidden onChange={(e)=>setResume(e.target.files[0])} />
//                               </div>
//                             <button disabled={isLoading} className='flex items-center justify-center gap-2 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>
//                                 {isLoading && <LoaderCircleIcon className='animate-spin szie-4 text-white'/>}
//                                 {isLoading ? "Uploading..." : "Upload Resume"}
//                             </button>
//                             <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{setShowUploadResume(false); setTitle('')}} />
//                         </div>
//                     </form> 
//                 )}


//                 {editResumeId && (
//                     <form onSubmit={editTitle} onClick={()=>setEditResumeId('')} className="fixed inset-0 bg-black/50 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
//                         <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
//                             <h2 className='text-xl font-bold mb-4'>Edit Title</h2>
//                             <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="" id="" placeholder='Enter new title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />
//                             <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>
//                                 Save Changes
//                             </button>
//                             <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=>{setEditResumeId(''); setTitle('')}} />
//                         </div>
//                     </form>
//                 )}

//             </div>
//         </div>
//     )
// }

// export default Dashboard;










// import React from 'react';
// import {useEffect, useState} from 'react';
// import {FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon} from 'lucide-react';
// import { dummyResumeData } from '../assets/assets';
// import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
// import api from '../configs/api.js'
// import pdfToText from 'react-pdftotext'

// const Dashboard=()=>{
//     const {user, token}=useSelector(state=>state.auth);

//     const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
//     const [allResumes, setAllResumes]=useState([]);
//     const [showCreateResume, setShowCreateResume]=useState(false);
//     const [showUploadResume, setShowUploadResume]=useState(false);
//     const [title, setTitle]=useState('');
//     const [resume,setResume]=useState(null);
//     const [editResumeId, setEditResumeId]=useState('');

//     const [isLoading, setIsLoading] = useState(false);

//     const navigate=useNavigate();

//     const loadAllResumes=async()=>{
//         try{
//             const {data} = await api.get('/api/users/resumes', {headers:{Authorization:token}});
//             setAllResumes(data.resumes)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const createResume=async(event)=>{
//         try{
//             event.preventDefault();
//             const {data} = await api.post('/api/resumes/create',{title}, {headers:{Authorization:token}});
//             setAllResumes([...allResumes,data.resume]);
//             setTitle('');
//             setShowCreateResume(false);
//             navigate(`/app/builder/${data.resume._id}`);
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const uploadResume=async(event)=>{
//         event.preventDefault();
//         setIsLoading(true);
//         try{
//             const resumeText=await pdfToText(resume);
//             const {data} = await api.post('/api/ai/upload-resume',{title,resumeText}, {headers:{Authorization:token}});
//             setTitle('')
//             setShowUploadResume(false);
//             setResume(null)
//             navigate(`/app/builder/${data.resumeId}`)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//         setIsLoading(false)
//     }

//     const editTitle=async(event)=>{
//         try{
//             event.preventDefault();
//             const {data} = await api.put('/api/resumes/update',{resumeId:editResumeId, resumeData:{title}} ,{headers:{Authorization:token}});
//             setAllResumes(allResumes.map(resume=>resume._id===editResumeId ? {...resume,title}: resume))
//             setTitle('')
//             setEditResumeId('')
//             toast.success(data.message)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const deleteResume=async(resumeId)=>{
//         try{
//             const confirm=window.confirm("Are you sure you want to delete this resume?");
//             if(confirm){
//                 const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers:{Authorization:token}});
//                 setAllResumes(allResumes.filter(resume=>resume._id!==resumeId))
//                 toast.success(data.message);
//             }
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     useEffect(()=>{
//         loadAllResumes();
//     },[])

//     return(
//         <div
//             className="min-h-screen"
//             style={{
//                 background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
//             }}
//         >
//             {/* Top navbar bar */}
//             <div className="w-full bg-white border-b border-slate-200 shadow-sm">
//                 <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
//                         </div>
//                         <span className="text-xl font-bold tracking-tight text-slate-800">
//                             Res<span className="text-blue-600">ux</span>
//                         </span>
//                     </div>
//                     <span className="text-sm text-slate-500 font-medium">
//                         Welcome back, <span className="text-slate-800 font-semibold">{user?.name || 'User'}</span>
//                     </span>
//                 </div>
//             </div>

//             <div className="max-w-6xl mx-auto px-6 py-10">

//                 {/* Page heading */}

//                 {/* Action cards */}
//                 <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                     <button
//                         onClick={()=>setShowCreateResume(true)}
//                         className="w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
//                     >
//                         <div className="w-11 h-11 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
//                             <PlusIcon className="text-white" size={22} />
//                         </div>
//                         <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Create Resume</p>
//                     </button>

//                     <button
//                         onClick={()=>setShowUploadResume(true)}
//                         className="w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
//                     >
//                         <div className="w-11 h-11 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
//                             <UploadCloudIcon className="text-white" size={20} />
//                         </div>
//                         <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Upload Existing</p>
//                     </button>
//                 </div>

//                 <div className="border-t border-slate-200 mb-8" />

//                 {/* Resume grid */}
//                 <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
//                     {allResumes.map((resume, index) => {
//                         const baseColor = colors[index % colors.length];
//                         return (
//                             <button
//                                 key={index}
//                                 onClick={()=>{navigate(`/app/builder/${resume._id}`)}}
//                                 className="relative w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
//                                 style={{
//                                     background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}30)`,
//                                     borderColor: baseColor + '50',
//                                 }}
//                             >
//                                 <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{color: baseColor}} />
//                                 <p className="text-sm font-semibold group-hover:scale-105 transition-all px-2 text-center" style={{color: baseColor}}>
//                                     {resume.title}
//                                 </p>
//                                 <p className="absolute bottom-2 text-[11px] px-2 text-center" style={{color: baseColor + '90'}}>
//                                     Updated {new Date(resume.updatedAt).toLocaleDateString()}
//                                 </p>
//                                 <div onClick={e=>e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
//                                     <TrashIcon
//                                         onClick={()=>deleteResume(resume._id)}
//                                         className="size-7 p-1.5 hover:bg-white/60 text-slate-600 transition-colors"
//                                     />
//                                     <PencilIcon
//                                         onClick={()=>{setEditResumeId(resume._id); setTitle(resume.title)}}
//                                         className="size-7 p-1.5 hover:bg-white/60 text-slate-600 transition-colors"
//                                     />
//                                 </div>
//                             </button>
//                         )
//                     })}
//                 </div>
//             </div>

//             {/* ── Create Resume Modal ── */}
//             {showCreateResume && (
//                 <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//                     <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
//                         <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">New Resume</div>
//                         <h2 className="text-xl font-bold text-slate-900 mb-1">Create Resume</h2>
//                         <p className="text-slate-400 text-xs mb-5">Give your resume a title to get started.</p>
//                         <input
//                             onChange={(e)=>setTitle(e.target.value)}
//                             value={title}
//                             type="text"
//                             placeholder="Enter resume title"
//                             className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
//                             required
//                         />
//                         <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors active:scale-95">
//                             Create Resume
//                         </button>
//                         <XIcon
//                             className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
//                             size={18}
//                             onClick={()=>{setShowCreateResume(false); setTitle('')}}
//                         />
//                     </div>
//                 </form>
//             )}

//             {/* ── Upload Resume Modal ── */}
//             {showUploadResume && (
//                 <form onSubmit={uploadResume} onClick={()=>setShowUploadResume(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//                     <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
//                         <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">Import PDF</div>
//                         <h2 className="text-xl font-bold text-slate-900 mb-1">Upload Resume</h2>
//                         <p className="text-slate-400 text-xs mb-5">We'll extract your data and fill it in automatically.</p>
//                         <input
//                             onChange={(e)=>setTitle(e.target.value)}
//                             value={title}
//                             type="text"
//                             placeholder="Enter resume title"
//                             className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
//                             required
//                         />
//                         <div>
//                             <label htmlFor="resume-input" className="block text-sm font-medium text-slate-600 mb-2">
//                                 Select Resume File
//                             </label>
//                             <div className="flex flex-col items-center justify-center gap-2 border border-dashed border-slate-300 hover:border-blue-400 text-slate-400 hover:text-blue-600 p-6 my-1 mb-4 cursor-pointer transition-colors">
//                                 {resume ? (
//                                     <p className="text-blue-600 text-sm font-medium">{resume.name}</p>
//                                 ) : (
//                                     <>
//                                         <UploadCloudIcon className="size-10 stroke-1" />
//                                         <p className="text-xs">Click to upload PDF</p>
//                                     </>
//                                 )}
//                             </div>
//                             <input type="file" id="resume-input" accept="pdf" hidden onChange={(e)=>setResume(e.target.files[0])} />
//                         </div>
//                         <button
//                             disabled={isLoading}
//                             className={`flex items-center justify-center gap-2 w-full h-11 bg-blue-600 text-white text-sm font-semibold transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 active:scale-95'}`}
//                         >
//                             {isLoading && <LoaderCircleIcon className="animate-spin size-4 text-white" />}
//                             {isLoading ? "Uploading..." : "Upload Resume"}
//                         </button>
//                         <XIcon
//                             className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
//                             size={18}
//                             onClick={()=>{setShowUploadResume(false); setTitle('')}}
//                         />
//                     </div>
//                 </form>
//             )}

//             {/* ── Edit Title Modal ── */}
//             {editResumeId && (
//                 <form onSubmit={editTitle} onClick={()=>setEditResumeId('')} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//                     <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
//                         <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">Rename</div>
//                         <h2 className="text-xl font-bold text-slate-900 mb-1">Edit Title</h2>
//                         <p className="text-slate-400 text-xs mb-5">Update the title of your resume.</p>
//                         <input
//                             onChange={(e)=>setTitle(e.target.value)}
//                             value={title}
//                             type="text"
//                             placeholder="Enter new title"
//                             className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
//                             required
//                         />
//                         <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors active:scale-95">
//                             Save Changes
//                         </button>
//                         <XIcon
//                             className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
//                             size={18}
//                             onClick={()=>{setEditResumeId(''); setTitle('')}}
//                         />
//                     </div>
//                 </form>
//             )}

//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
//                 body, * { font-family: 'Google Sans', 'Product Sans', Arial, sans-serif !important; }
//             `}</style>
//         </div>
//     )
// }

// export default Dashboard;


















// import React from 'react';
// import {useEffect, useState} from 'react';
// import {FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon, LogOutIcon} from 'lucide-react';
// import { dummyResumeData } from '../assets/assets';
// import {useNavigate} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../app/features/authSlice';
// import toast from 'react-hot-toast';
// import api from '../configs/api.js'
// import pdfToText from 'react-pdftotext'

// const Dashboard=()=>{
//     const {user, token}=useSelector(state=>state.auth);
//     const dispatch=useDispatch();

//     const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
//     const [allResumes, setAllResumes]=useState([]);
//     const [showCreateResume, setShowCreateResume]=useState(false);
//     const [showUploadResume, setShowUploadResume]=useState(false);
//     const [title, setTitle]=useState('');
//     const [resume,setResume]=useState(null);
//     const [editResumeId, setEditResumeId]=useState('');

//     const [isLoading, setIsLoading] = useState(false);

//     const navigate=useNavigate();

//     const loadAllResumes=async()=>{
//         try{
//             const {data} = await api.get('/api/users/resumes', {headers:{Authorization:token}});
//             setAllResumes(data.resumes)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const createResume=async(event)=>{
//         try{
//             event.preventDefault();
//             const {data} = await api.post('/api/resumes/create',{title}, {headers:{Authorization:token}});
//             setAllResumes([...allResumes,data.resume]);
//             setTitle('');
//             setShowCreateResume(false);
//             navigate(`/app/builder/${data.resume._id}`);
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const uploadResume=async(event)=>{
//         event.preventDefault();
//         setIsLoading(true);
//         try{
//             const resumeText=await pdfToText(resume);
//             const {data} = await api.post('/api/ai/upload-resume',{title,resumeText}, {headers:{Authorization:token}});
//             setTitle('')
//             setShowUploadResume(false);
//             setResume(null)
//             navigate(`/app/builder/${data.resumeId}`)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//         setIsLoading(false)
//     }

//     const editTitle=async(event)=>{
//         try{
//             event.preventDefault();
//             const {data} = await api.put('/api/resumes/update',{resumeId:editResumeId, resumeData:{title}} ,{headers:{Authorization:token}});
//             setAllResumes(allResumes.map(resume=>resume._id===editResumeId ? {...resume,title}: resume))
//             setTitle('')
//             setEditResumeId('')
//             toast.success(data.message)
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     const deleteResume=async(resumeId)=>{
//         try{
//             const confirm=window.confirm("Are you sure you want to delete this resume?");
//             if(confirm){
//                 const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers:{Authorization:token}});
//                 setAllResumes(allResumes.filter(resume=>resume._id!==resumeId))
//                 toast.success(data.message);
//             }
//         }catch(error){
//             toast.error(error?.response?.data?.message || error.message);
//         }
//     }

//     useEffect(()=>{
//         loadAllResumes();
//     },[])

//     return(
//         <div
//             className="min-h-screen"
//             style={{
//                 background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
//             }}
//         >
//             {/* Top navbar bar */}
//             <div className="w-full bg-white border-b border-slate-200 shadow-sm">
//                 <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
//                         </div>
//                         <span className="text-xl font-bold tracking-tight text-slate-800">
//                             Res<span className="text-blue-600">ux</span>
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <span className="text-sm text-slate-500 font-medium hidden sm:block">
//                             Hi, <span className="text-slate-800 font-semibold">{user?.name || 'User'}</span>
//                         </span>
//                         <button
//                             onClick={() => { dispatch(logout()); localStorage.removeItem('token'); }}
//                             className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
//                         >
//                             <LogOutIcon size={14} />
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-6xl mx-auto px-6 py-10">

//                 {/* Page heading */}

//                 {/* Action cards */}
//                 <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                     <button
//                         onClick={()=>setShowCreateResume(true)}
//                         className="w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
//                     >
//                         <div className="w-11 h-11 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
//                             <PlusIcon className="text-white" size={22} />
//                         </div>
//                         <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Create Resume</p>
//                     </button>

//                     <button
//                         onClick={()=>setShowUploadResume(true)}
//                         className="w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
//                     >
//                         <div className="w-11 h-11 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
//                             <UploadCloudIcon className="text-white" size={20} />
//                         </div>
//                         <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Upload Existing</p>
//                     </button>
//                 </div>

//                 <div className="border-t border-slate-200 mb-8" />

//                 {/* Resume grid */}
//                 <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
//                     {allResumes.map((resume, index) => {
//                         const baseColor = colors[index % colors.length];
//                         return (
//                             <button
//                                 key={index}
//                                 onClick={()=>{navigate(`/app/builder/${resume._id}`)}}
//                                 className="relative w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
//                                 style={{
//                                     background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}30)`,
//                                     borderColor: baseColor + '50',
//                                 }}
//                             >
//                                 <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{color: baseColor}} />
//                                 <p className="text-sm font-semibold group-hover:scale-105 transition-all px-2 text-center" style={{color: baseColor}}>
//                                     {resume.title}
//                                 </p>
//                                 <p className="absolute bottom-2 text-[11px] px-2 text-center" style={{color: baseColor + '90'}}>
//                                     Updated {new Date(resume.updatedAt).toLocaleDateString()}
//                                 </p>
//                                 <div onClick={e=>e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
//                                     <TrashIcon
//                                         onClick={()=>deleteResume(resume._id)}
//                                         className="size-7 p-1.5 hover:bg-white/60 text-slate-600 transition-colors"
//                                     />
//                                     <PencilIcon
//                                         onClick={()=>{setEditResumeId(resume._id); setTitle(resume.title)}}
//                                         className="size-7 p-1.5 hover:bg-white/60 text-slate-600 transition-colors"
//                                     />
//                                 </div>
//                             </button>
//                         )
//                     })}
//                 </div>
//             </div>

//             {/* ── Create Resume Modal ── */}
//             {showCreateResume && (
//                 <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//                     <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
//                         <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">New Resume</div>
//                         <h2 className="text-xl font-bold text-slate-900 mb-1">Create Resume</h2>
//                         <p className="text-slate-400 text-xs mb-5">Give your resume a title to get started.</p>
//                         <input
//                             onChange={(e)=>setTitle(e.target.value)}
//                             value={title}
//                             type="text"
//                             placeholder="Enter resume title"
//                             className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
//                             required
//                         />
//                         <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors active:scale-95">
//                             Create Resume
//                         </button>
//                         <XIcon
//                             className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
//                             size={18}
//                             onClick={()=>{setShowCreateResume(false); setTitle('')}}
//                         />
//                     </div>
//                 </form>
//             )}

//             {/* ── Upload Resume Modal ── */}
//             {showUploadResume && (
//                 <form onSubmit={uploadResume} onClick={()=>setShowUploadResume(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//                     <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
//                         <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">Import PDF</div>
//                         <h2 className="text-xl font-bold text-slate-900 mb-1">Upload Resume</h2>
//                         <p className="text-slate-400 text-xs mb-5">We'll extract your data and fill it in automatically.</p>
//                         <input
//                             onChange={(e)=>setTitle(e.target.value)}
//                             value={title}
//                             type="text"
//                             placeholder="Enter resume title"
//                             className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
//                             required
//                         />
//                         <div>
//                             <label htmlFor="resume-input" className="block text-sm font-medium text-slate-600 mb-2">
//                                 Select Resume File
//                             </label>
//                             <div className="flex flex-col items-center justify-center gap-2 border border-dashed border-slate-300 hover:border-blue-400 text-slate-400 hover:text-blue-600 p-6 my-1 mb-4 cursor-pointer transition-colors">
//                                 {resume ? (
//                                     <p className="text-blue-600 text-sm font-medium">{resume.name}</p>
//                                 ) : (
//                                     <>
//                                         <UploadCloudIcon className="size-10 stroke-1" />
//                                         <p className="text-xs">Click to upload PDF</p>
//                                     </>
//                                 )}
//                             </div>
//                             <input type="file" id="resume-input" accept="pdf" hidden onChange={(e)=>setResume(e.target.files[0])} />
//                         </div>
//                         <button
//                             disabled={isLoading}
//                             className={`flex items-center justify-center gap-2 w-full h-11 bg-blue-600 text-white text-sm font-semibold transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 active:scale-95'}`}
//                         >
//                             {isLoading && <LoaderCircleIcon className="animate-spin size-4 text-white" />}
//                             {isLoading ? "Uploading..." : "Upload Resume"}
//                         </button>
//                         <XIcon
//                             className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
//                             size={18}
//                             onClick={()=>{setShowUploadResume(false); setTitle('')}}
//                         />
//                     </div>
//                 </form>
//             )}

//             {/* ── Edit Title Modal ── */}
//             {editResumeId && (
//                 <form onSubmit={editTitle} onClick={()=>setEditResumeId('')} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//                     <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
//                         <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">Rename</div>
//                         <h2 className="text-xl font-bold text-slate-900 mb-1">Edit Title</h2>
//                         <p className="text-slate-400 text-xs mb-5">Update the title of your resume.</p>
//                         <input
//                             onChange={(e)=>setTitle(e.target.value)}
//                             value={title}
//                             type="text"
//                             placeholder="Enter new title"
//                             className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
//                             required
//                         />
//                         <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors active:scale-95">
//                             Save Changes
//                         </button>
//                         <XIcon
//                             className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
//                             size={18}
//                             onClick={()=>{setEditResumeId(''); setTitle('')}}
//                         />
//                     </div>
//                 </form>
//             )}

//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
//                 body, * { font-family: 'Google Sans', 'Product Sans', Arial, sans-serif !important; }
//             `}</style>
//         </div>
//     )
// }

// export default Dashboard;

















import React from 'react';
import {useEffect, useState} from 'react';
import {FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon, LogOutIcon} from 'lucide-react';
import { dummyResumeData } from '../assets/assets';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/features/authSlice';
import toast from 'react-hot-toast';
import api from '../configs/api.js'
import pdfToText from 'react-pdftotext'

const Dashboard=()=>{
    const {user, token}=useSelector(state=>state.auth);
    const dispatch=useDispatch();

    const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
    const [allResumes, setAllResumes]=useState([]);
    const [showCreateResume, setShowCreateResume]=useState(false);
    const [showUploadResume, setShowUploadResume]=useState(false);
    const [title, setTitle]=useState('');
    const [resume,setResume]=useState(null);
    const [editResumeId, setEditResumeId]=useState('');

    const [isLoading, setIsLoading] = useState(false);

    const navigate=useNavigate();

    const loadAllResumes=async()=>{
        try{
            const {data} = await api.get('/api/users/resumes', {headers:{Authorization:token}});
            setAllResumes(data.resumes)
        }catch(error){
            toast.error(error?.response?.data?.message || error.message);
        }
    }

    const createResume=async(event)=>{
        try{
            event.preventDefault();
            const {data} = await api.post('/api/resumes/create',{title}, {headers:{Authorization:token}});
            setAllResumes([...allResumes,data.resume]);
            setTitle('');
            setShowCreateResume(false);
            navigate(`/app/builder/${data.resume._id}`);
        }catch(error){
            toast.error(error?.response?.data?.message || error.message);
        }
    }

    const uploadResume=async(event)=>{
        event.preventDefault();
        setIsLoading(true);
        try{
            const resumeText=await pdfToText(resume);
            const {data} = await api.post('/api/ai/upload-resume',{title,resumeText}, {headers:{Authorization:token}});
            setTitle('')
            setShowUploadResume(false);
            setResume(null)
            navigate(`/app/builder/${data.resumeId}`)
        }catch(error){
            toast.error(error?.response?.data?.message || error.message);
        }
        setIsLoading(false)
    }

    const editTitle=async(event)=>{
        try{
            event.preventDefault();
            const {data} = await api.put('/api/resumes/update',{resumeId:editResumeId, resumeData:{title}} ,{headers:{Authorization:token}});
            setAllResumes(allResumes.map(resume=>resume._id===editResumeId ? {...resume,title}: resume))
            setTitle('')
            setEditResumeId('')
            toast.success(data.message)
        }catch(error){
            toast.error(error?.response?.data?.message || error.message);
        }
    }

    const deleteResume=async(resumeId)=>{
        try{
            const confirm=window.confirm("Are you sure you want to delete this resume?");
            if(confirm){
                const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers:{Authorization:token}});
                setAllResumes(allResumes.filter(resume=>resume._id!==resumeId))
                toast.success(data.message);
            }
        }catch(error){
            toast.error(error?.response?.data?.message || error.message);
        }
    }

    useEffect(()=>{
        loadAllResumes();
    },[])

    return(
        <div
            className="min-h-screen"
            style={{
                background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
            }}
        >

            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Page heading */}

                {/* Action cards */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button
                        onClick={()=>setShowCreateResume(true)}
                        className="w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    >
                        <div className="w-11 h-11 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                            <PlusIcon className="text-white" size={22} />
                        </div>
                        <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Create Resume</p>
                    </button>

                    <button
                        onClick={()=>setShowUploadResume(true)}
                        className="w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-3 text-slate-600 bg-white border border-dashed border-slate-300 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    >
                        <div className="w-11 h-11 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                            <UploadCloudIcon className="text-white" size={20} />
                        </div>
                        <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">Upload Existing</p>
                    </button>
                </div>

                <div className="border-t border-slate-200 mb-8" />

                {/* Resume grid */}
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
                    {allResumes.map((resume, index) => {
                        const baseColor = colors[index % colors.length];
                        return (
                            <button
                                key={index}
                                onClick={()=>{navigate(`/app/builder/${resume._id}`)}}
                                className="relative w-full sm:w-40 h-44 flex flex-col items-center justify-center gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                                style={{
                                    background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}30)`,
                                    borderColor: baseColor + '50',
                                }}
                            >
                                <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{color: baseColor}} />
                                <p className="text-sm font-semibold group-hover:scale-105 transition-all px-2 text-center" style={{color: baseColor}}>
                                    {resume.title}
                                </p>
                                <p className="absolute bottom-2 text-[11px] px-2 text-center" style={{color: baseColor + '90'}}>
                                    Updated {new Date(resume.updatedAt).toLocaleDateString()}
                                </p>
                                <div onClick={e=>e.stopPropagation()} className="absolute top-1 right-1 group-hover:flex items-center hidden">
                                    <TrashIcon
                                        onClick={()=>deleteResume(resume._id)}
                                        className="size-7 p-1.5 hover:bg-white/60 text-slate-600 transition-colors"
                                    />
                                    <PencilIcon
                                        onClick={()=>{setEditResumeId(resume._id); setTitle(resume.title)}}
                                        className="size-7 p-1.5 hover:bg-white/60 text-slate-600 transition-colors"
                                    />
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* ── Create Resume Modal ── */}
            {showCreateResume && (
                <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
                        <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">New Resume</div>
                        <h2 className="text-xl font-bold text-slate-900 mb-1">Create Resume</h2>
                        <p className="text-slate-400 text-xs mb-5">Give your resume a title to get started.</p>
                        <input
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}
                            type="text"
                            placeholder="Enter resume title"
                            className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
                            required
                        />
                        <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors active:scale-95">
                            Create Resume
                        </button>
                        <XIcon
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
                            size={18}
                            onClick={()=>{setShowCreateResume(false); setTitle('')}}
                        />
                    </div>
                </form>
            )}

            {/* ── Upload Resume Modal ── */}
            {showUploadResume && (
                <form onSubmit={uploadResume} onClick={()=>setShowUploadResume(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
                        <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">Import PDF</div>
                        <h2 className="text-xl font-bold text-slate-900 mb-1">Upload Resume</h2>
                        <p className="text-slate-400 text-xs mb-5">We'll extract your data and fill it in automatically.</p>
                        <input
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}
                            type="text"
                            placeholder="Enter resume title"
                            className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
                            required
                        />
                        <div>
                            <label htmlFor="resume-input" className="block text-sm font-medium text-slate-600 mb-2">
                                Select Resume File
                            </label>
                            <label htmlFor="resume-input" className="flex flex-col items-center justify-center gap-2 border border-dashed border-slate-300 hover:border-blue-400 text-slate-400 hover:text-blue-600 p-6 my-1 mb-4 cursor-pointer transition-colors">
                                {resume ? (
                                    <p className="text-blue-600 text-sm font-medium">{resume.name}</p>
                                ) : (
                                    <>
                                        <UploadCloudIcon className="size-10 stroke-1" />
                                        <p className="text-xs">Click to upload PDF</p>
                                    </>
                                )}
                            </label>
                            <input type="file" id="resume-input" accept=".pdf" hidden onChange={(e)=>setResume(e.target.files[0])} />
                        </div>
                        <button
                            disabled={isLoading}
                            className={`flex items-center justify-center gap-2 w-full h-11 bg-blue-600 text-white text-sm font-semibold transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 active:scale-95'}`}
                        >
                            {isLoading && <LoaderCircleIcon className="animate-spin size-4 text-white" />}
                            {isLoading ? "Uploading..." : "Upload Resume"}
                        </button>
                        <XIcon
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
                            size={18}
                            onClick={()=>{setShowUploadResume(false); setTitle('')}}
                        />
                    </div>
                </form>
            )}

            {/* ── Edit Title Modal ── */}
            {editResumeId && (
                <form onSubmit={editTitle} onClick={()=>setEditResumeId('')} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div onClick={e=>e.stopPropagation()} className="relative bg-white border border-slate-200 shadow-xl w-full max-w-sm p-7">
                        <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">Rename</div>
                        <h2 className="text-xl font-bold text-slate-900 mb-1">Edit Title</h2>
                        <p className="text-slate-400 text-xs mb-5">Update the title of your resume.</p>
                        <input
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}
                            type="text"
                            placeholder="Enter new title"
                            className="w-full px-4 h-11 border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 transition-colors mb-4 bg-white"
                            required
                        />
                        <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors active:scale-95">
                            Save Changes
                        </button>
                        <XIcon
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
                            size={18}
                            onClick={()=>{setEditResumeId(''); setTitle('')}}
                        />
                    </div>
                </form>
            )}

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
                body, * { font-family: 'Google Sans', 'Product Sans', Arial, sans-serif !important; }
            `}</style>
        </div>
    )
}

export default Dashboard;