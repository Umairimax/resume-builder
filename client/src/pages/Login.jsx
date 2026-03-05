// import { Mail, User2Icon, Lock } from 'lucide-react';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../app/features/authSlice';
// import toast from 'react-hot-toast';
// import api from '../configs/api.js';

// const Login=()=>{

//     const dispatch=useDispatch();

//     const query=new URLSearchParams(window.location.search);
//     const urlState=query.get('state');

//     const [state, setState] = React.useState(urlState || "login")
//     const [loading, setLoading]=React.useState(false);

//     const [formData, setFormData] = React.useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setLoading(true);
//         try{
//             const {data} = await api.post(`/api/users/${state}`, formData)
//             dispatch(login(data))
//             localStorage.setItem('token',data.token);
//             toast.success(data.message);
//         }catch(error){
//             toast(error?.response?.data?.message || error.message);
//         }finally{
//             setLoading(false);
//         }

//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({ ...prev, [name]: value }))
//     }

//     return(
//         <div className='flex items-center justify-center min-h-screen bg-gray-50'>
//             <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
//                 <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
//                 <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
//                 {state !== "login" && (
//                     <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//                         <User2Icon size={16} color='#6B7280' />
//                         <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0" value={formData.name} onChange={handleChange} required />
//                     </div>
//                 )}
//                 <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//                     <Mail size={13} color='#6B7280' />
//                     <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//                     <Lock size={13} color='#6B7280' />
//                     <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} required />
//                 </div>
//                 <div className="mt-4 text-left text-green-500">
//                     <button className="text-sm" type="reset">Forget password?</button>
//                 </div>


