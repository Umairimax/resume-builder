// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {useNavigate, Link} from 'react-router-dom';
// import { logout } from '../app/features/authSlice.js';

// const Navbar=()=>{
//     const {user}=useSelector(state=>state.auth);
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     const logoutUser=()=>{
//         navigate('/');
//         dispatch(logout());
//     }
//     return(
//         <div className='shadow bg-white'>
//             <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
//                 <a href="/"><img src="/logo.svg" alt="logo" className='h-9 w-auto' /></a>

//                 <div className='flex items-center gap-4 text-sm'>
//                     <p className='max-sm:hidden'>Hi, {user?.name}</p>
//                     <button onClick={logoutUser} className='bg-white hover:bg-slate-50  border border-gray-300  px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar;












import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { logout } from '../app/features/authSlice.js';
import { LogOutIcon } from 'lucide-react';

const Navbar=()=>{
    const {user}=useSelector(state=>state.auth);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logoutUser=()=>{
        navigate('/');
        dispatch(logout());
    }
    return(
        <div className="w-full bg-white border-b border-slate-200 shadow-sm">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3.5 text-slate-800">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-800">
                        Resux
                    </span>
                </Link>

                <div className="flex items-center gap-4 text-sm">
                    <p className="max-sm:hidden text-slate-500 font-medium">
                        Hi, <span className="text-slate-800 font-semibold">{user?.name}</span>
                    </p>
                    <button
                        onClick={logoutUser}
                        className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 active:scale-95 transition-all"
                    >
                        <LogOutIcon size={14} />
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;