//                 {/* <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity">
//                     {state === "login" ? "Login" : "Sign up"}
//                 </button> */}

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className={`mt-2 w-full h-11 rounded-full text-white bg-green-500 
//                     hover:opacity-90 transition-opacity flex items-center justify-center gap-2
//                     ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
//                 >
//                     {loading ? (
//                         <>
//                             <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                             {state === "login" ? "Logging in..." : "Signing up..."}
//                         </>
//                     ) : (
//                         state === "login" ? "Login" : "Sign up"
//                     )}
//                 </button>
//                 <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-500 text-sm mt-3 mb-11">{state === "login" ? "Don't have an account?" : "Already have an account?"} <a href="#" className="text-green-500 hover:underline">click here</a></p>
//             </form>
//         </div>
//     )
// }

// export default Login;









// import { Mail, User2Icon, Lock } from 'lucide-react';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../app/features/authSlice';
// import toast from 'react-hot-toast';
// import api from '../configs/api.js';

// const Login = () => {

//     const dispatch = useDispatch();

//     const query = new URLSearchParams(window.location.search);
//     const urlState = query.get('state');

//     const [state, setState] = React.useState(urlState || "login")
//     const [loading, setLoading] = React.useState(false);

//     const [formData, setFormData] = React.useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setLoading(true);
//         try {
//             const { data } = await api.post(`/api/users/${state}`, formData)
//             dispatch(login(data))
//             localStorage.setItem('token', data.token);
//             toast.success(data.message);
//         } catch (error) {
//             toast(error?.response?.data?.message || error.message);
//         } finally {
//             setLoading(false);
//         }
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({ ...prev, [name]: value }))
//     }

//     return (
//         <div
//             className="flex items-center justify-center min-h-screen px-4"
//             style={{
//                 background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
//             }}
//         >
//             {/* Decorative blobs */}
//             <div
//                 className="fixed top-0 right-0 opacity-20 pointer-events-none -z-0"
//                 style={{
//                     width: '500px', height: '500px',
//                     background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
//                     transform: 'translate(30%, -30%)',
//                 }}
//             />
//             <div
//                 className="fixed bottom-0 left-0 opacity-10 pointer-events-none -z-0"
//                 style={{
//                     width: '400px', height: '400px',
//                     background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
//                     transform: 'translate(-30%, 30%)',
//                 }}
//             />

//             <form
//                 onSubmit={handleSubmit}
//                 className="relative z-10 w-full sm:w-[420px] bg-white border border-slate-200 shadow-sm px-10 py-12"
//             >
//                 {/* Header */}
//                 <div className="mb-8">
//                     {/* Brand */}
//                     <a href="/" className="flex items-center gap-2 mb-8">
//                         <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
//                         </div>
//                         <span className="text-xl font-bold tracking-tight text-slate-800">
//                             Res<span className="text-blue-600">ux</span>
//                         </span>
//                     </a>

//                     <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 mb-4">
//                         {state === "login" ? "Welcome back" : "Get started free"}
//                     </div>
//                     <h1 className="text-3xl font-bold text-slate-900">
//                         {state === "login" ? "Login" : "Sign up"}
//                     </h1>
//                     <p className="text-slate-500 text-sm mt-1">
//                         Please {state === "login" ? "sign in" : "register"} to continue
//                     </p>
//                 </div>

//                 {/* Name field (signup only) */}
//                 {state !== "login" && (
//                     <div className="flex items-center w-full bg-white border border-slate-200 h-12 overflow-hidden pl-4 gap-3 mb-4 focus-within:border-blue-400 transition-colors">
//                         <User2Icon size={15} className="text-slate-400 shrink-0" />
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Full name"
//                             className="border-none outline-none ring-0 w-full text-sm text-slate-700 placeholder-slate-400 bg-transparent"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 )}

//                 {/* Email */}
//                 <div className="flex items-center w-full bg-white border border-slate-200 h-12 overflow-hidden pl-4 gap-3 mb-4 focus-within:border-blue-400 transition-colors">
//                     <Mail size={15} className="text-slate-400 shrink-0" />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email address"
//                         className="border-none outline-none ring-0 w-full text-sm text-slate-700 placeholder-slate-400 bg-transparent"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 {/* Password */}
//                 <div className="flex items-center w-full bg-white border border-slate-200 h-12 overflow-hidden pl-4 gap-3 mb-3 focus-within:border-blue-400 transition-colors">
//                     <Lock size={15} className="text-slate-400 shrink-0" />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         className="border-none outline-none ring-0 w-full text-sm text-slate-700 placeholder-slate-400 bg-transparent"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 {/* Forgot password */}
//                 <div className="text-right mb-6">
//                     <button type="reset" className="text-xs text-blue-600 hover:underline">
//                         Forgot password?
//                     </button>
//                 </div>

//                 {/* Submit */}
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className={`w-full h-12 text-white bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-blue-200 ${loading ? "opacity-70 cursor-not-allowed" : "active:scale-95"}`}
//                 >
//                     {loading ? (
//                         <>
//                             <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                             {state === "login" ? "Logging in..." : "Signing up..."}
//                         </>
//                     ) : (
//                         state === "login" ? "Login" : "Sign up"
//                     )}
//                 </button>

//                 {/* Toggle */}
//                 <p
//                     onClick={() => setState(prev => prev === "login" ? "register" : "login")}
//                     className="text-slate-500 text-sm mt-5 text-center cursor-pointer"
//                 >
//                     {state === "login" ? "Don't have an account?" : "Already have an account?"}
//                     {' '}
//                     <span className="text-blue-600 hover:underline font-medium">Click here</span>
//                 </p>

//                 {/* Divider line accent */}
//                 <div className="mt-8 pt-6 border-t border-slate-100 text-center">
//                     <span className="text-xs text-slate-400">Secured by Resux · AI Resume Builder</span>
//                 </div>
//             </form>

//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
//                 body, * { font-family: 'Google Sans', 'Product Sans', Arial, sans-serif !important; }
//             `}</style>
//         </div>
//     )
// }

// export default Login;





















import { Mail, User2Icon, Lock } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/authSlice';
import toast from 'react-hot-toast';
import api from '../configs/api.js';

const Login = () => {

    const dispatch = useDispatch();

    const query = new URLSearchParams(window.location.search);
    const urlState = query.get('state');

    const [state, setState] = React.useState(urlState || "login")
    const [loading, setLoading] = React.useState(false);
    const [mailError, setMailError]=React.useState(false);
    const [passwordError,setPasswordError]=React.useState(false);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token);
            toast.success(data.message);
        } catch (error) {
            toast(error?.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(name==="email" && value && !emailRegex.test(value)){
            setMailError(true);
        } else {
            setMailError(false);
        }

        if(name==="password" && value.length<6){
            setPasswordError(true);
        }else{setPasswordError(false);}
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen px-4"
            style={{
                background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #e8f4fd 100%)',
            }}
        >
            {/* Decorative blobs */}
            <div
                className="fixed top-0 right-0 opacity-20 pointer-events-none -z-0"
                style={{
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                    transform: 'translate(30%, -30%)',
                }}
            />
            <div
                className="fixed bottom-0 left-0 opacity-10 pointer-events-none -z-0"
                style={{
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)',
                    transform: 'translate(-30%, 30%)',
                }}
            />

            <form
                onSubmit={handleSubmit}
                className="relative z-10 w-full sm:w-[420px] bg-white border border-slate-200 shadow-sm px-10 py-7"
            >
                {/* Header */}
                <div className="mb-5">
                    {/* Brand */}
                    <a href="/" className="flex items-center gap-2 mb-5">
                        <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800">
                            Resux
                        </span>
                    </a>

                    <h1 className="text-2xl font-bold text-slate-900">
                        {state === "login" ? "Login" : "Sign up"}
                    </h1>
                    <p className="text-slate-500 text-sm mt-0.5">
                        Please {state === "login" ? "sign in" : "register"} to continue
                    </p>
                </div>

                {/* Name field (signup only) */}
                {state !== "login" && (
                    <div className="flex items-center w-full bg-white border border-slate-200 h-11 overflow-hidden pl-4 gap-3 mb-3 focus-within:border-blue-400 transition-colors">
                        <User2Icon size={15} className="text-slate-400 shrink-0" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            className="border-none outline-none ring-0 w-full text-sm text-slate-700 placeholder-slate-400 bg-transparent"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                {/* Email */}
                <div className="flex items-center w-full bg-white border border-slate-200 h-11 overflow-hidden pl-4 gap-3 mb-3 focus-within:border-blue-400 transition-colors">
                    <Mail size={15} className="text-slate-400 shrink-0" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="border-none outline-none ring-0 w-full text-sm text-slate-700 placeholder-slate-400 bg-transparent"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                {mailError && <p className="text-red-500 text-xs -mt-2 mb-1">Please enter a valid email address</p>}

                {/* Password */}
                <div className="flex items-center w-full bg-white border border-slate-200 h-11 overflow-hidden pl-4 gap-3 mb-2 focus-within:border-blue-400 transition-colors">
                    <Lock size={15} className="text-slate-400 shrink-0" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="border-none outline-none ring-0 w-full text-sm text-slate-700 placeholder-slate-400 bg-transparent"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {passwordError && <p className="text-red-500 text-xs -mt-2 mb-1">Password must be atleast 6 characters</p>}

                {/* Forgot password */}
                <div className="text-right mb-4">
                    <button type="reset" className="text-xs text-blue-600 hover:underline">
                        Forgot password?
                    </button>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading || mailError || passwordError}
                    className={`w-full h-12 text-white bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-blue-200 ${loading || mailError || passwordError ? "opacity-70 cursor-not-allowed" : "active:scale-95"}`}
                >
                    {loading ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            {state === "login" ? "Logging in..." : "Signing up..."}
                        </>
                    ) : (
                        state === "login" ? "Login" : "Sign up"
                    )}
                </button>

                {/* Toggle */}
                <p
                    onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                    className="text-slate-500 text-sm mt-4 text-center cursor-pointer"
                >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    {' '}
                    <span className="text-blue-600 hover:underline font-medium">Click here</span>
                </p>

                {/* Divider line accent */}
                <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                    <span className="text-xs text-slate-400">Secured by Resux · AI Resume Builder</span>
                </div>
            </form>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
                body, * { font-family: 'Google Sans', 'Product Sans', Arial, sans-serif !important; }
            `}</style>
        </div>
    )
}

export default Login;