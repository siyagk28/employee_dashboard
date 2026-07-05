// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Neo-Brutalism uses hard drop shadows and thick borders
//   const hardShadow = "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
//   const hoverShadow = "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all";

//   return (
//     <div className="flex h-screen bg-[#F4F4F0] font-mono text-black selection:bg-[#FF90E8] overflow-hidden border-8 border-black box-border">
      
//       {/* --- MOBILE OVERLAY --- */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* --- SIDEBAR --- */}
//       <aside className={`fixed inset-y-0 left-0 w-64 bg-[#FFE800] border-r-4 border-black flex flex-col justify-between z-50 transform transition-transform duration-200 md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div>
//           {/* Logo */}
//           <div className="h-20 flex items-center justify-between px-6 border-b-4 border-black bg-white">
//             <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase">
//               <div className={`w-8 h-8 bg-[#FF90E8] border-2 border-black flex items-center justify-center ${hardShadow}`}>A</div>
//               ACME_
//             </div>
//             <button className="md:hidden text-black font-black text-xl hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
//               [X]
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="p-6 space-y-4">
//             <a href="#" className={`block px-4 py-3 bg-[#38E54D] border-2 border-black font-bold uppercase text-sm ${hardShadow}`}>
//               * Dashboard
//             </a>
//             {['Leave Request', 'Directory', 'Comms', 'Settings'].map((item, idx) => (
//               <a key={item} href="#" className={`block px-4 py-3 bg-white border-2 border-black font-bold uppercase text-sm ${hardShadow} ${hoverShadow}`}>
//                 {'>'} {item}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* User Profile */}
//         <div className={`m-6 p-4 bg-white border-2 border-black flex items-center gap-3 ${hardShadow}`}>
//           <div className="w-12 h-12 border-2 border-black overflow-hidden bg-[#FF90E8]">
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="object-cover w-full h-full grayscale contrast-125" />
//           </div>
//           <div>
//             <p className="font-black text-sm uppercase">Alex J.</p>
//             <p className="text-xs font-bold bg-black text-white px-1 inline-block">DEV</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative bg-[#F4F4F0]">
        
//         {/* Header */}
//         <header className="h-20 bg-white border-b-4 border-black flex items-center justify-between px-6 md:px-10 shrink-0 z-10">
//           <div className="flex items-center gap-6 w-full">
//             <button 
//               className={`md:hidden px-3 py-2 bg-[#FF90E8] border-2 border-black font-black ${hardShadow} ${hoverShadow}`}
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               MENU
//             </button>
            
//             <div className="w-full max-w-lg hidden sm:block relative">
//               <input 
//                 type="text" 
//                 placeholder="SEARCH_QUERY..." 
//                 className={`w-full bg-[#E0E0E0] border-4 border-black px-4 py-3 text-sm font-bold placeholder-black/50 focus:outline-none focus:bg-white ${hardShadow}`}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-4 ml-auto">
//             <button className={`bg-[#FFE800] border-2 border-black px-3 py-2 font-bold uppercase ${hardShadow} ${hoverShadow}`}>
//               Alerts [1]
//             </button>
//             <button className={`bg-[#000000] text-white border-2 border-black px-4 py-2 font-bold uppercase flex items-center gap-2 ${hardShadow} hover:bg-zinc-800 transition-colors`}>
//                AI_SYS
//             </button>
//           </div>
//         </header>

//         {/* Scrolling Ticker (Unique UI Element) */}
//         <div className="border-b-4 border-black bg-[#FF90E8] py-2 overflow-hidden flex whitespace-nowrap">
//           <div className="font-black uppercase tracking-widest animate-pulse">
//             *** SYSTEM NOMINAL *** NO NEW LEAVE REQUESTS *** SPRINT PLANNING AT 14:00 *** SYSTEM NOMINAL *** 
//           </div>
//         </div>

//         {/* Dashboard Grid */}
//         <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          
//           {searchQuery && (
//             <div className={`mb-8 bg-black text-white px-6 py-4 border-4 border-black font-bold uppercase flex items-center gap-3 ${hardShadow}`}>
//               <span>[SEARCH_ACTIVE]:</span> 
//               <span className="bg-[#FF90E8] text-black px-2 py-1">{searchQuery}</span>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto pb-12">
            
//             {/* 1. Attendance Summary */}
//             <div className={`bg-[#38E54D] p-8 border-4 border-black flex flex-col group ${hardShadow}`}>
//               <h3 className="font-black text-xl uppercase mb-6 bg-black text-white p-2 inline-block self-start">Activity_Log</h3>
//               <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
//                 <span className="font-bold uppercase tracking-wider">Status: Online</span>
//                 <span className="font-black bg-white border-2 border-black px-3 py-1">7.5H</span>
//               </div>
//               <div className="flex items-end justify-between h-32 gap-3 mt-auto">
//                 {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
//                   <div key={i} className="flex flex-col items-center gap-2 flex-1 cursor-pointer">
//                     <div className="w-full bg-black border-2 border-white transition-all duration-300 hover:bg-white hover:border-black" style={{ height: `${[60, 75, 45, 90, 80][i]}%` }}></div>
//                     <span className="text-sm font-black uppercase">{day}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Leave Balance */}
//             <div className={`bg-white p-8 border-4 border-black flex flex-col justify-between ${hardShadow}`}>
//               <h3 className="font-black text-xl uppercase mb-4 bg-[#FF90E8] p-2 inline-block self-start border-2 border-black">Time_Off</h3>
//               <div className="flex flex-col gap-6 py-4">
                
//                 <div className={`bg-[#F4F4F0] border-4 border-black p-4 flex items-center justify-between ${hardShadow} ${hoverShadow}`}>
//                   <div className="font-bold uppercase">Vacation</div>
//                   <div className="text-3xl font-black bg-[#FFE800] px-2 border-2 border-black">14</div>
//                 </div>

//                 <div className={`bg-[#F4F4F0] border-4 border-black p-4 flex items-center justify-between ${hardShadow} ${hoverShadow}`}>
//                   <div className="font-bold uppercase">Sick Leave</div>
//                   <div className="text-3xl font-black bg-[#38E54D] px-2 border-2 border-black">07</div>
//                 </div>

//               </div>
//             </div>

//             {/* 3. Submit Leave Request Form */}
//             <div className={`bg-[#FFE800] p-8 border-4 border-black md:col-span-2 xl:col-span-1 ${hardShadow}`}>
//               <h3 className="font-black text-xl uppercase mb-6 bg-black text-white p-2 inline-block self-start">Submit_Form</h3>
//               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-black uppercase mb-2">Start</label>
//                     <input type="date" className="w-full bg-white border-4 border-black p-2 font-bold focus:outline-none focus:bg-[#E0E0E0]" defaultValue="2024-05-24" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-black uppercase mb-2">End</label>
//                     <input type="date" className="w-full bg-white border-4 border-black p-2 font-bold focus:outline-none focus:bg-[#E0E0E0]" defaultValue="2024-05-26" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-black uppercase mb-2">Type</label>
//                   <select className="w-full bg-white border-4 border-black p-3 font-bold focus:outline-none focus:bg-[#E0E0E0] appearance-none cursor-pointer">
//                     <option>VACATION</option>
//                     <option>SICK LEAVE</option>
//                   </select>
//                 </div>
//                 <button type="submit" className={`w-full bg-black text-white py-4 font-black text-lg uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors ${hardShadow} mt-4`}>
//                   Execute //
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Neo-Brutalism uses hard drop shadows and thick borders
//   const hardShadow = "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
//   const hoverShadow = "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all";

//   return (
//     <div className="flex h-screen bg-[#F4F4F0] font-mono text-black selection:bg-[#FF90E8] overflow-hidden border-8 border-black box-border">
      
//       {/* --- MOBILE OVERLAY --- */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* --- SIDEBAR --- */}
//       <aside className={`fixed inset-y-0 left-0 w-64 bg-[#FFE800] border-r-4 border-black flex flex-col justify-between z-50 transform transition-transform duration-200 md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div>
//           {/* Logo */}
//           <div className="h-20 flex items-center justify-between px-6 border-b-4 border-black bg-white">
//             <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase">
//               <div className={`w-8 h-8 bg-[#FF90E8] border-2 border-black flex items-center justify-center ${hardShadow}`}>A</div>
//               ACME_
//             </div>
//             <button className="md:hidden text-black font-black text-xl hover:text-red-500" onClick={() => setIsMobileMenuOpen(false)}>
//               [X]
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="p-6 space-y-4">
//             <a href="#" className={`block px-4 py-3 bg-[#38E54D] border-2 border-black font-bold uppercase text-sm ${hardShadow}`}>
//               * Dashboard
//             </a>
//             {['Leave Request', 'Directory', 'Comms', 'Settings'].map((item, idx) => (
//               <a key={item} href="#" className={`block px-4 py-3 bg-white border-2 border-black font-bold uppercase text-sm ${hardShadow} ${hoverShadow}`}>
//                 {'>'} {item}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* User Profile */}
//         <div className={`m-6 p-4 bg-white border-2 border-black flex items-center gap-3 ${hardShadow}`}>
//           <div className="w-12 h-12 border-2 border-black overflow-hidden bg-[#FF90E8]">
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="object-cover w-full h-full grayscale contrast-125" />
//           </div>
//           <div>
//             <p className="font-black text-sm uppercase">Alex J.</p>
//             <p className="text-xs font-bold bg-black text-white px-1 inline-block">DEV</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative bg-[#F4F4F0]">
        
//         {/* Header */}
//         <header className="h-20 bg-white border-b-4 border-black flex items-center justify-between px-6 md:px-10 shrink-0 z-10">
//           <div className="flex items-center gap-6 w-full">
//             <button 
//               className={`md:hidden px-3 py-2 bg-[#FF90E8] border-2 border-black font-black ${hardShadow} ${hoverShadow}`}
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               MENU
//             </button>
            
//             <div className="w-full max-w-lg hidden sm:block relative">
//               <input 
//                 type="text" 
//                 placeholder="SEARCH_QUERY..." 
//                 className={`w-full bg-[#E0E0E0] border-4 border-black px-4 py-3 text-sm font-bold placeholder-black/50 focus:outline-none focus:bg-white ${hardShadow}`}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-4 ml-auto">
//             <button className={`bg-[#FFE800] border-2 border-black px-3 py-2 font-bold uppercase ${hardShadow} ${hoverShadow}`}>
//               Alerts [1]
//             </button>
//             <button className={`bg-[#000000] text-white border-2 border-black px-4 py-2 font-bold uppercase flex items-center gap-2 ${hardShadow} hover:bg-zinc-800 transition-colors`}>
//                AI_SYS
//             </button>
//           </div>
//         </header>

//         {/* Scrolling Ticker (Unique UI Element) */}
//         <div className="border-b-4 border-black bg-[#FF90E8] py-2 overflow-hidden flex whitespace-nowrap">
//           <div className="font-black uppercase tracking-widest animate-pulse">
//             *** SYSTEM NOMINAL *** NO NEW LEAVE REQUESTS *** SPRINT PLANNING AT 14:00 *** SYSTEM NOMINAL *** </div>
//         </div>

//         {/* Dashboard Grid */}
//         <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          
//           {searchQuery && (
//             <div className={`mb-8 bg-black text-white px-6 py-4 border-4 border-black font-bold uppercase flex items-center gap-3 ${hardShadow}`}>
//               <span>[SEARCH_ACTIVE]:</span> 
//               <span className="bg-[#FF90E8] text-black px-2 py-1">{searchQuery}</span>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto pb-12">
            
//             {/* 1. Attendance Summary */}
//             <div className={`bg-[#38E54D] p-8 border-4 border-black flex flex-col group ${hardShadow}`}>
//               <h3 className="font-black text-xl uppercase mb-6 bg-black text-white p-2 inline-block self-start">Activity_Log</h3>
//               <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
//                 <span className="font-bold uppercase tracking-wider">Status: Online</span>
//                 <span className="font-black bg-white border-2 border-black px-3 py-1">7.5H</span>
//               </div>
//               <div className="flex items-end justify-between h-32 gap-3 mt-auto">
//                 {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
//                   <div key={i} className="flex flex-col items-center gap-2 flex-1 cursor-pointer">
//                     <div className="w-full bg-black border-2 border-white transition-all duration-300 hover:bg-white hover:border-black" style={{ height: `${[60, 75, 45, 90, 80][i]}%` }}></div>
//                     <span className="text-sm font-black uppercase">{day}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Leave Balance */}
//             <div className={`bg-white p-8 border-4 border-black flex flex-col justify-between ${hardShadow}`}>
//               <h3 className="font-black text-xl uppercase mb-4 bg-[#FF90E8] p-2 inline-block self-start border-2 border-black">Time_Off</h3>
//               <div className="flex flex-col gap-6 py-4">
                
//                 <div className={`bg-[#F4F4F0] border-4 border-black p-4 flex items-center justify-between ${hardShadow} ${hoverShadow}`}>
//                   <div className="font-bold uppercase">Vacation</div>
//                   <div className="text-3xl font-black bg-[#FFE800] px-2 border-2 border-black">14</div>
//                 </div>

//                 <div className={`bg-[#F4F4F0] border-4 border-black p-4 flex items-center justify-between ${hardShadow} ${hoverShadow}`}>
//                   <div className="font-bold uppercase">Sick Leave</div>
//                   <div className="text-3xl font-black bg-[#38E54D] px-2 border-2 border-black">07</div>
//                 </div>

//               </div>
//             </div>

//             {/* 3. Submit Leave Request Form */}
//             <div className={`bg-[#FFE800] p-8 border-4 border-black md:col-span-2 xl:col-span-1 ${hardShadow}`}>
//               <h3 className="font-black text-xl uppercase mb-6 bg-black text-white p-2 inline-block self-start">Submit_Form</h3>
//               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-black uppercase mb-2">Start</label>
//                     <input type="date" className="w-full bg-white border-4 border-black p-2 font-bold focus:outline-none focus:bg-[#E0E0E0]" defaultValue="2024-05-24" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-black uppercase mb-2">End</label>
//                     <input type="date" className="w-full bg-white border-4 border-black p-2 font-bold focus:outline-none focus:bg-[#E0E0E0]" defaultValue="2024-05-26" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-black uppercase mb-2">Type</label>
//                   <select className="w-full bg-white border-4 border-black p-3 font-bold focus:outline-none focus:bg-[#E0E0E0] appearance-none cursor-pointer">
//                     <option>VACATION</option>
//                     <option>SICK LEAVE</option>
//                   </select>
//                 </div>
//                 <button type="submit" className={`w-full bg-black text-white py-4 font-black text-lg uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors ${hardShadow} mt-4`}>
//                   Execute //
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- JAVASCRIPT STATE ---
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     // Unique Background: Soft mesh gradient
//     <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 font-sans text-slate-800 selection:bg-indigo-200 overflow-hidden">
      
//       {/* --- MOBILE OVERLAY --- */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-indigo-900/40 z-40 md:hidden backdrop-blur-md transition-opacity"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* --- FLOATING SIDEBAR --- */}
//       <aside className={`fixed inset-y-4 left-4 w-64 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl flex flex-col justify-between z-50 transform transition-transform duration-500 ease-out md:relative md:translate-x-0 md:inset-y-0 md:left-0 md:my-6 md:ml-6 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
//         <div>
//           {/* Logo */}
//           <div className="h-20 flex items-center justify-between px-6 border-b border-indigo-100/50">
//             <div className="flex items-center gap-3 font-extrabold text-xl tracking-tight text-indigo-950">
//               <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl text-white flex items-center justify-center font-black shadow-lg shadow-indigo-200">A</div>
//               Acme<span className="text-indigo-400 font-light">Corp</span>
//             </div>
//             <button className="md:hidden text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
//               ✖
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="p-4 space-y-1.5 mt-4">
//             <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white text-indigo-700 rounded-xl font-semibold text-sm shadow-sm border border-indigo-50 transition-all">
//               <span className="text-indigo-500 text-lg">✦</span> Dashboard
//             </a>
//             {['Leave Request', 'Team Directory', 'Announcements', 'Settings'].map((item, idx) => (
//               <a key={item} href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/80 hover:text-indigo-600 hover:shadow-sm hover:scale-[1.02] rounded-xl font-medium text-sm transition-all duration-300">
//                 <span className="opacity-70">{['✈️', '👥', '📢', '⚙️'][idx]}</span> {item}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* User Profile (Moved to bottom of sidebar) */}
//         <div className="p-4 mb-2 mx-4 bg-white/80 rounded-2xl border border-white shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
//           <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden ring-2 ring-indigo-100">
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="object-cover w-full h-full" />
//           </div>
//           <div>
//             <p className="font-bold text-sm text-indigo-950">Alex Johnson</p>
//             <p className="text-xs text-indigo-500/80 font-medium">Frontend Dev</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* Floating Header */}
//         <header className="h-20 flex items-center justify-between px-6 md:px-10 shrink-0 z-10 pt-6">
//           <div className="flex items-center gap-4 w-full">
//             <button 
//               className="md:hidden p-2.5 bg-white text-indigo-600 shadow-sm rounded-xl transition-transform active:scale-95"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               ☰
//             </button>
            
//             {/* Search Bar - Neumorphic Style */}
//             <div className="w-full max-w-lg hidden sm:block relative group">
//               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-indigo-500 transition-colors">
//                 🔍
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Search team, projects, or documents..." 
//                 className="w-full bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] rounded-2xl pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-indigo-900"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//               />
//             </div>
//           </div>

//           {/* Header Actions */}
//           <div className="flex items-center gap-4 ml-auto">
//             <button className="bg-white/60 hover:bg-white backdrop-blur-md text-slate-600 p-3 rounded-xl relative transition-all shadow-sm hover:shadow border border-white">
//               🔔
//               <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
//             </button>
//             <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl relative flex items-center justify-center hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 group">
//                ✨
//                <div className="absolute top-14 right-0 bg-indigo-950 text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 font-medium">
//                  Ask AI Assistant
//                </div>
//             </button>
//           </div>
//         </header>

//         {/* Dashboard Grid Area */}
//         <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-10 scroll-smooth">
          
//           {/* Live Search Indicator */}
//           {searchQuery && (
//             <div className="mb-8 bg-indigo-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg shadow-indigo-200/50 transform animate-fade-in-down border border-indigo-500">
//               <span className="text-xl">✨</span> 
//               <span className="font-medium">Searching across workspace for: <span className="font-extrabold bg-white/20 px-2 py-0.5 rounded-md ml-1">{searchQuery}</span></span>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto pb-12">
            
//             {/* 1. Attendance Summary (Upgraded Bar Chart) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
//               <h3 className="font-bold mb-6 text-indigo-950 group-hover:text-indigo-600 transition-colors">Activity Overview</h3>
//               <div className="flex justify-between items-center mb-8 text-sm">
//                 <span className="flex items-center gap-2 font-medium text-slate-500"><span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span> Active Now</span>
//                 <span className="font-bold bg-white px-4 py-1.5 rounded-full text-indigo-600 shadow-sm border border-indigo-50">7.5 hrs today</span>
//               </div>
//               <div className="flex items-end justify-between h-36 gap-3 mt-4">
//                 {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
//                   <div key={i} className="flex flex-col items-center gap-3 flex-1 group/bar cursor-pointer">
//                     <div className="w-full bg-indigo-100 group-hover/bar:bg-indigo-500 rounded-lg transition-all duration-300 relative overflow-hidden" style={{ height: `${[60, 75, 45, 90, 80][i]}%` }}>
//                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-200/50 to-transparent h-full"></div>
//                     </div>
//                     <span className="text-xs text-slate-400 font-bold">{day}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Leave Balance (Modern Ring Style) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between group">
//               <h3 className="font-bold mb-4 text-indigo-950 group-hover:text-indigo-600 transition-colors">Time Off Balance</h3>
//               <div className="flex items-center justify-center gap-8 py-4">
//                 {/* Abstract Data Ring */}
//                 <div className="relative w-32 h-32 flex items-center justify-center">
//                   <div className="absolute inset-0 rounded-full border-[14px] border-indigo-50"></div>
//                   <div className="absolute inset-0 rounded-full border-[14px] border-indigo-500 border-l-transparent border-b-transparent transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out shadow-sm"></div>
//                   <div className="text-2xl font-black text-indigo-950">21</div>
//                 </div>
//                 <div className="space-y-5">
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><span className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm"></span> Vacation</div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">14 days left</div>
//                   </div>
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><span className="w-3 h-3 rounded-full bg-slate-200 shadow-sm"></span> Sick Leave</div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">7 days left</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 3. Submit Leave Request Form (Clean Neumorphic Inputs) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 md:col-span-2 xl:col-span-1">
//               <h3 className="font-bold mb-6 text-indigo-950">Quick Request</h3>
//               <form 
//                 className="space-y-5" 
//                 onSubmit={(e) => {
//                   e.preventDefault();
                  
//                   // Send the dates AND the type to PHP
//                   fetch('http://localhost/dashboard_api/add_leave.php', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ 
//                       start_date: startDate, 
//                       end_date: endDate, 
//                       type: leaveType 
//                     })
//                   })
//                   .then(res => res.json())
//                   .then(data => {
//                     if(data.status === "success") {
//                       alert("SUCCESS: Leave Request Submitted!");
//                     }
//                   })
//                   .catch(err => console.error(err));
//                 }}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm cursor-pointer appearance-none"
//                   >
//                     <option value="Vacation">🌴 Vacation</option>
//                     <option value="Sick Leave">🤒 Sick Leave</option>
//                   </select>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-950 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 active:scale-[0.98]">
//                   Submit Request
//                 </button>
//               </form>
//             </div>
//   );
// };

// export default Dashboard;






























































// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- JAVASCRIPT STATE ---
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // ADDED: Missing state variables for the form
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("Vacation");

//   return (
//     // Unique Background: Soft mesh gradient
//     <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 font-sans text-slate-800 selection:bg-indigo-200 overflow-hidden">
      
//       {/* --- MOBILE OVERLAY --- */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-indigo-900/40 z-40 md:hidden backdrop-blur-md transition-opacity"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* --- FLOATING SIDEBAR --- */}
//       <aside className={`fixed inset-y-4 left-4 w-64 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl flex flex-col justify-between z-50 transform transition-transform duration-500 ease-out md:relative md:translate-x-0 md:inset-y-0 md:left-0 md:my-6 md:ml-6 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
//         <div>
//           {/* Logo */}
//           <div className="h-20 flex items-center justify-between px-6 border-b border-indigo-100/50">
//             <div className="flex items-center gap-3 font-extrabold text-xl tracking-tight text-indigo-950">
//               <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl text-white flex items-center justify-center font-black shadow-lg shadow-indigo-200">A</div>
//               Acme<span className="text-indigo-400 font-light">Corp</span>
//             </div>
//             <button className="md:hidden text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
//               ✖
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="p-4 space-y-1.5 mt-4">
//             <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white text-indigo-700 rounded-xl font-semibold text-sm shadow-sm border border-indigo-50 transition-all">
//               <span className="text-indigo-500 text-lg">✦</span> Dashboard
//             </a>
//             {['Leave Request', 'Team Directory', 'Announcements', 'Settings'].map((item, idx) => (
//               <a key={item} href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/80 hover:text-indigo-600 hover:shadow-sm hover:scale-[1.02] rounded-xl font-medium text-sm transition-all duration-300">
//                 <span className="opacity-70">{['✈️', '👥', '📢', '⚙️'][idx]}</span> {item}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* User Profile (Moved to bottom of sidebar) */}
//         <div className="p-4 mb-2 mx-4 bg-white/80 rounded-2xl border border-white shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
//           <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden ring-2 ring-indigo-100">
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="object-cover w-full h-full" />
//           </div>
//           <div>
//             <p className="font-bold text-sm text-indigo-950">Alex Johnson</p>
//             <p className="text-xs text-indigo-500/80 font-medium">Frontend Dev</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* Floating Header */}
//         <header className="h-20 flex items-center justify-between px-6 md:px-10 shrink-0 z-10 pt-6">
//           <div className="flex items-center gap-4 w-full">
//             <button 
//               className="md:hidden p-2.5 bg-white text-indigo-600 shadow-sm rounded-xl transition-transform active:scale-95"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               ☰
//             </button>
            
//             {/* Search Bar - Neumorphic Style */}
//             <div className="w-full max-w-lg hidden sm:block relative group">
//               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-indigo-500 transition-colors">
//                 🔍
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Search team, projects, or documents..." 
//                 className="w-full bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] rounded-2xl pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-indigo-900"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//               />
//             </div>
//           </div>

//           {/* Header Actions */}
//           <div className="flex items-center gap-4 ml-auto">
//             <button className="bg-white/60 hover:bg-white backdrop-blur-md text-slate-600 p-3 rounded-xl relative transition-all shadow-sm hover:shadow border border-white">
//               🔔
//               <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
//             </button>
//             <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl relative flex items-center justify-center hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 group">
//                ✨
//                <div className="absolute top-14 right-0 bg-indigo-950 text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 font-medium">
//                  Ask AI Assistant
//                </div>
//             </button>
//           </div>
//         </header>

//         {/* Dashboard Grid Area */}
//         <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-10 scroll-smooth">
          
//           {/* Live Search Indicator */}
//           {searchQuery && (
//             <div className="mb-8 bg-indigo-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg shadow-indigo-200/50 transform animate-fade-in-down border border-indigo-500">
//               <span className="text-xl">✨</span> 
//               <span className="font-medium">Searching across workspace for: <span className="font-extrabold bg-white/20 px-2 py-0.5 rounded-md ml-1">{searchQuery}</span></span>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto pb-12">
            
//             {/* 1. Attendance Summary (Upgraded Bar Chart) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
//               <h3 className="font-bold mb-6 text-indigo-950 group-hover:text-indigo-600 transition-colors">Activity Overview</h3>
//               <div className="flex justify-between items-center mb-8 text-sm">
//                 <span className="flex items-center gap-2 font-medium text-slate-500"><span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span> Active Now</span>
//                 <span className="font-bold bg-white px-4 py-1.5 rounded-full text-indigo-600 shadow-sm border border-indigo-50">7.5 hrs today</span>
//               </div>
//               <div className="flex items-end justify-between h-36 gap-3 mt-4">
//                 {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
//                   <div key={i} className="flex flex-col items-center gap-3 flex-1 group/bar cursor-pointer">
//                     <div className="w-full bg-indigo-100 group-hover/bar:bg-indigo-500 rounded-lg transition-all duration-300 relative overflow-hidden" style={{ height: `${[60, 75, 45, 90, 80][i]}%` }}>
//                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-200/50 to-transparent h-full"></div>
//                     </div>
//                     <span className="text-xs text-slate-400 font-bold">{day}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Leave Balance (Modern Ring Style) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between group">
//               <h3 className="font-bold mb-4 text-indigo-950 group-hover:text-indigo-600 transition-colors">Time Off Balance</h3>
//               <div className="flex items-center justify-center gap-8 py-4">
//                 {/* Abstract Data Ring */}
//                 <div className="relative w-32 h-32 flex items-center justify-center">
//                   <div className="absolute inset-0 rounded-full border-[14px] border-indigo-50"></div>
//                   <div className="absolute inset-0 rounded-full border-[14px] border-indigo-500 border-l-transparent border-b-transparent transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out shadow-sm"></div>
//                   <div className="text-2xl font-black text-indigo-950">21</div>
//                 </div>
//                 <div className="space-y-5">
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><span className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm"></span> Vacation</div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">14 days left</div>
//                   </div>
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><span className="w-3 h-3 rounded-full bg-slate-200 shadow-sm"></span> Sick Leave</div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">7 days left</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 3. Submit Leave Request Form (Clean Neumorphic Inputs) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 md:col-span-2 xl:col-span-1">
//               <h3 className="font-bold mb-6 text-indigo-950">Quick Request</h3>
//               <form 
//                 className="space-y-5" 
//                 onSubmit={(e) => {
//                   e.preventDefault();
                  
//                   // Send the dates AND the type to PHP
//                   fetch('http://localhost/dashboard_api/add_leave.php', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ 
//                       start_date: startDate, 
//                       end_date: endDate, 
//                       type: leaveType 
//                     })
//                   })
//                   .then(res => res.json())
//                   .then(data => {
//                     if(data.status === "success") {
//                       alert("SUCCESS: Leave Request Submitted!");
//                     }
//                   })
//                   .catch(err => console.error(err));
//                 }}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm cursor-pointer appearance-none"
//                   >
//                     <option value="Vacation">🌴 Vacation</option>
//                     <option value="Sick Leave">🤒 Sick Leave</option>
//                   </select>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-950 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 active:scale-[0.98]">
//                   Submit Request
//                 </button>
//               </form>
//             </div>
          
//           {/* ADDED: Missing closing tags */}
//           </div> 
//         </div> 
//       </main> 
//     </div> 
//   );
// };

// export default Dashboard;





































// import React, { useState } from 'react';
// import ActivityChart from './ActivityChart';

// const Dashboard = () => {
//   // --- JAVASCRIPT STATE ---
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // ADDED: Missing state variables for the form
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("Vacation");

//   return (
//     // Unique Background: Soft mesh gradient
//     <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 font-sans text-slate-800 selection:bg-indigo-200 overflow-hidden">
      
//       {/* --- MOBILE OVERLAY --- */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-indigo-900/40 z-40 md:hidden backdrop-blur-md transition-opacity"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* --- FLOATING SIDEBAR --- */}
//       <aside className={`fixed inset-y-4 left-4 w-64 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl flex flex-col justify-between z-50 transform transition-transform duration-500 ease-out md:relative md:translate-x-0 md:inset-y-0 md:left-0 md:my-6 md:ml-6 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
//         <div>
//           {/* Logo */}
//           <div className="h-20 flex items-center justify-between px-6 border-b border-indigo-100/50">
//             <div className="flex items-center gap-3 font-extrabold text-xl tracking-tight text-indigo-950">
//               <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl text-white flex items-center justify-center font-black shadow-lg shadow-indigo-200">A</div>
//               Acme<span className="text-indigo-400 font-light">Corp</span>
//             </div>
//             <button className="md:hidden text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
//               ✖
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="p-4 space-y-1.5 mt-4">
//             <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white text-indigo-700 rounded-xl font-semibold text-sm shadow-sm border border-indigo-50 transition-all">
//               <span className="text-indigo-500 text-lg">✦</span> Dashboard
//             </a>
//             {['Leave Request', 'Team Directory', 'Announcements', 'Settings'].map((item, idx) => (
//               <a key={item} href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/80 hover:text-indigo-600 hover:shadow-sm hover:scale-[1.02] rounded-xl font-medium text-sm transition-all duration-300">
//                 <span className="opacity-70">{['✈️', '👥', '📢', '⚙️'][idx]}</span> {item}
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* User Profile (Moved to bottom of sidebar) */}
//         <div className="p-4 mb-2 mx-4 bg-white/80 rounded-2xl border border-white shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
//           <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden ring-2 ring-indigo-100">
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="object-cover w-full h-full" />
//           </div>
//           <div>
//             <p className="font-bold text-sm text-indigo-950">Alex Johnson</p>
//             <p className="text-xs text-indigo-500/80 font-medium">Frontend Dev</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* Floating Header */}
//         <header className="h-20 flex items-center justify-between px-6 md:px-10 shrink-0 z-10 pt-6">
//           <div className="flex items-center gap-4 w-full">
//             <button 
//               className="md:hidden p-2.5 bg-white text-indigo-600 shadow-sm rounded-xl transition-transform active:scale-95"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               ☰
//             </button>
            
//             {/* Search Bar - Neumorphic Style */}
//             <div className="w-full max-w-lg hidden sm:block relative group">
//               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-indigo-500 transition-colors">
//                 🔍
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Search team, projects, or documents..." 
//                 className="w-full bg-white/70 backdrop-blur-md border border-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] rounded-2xl pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-indigo-900"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//               />
//             </div>
//           </div>

//           {/* Header Actions */}
//           <div className="flex items-center gap-4 ml-auto">
//             <button className="bg-white/60 hover:bg-white backdrop-blur-md text-slate-600 p-3 rounded-xl relative transition-all shadow-sm hover:shadow border border-white">
//               🔔
//               <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
//             </button>
//             <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl relative flex items-center justify-center hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 group">
//                ✨
//                <div className="absolute top-14 right-0 bg-indigo-950 text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 font-medium">
//                  Ask AI Assistant
//                </div>
//             </button>
//           </div>
//         </header>

//         {/* Dashboard Grid Area */}
//         <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-10 scroll-smooth">
          
//           {/* Live Search Indicator */}
//           {searchQuery && (
//             <div className="mb-8 bg-indigo-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg shadow-indigo-200/50 transform animate-fade-in-down border border-indigo-500">
//               <span className="text-xl">✨</span> 
//               <span className="font-medium">Searching across workspace for: <span className="font-extrabold bg-white/20 px-2 py-0.5 rounded-md ml-1">{searchQuery}</span></span>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto pb-12">
            
//             {/* 1. Attendance Summary (Upgraded Bar Chart) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
//               <h3 className="font-bold mb-6 text-indigo-950 group-hover:text-indigo-600 transition-colors">Activity Overview</h3>
//               <div className="flex justify-between items-center mb-8 text-sm">
//                 <span className="flex items-center gap-2 font-medium text-slate-500"><span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span> Active Now</span>
//                 <span className="font-bold bg-white px-4 py-1.5 rounded-full text-indigo-600 shadow-sm border border-indigo-50">7.5 hrs today</span>
//               </div>
//               <div className="flex items-end justify-between h-36 gap-3 mt-4">
//                 {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
//                   <div key={i} className="flex flex-col items-center gap-3 flex-1 group/bar cursor-pointer">
//                     <div className="w-full bg-indigo-100 group-hover/bar:bg-indigo-500 rounded-lg transition-all duration-300 relative overflow-hidden" style={{ height: `${[60, 75, 45, 90, 80][i]}%` }}>
//                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-200/50 to-transparent h-full"></div>
//                     </div>
//                     <span className="text-xs text-slate-400 font-bold">{day}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Leave Balance (Modern Ring Style) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between group">
//               <h3 className="font-bold mb-4 text-indigo-950 group-hover:text-indigo-600 transition-colors">Time Off Balance</h3>
//               <div className="flex items-center justify-center gap-8 py-4">
//                 {/* Abstract Data Ring */}
//                 <div className="relative w-32 h-32 flex items-center justify-center">
//                   <div className="absolute inset-0 rounded-full border-[14px] border-indigo-50"></div>
//                   <div className="absolute inset-0 rounded-full border-[14px] border-indigo-500 border-l-transparent border-b-transparent transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out shadow-sm"></div>
//                   <div className="text-2xl font-black text-indigo-950">21</div>
//                 </div>
//                 <div className="space-y-5">
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><span className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm"></span> Vacation</div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">14 days left</div>
//                   </div>
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><span className="w-3 h-3 rounded-full bg-slate-200 shadow-sm"></span> Sick Leave</div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">7 days left</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 3. Submit Leave Request Form (Clean Neumorphic Inputs) */}
//             <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 md:col-span-2 xl:col-span-1">
//               <h3 className="font-bold mb-6 text-indigo-950">Quick Request</h3>
//               <form 
//                 className="space-y-5" 
//                 onSubmit={(e) => {
//                   e.preventDefault();
                  
//                   // ADD THIS LINE TO SPY ON THE DATA:
//                   console.log("SENDING TO PHP:", startDate, endDate, leaveType);
                  
//                   // Send the dates AND the type to PHP
//                   fetch('http://localhost/dashboard_api/add_leave.php', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ 
//                       start_date: startDate, 
//                       end_date: endDate, 
//                       type: leaveType 
//                     })
//                   })
//                   .then(res => res.json())
//                   .then(data => {
//                     if(data.status === "success") {
//                       alert("SUCCESS: Leave Request Submitted!");
//                     }
//                   })
//                   .catch(err => console.error(err));
//                 }}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm cursor-pointer appearance-none"
//                   >
//                     <option value="Vacation">🌴 Vacation</option>
//                     <option value="Sick Leave">🤒 Sick Leave</option>
//                   </select>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-950 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 active:scale-[0.98]">
//                   Submit Request
//                 </button>
//               </form>
//             </div>
          
//           {/* ADDED: Missing closing tags */}
//           </div> 
//         </div> 
//       </main> 
//     </div> 
//   );
// };

// export default Dashboard;













// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- STATE ---
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("Vacation");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("SENDING TO PHP:", startDate, endDate, leaveType);
    
//     // Note: Ensure your PHP server has CORS enabled to accept this request
//     fetch('http://localhost/dashboard_api/add_leave.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         start_date: startDate, 
//         end_date: endDate, 
//         type: leaveType 
//       })
//     })
//     .then(res => res.json())
//     .then(data => {
//       if(data.status === "success") {
//         alert("SUCCESS: Leave Request Submitted!");
//       }
//     })
//     .catch(err => console.error("Fetch error:", err));
//   };

//   return (
//     // Background: Soft mesh gradient
//     <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 font-sans text-slate-800 selection:bg-indigo-200 overflow-hidden">
      
//       {/* --- MOBILE OVERLAY --- */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-indigo-900/40 z-40 lg:hidden backdrop-blur-md transition-opacity"
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* --- FLOATING SIDEBAR --- */}
//       {/* FIX: Changed md: to lg: so the sidebar properly locks in on desktop screens */}
//       <aside className={`fixed inset-y-4 left-4 w-64 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-sm rounded-3xl flex flex-col justify-between z-50 transform transition-transform duration-500 ease-out lg:relative lg:translate-x-0 lg:inset-y-0 lg:left-0 lg:my-6 lg:ml-6 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
//         <div>
//           {/* Logo */}
//           <div className="h-20 flex items-center justify-between px-6 border-b border-indigo-100/50">
//             <div className="flex items-center gap-3 font-extrabold text-xl tracking-tight text-indigo-950">
//               <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl text-white flex items-center justify-center font-black shadow-lg shadow-indigo-200">A</div>
//               Acme<span className="text-indigo-400 font-light">Corp</span>
//             </div>
//             <button className="lg:hidden text-slate-400 hover:text-indigo-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
//               ✖
//             </button>
//           </div>

//           {/* Navigation */}
//           <nav className="p-4 space-y-1.5 mt-4">
//             <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-indigo-700 rounded-xl font-semibold text-sm shadow-sm border border-indigo-50 transition-all">
//               <span className="text-indigo-500 text-lg">✦</span> Dashboard
//             </button>
//             {['Leave Request', 'Team Directory', 'Announcements', 'Settings'].map((item, idx) => (
//               <button key={item} className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/80 hover:text-indigo-600 hover:shadow-sm hover:scale-[1.02] rounded-xl font-medium text-sm transition-all duration-300">
//                 <span className="opacity-70">{['✈️', '👥', '📢', '⚙️'][idx]}</span> {item}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* User Profile */}
//         <div className="p-4 mb-2 mx-4 bg-white/80 rounded-2xl border border-white shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
//           <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden ring-2 ring-indigo-100">
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="object-cover w-full h-full" />
//           </div>
//           <div className="text-left">
//             <p className="font-bold text-sm text-indigo-950">Alex Johnson</p>
//             <p className="text-xs text-indigo-500/80 font-medium">Frontend Dev</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* Floating Header */}
//         <header className="h-20 flex items-center justify-between px-6 md:px-10 shrink-0 z-10 pt-6">
//           <div className="flex items-center gap-4 w-full">
//             <button 
//               className="lg:hidden p-2.5 bg-white text-indigo-600 shadow-sm rounded-xl transition-transform active:scale-95 border border-white"
//               onClick={() => setIsMobileMenuOpen(true)}
//             >
//               ☰
//             </button>
            
//             {/* Search Bar */}
//             <div className="w-full max-w-lg hidden sm:block relative group">
//               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-indigo-300 group-focus-within:text-indigo-500 transition-colors">
//                 🔍
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Search team, projects, or documents..." 
//                 className="w-full bg-white/70 backdrop-blur-md border border-white shadow-sm rounded-2xl pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-300 placeholder-slate-400 text-indigo-900"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//               />
//             </div>
//           </div>

//           {/* Header Actions */}
//           <div className="flex items-center gap-4 ml-auto">
//             <button className="bg-white/60 hover:bg-white backdrop-blur-md text-slate-600 p-3 rounded-xl relative transition-all shadow-sm hover:shadow border border-white">
//               🔔
//               <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
//             </button>
//             <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl relative flex items-center justify-center hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 group">
//                ✨
//                <div className="absolute top-14 right-0 bg-indigo-950 text-white text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 font-medium">
//                  Ask AI Assistant
//                </div>
//             </button>
//           </div>
//         </header>

//         {/* Dashboard Grid Area */}
//         <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-10 scroll-smooth">
          
//           {/* Live Search Indicator */}
//           {searchQuery && (
//             <div className="mb-8 bg-indigo-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg shadow-indigo-200/50 transform animate-fade-in-down border border-indigo-500">
//               <span className="text-xl">✨</span> 
//               <span className="font-medium">Searching across workspace for: <span className="font-extrabold bg-white/20 px-2 py-0.5 rounded-md ml-1">{searchQuery}</span></span>
//             </div>
//           )}

//           {/* FIX: Updated Grid container to use 12 columns for better proportional layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto pb-12">
            
//             {/* 1. Activity Overview (Takes up 8 of 12 columns) */}
//             <div className="lg:col-span-8 bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col justify-between">
//               <div>
//                 <h3 className="font-bold mb-6 text-indigo-950 group-hover:text-indigo-600 transition-colors">Activity Overview</h3>
//                 <div className="flex justify-between items-center mb-4 text-sm">
//                   <span className="flex items-center gap-2 font-medium text-slate-500">
//                     <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span> 
//                     Active Now
//                   </span>
//                   <span className="font-bold bg-white px-4 py-1.5 rounded-full text-indigo-600 shadow-sm border border-indigo-50">
//                     7.5 hrs today
//                   </span>
//                 </div>
//               </div>
              
//               {/* FIX: Increased chart height and changed bar color to indigo-400 so it is visible immediately */}
//               <div className="flex items-end justify-between h-48 gap-4 mt-8">
//                 {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
//                   <div key={i} className="flex flex-col items-center gap-3 flex-1 group/bar cursor-pointer h-full justify-end">
//                     <div 
//                       className="w-full bg-indigo-400 group-hover/bar:bg-indigo-600 rounded-t-xl transition-all duration-300 relative overflow-hidden shadow-sm" 
//                       style={{ height: `${[60, 75, 45, 90, 80][i]}%` }}
//                     >
//                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-200/40 to-transparent h-full"></div>
//                     </div>
//                     <span className="text-sm text-slate-500 font-bold">{day}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Leave Balance (Takes up 4 of 12 columns) */}
//             <div className="lg:col-span-4 bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
//               <h3 className="font-bold mb-4 text-indigo-950 group-hover:text-indigo-600 transition-colors">Time Off Balance</h3>
//               <div className="flex-1 flex flex-col items-center justify-center py-4 gap-8">
                
//                 {/* Abstract Data Ring */}
//                 <div className="relative w-36 h-36 flex items-center justify-center">
//                   <div className="absolute inset-0 rounded-full border-[16px] border-indigo-50"></div>
//                   <div className="absolute inset-0 rounded-full border-[16px] border-indigo-500 border-l-transparent border-b-transparent transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-out shadow-sm"></div>
//                   <div className="text-3xl font-black text-indigo-950">21</div>
//                 </div>
                
//                 <div className="space-y-4 w-full px-4">
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                       <span className="w-3 h-3 rounded-full bg-indigo-500 shadow-sm"></span> Vacation
//                     </div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">14 days left</div>
//                   </div>
//                   <div className="hover:translate-x-2 transition-transform cursor-pointer">
//                     <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                       <span className="w-3 h-3 rounded-full bg-slate-200 shadow-sm"></span> Sick Leave
//                     </div>
//                     <div className="text-xs font-semibold text-slate-400 ml-5 mt-1">7 days left</div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* 3. Submit Leave Request Form (Takes up all 12 columns across the bottom) */}
//             <div className="lg:col-span-12 bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
//               <h3 className="font-bold mb-6 text-indigo-950">Quick Request</h3>
//               <form className="space-y-5" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-wider">Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className="w-full bg-white border border-indigo-50 rounded-xl p-3 text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-sm cursor-pointer appearance-none"
//                   >
//                     <option value="Vacation">🌴 Vacation</option>
//                     <option value="Sick Leave">🤒 Sick Leave</option>
//                   </select>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-950 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 active:scale-[0.98]">
//                   Submit Request
//                 </button>
//               </form>
//             </div>
          
//           </div> 
//         </div> 
//       </main> 
//     </div> 
//   );
// };

// export default Dashboard;




// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Sample data matching the design
//   const employees = [
//     { id: 1, name: "Jane Cooper", email: "janecoop@gmail.com", avatar: "47", payroll: "121948ASH3", dept: "Finance", deptDot: "bg-blue-500", role: "Sr. Accountant", date: "Feb 23, 2025", type: "Full-time", typeStyle: "bg-indigo-50 text-indigo-700" },
//     { id: 2, name: "Brooklyn Simmons", email: "brooklynsmms@gmail.com", avatar: "43", payroll: "BHABHD127", dept: "Engineer", deptDot: "bg-orange-500", role: "Lead. Back End Dev", date: "Feb 18, 2025", type: "Freelance", typeStyle: "bg-emerald-50 text-emerald-700" },
//     { id: 3, name: "Leslie Alexander", email: "alexanderls@gmail.com", avatar: "41", payroll: "18219ADANJ", dept: "Product", deptDot: "bg-pink-500", role: "Jr. Technical Product", date: "Dec 25, 2024", type: "Internship", typeStyle: "bg-purple-50 text-purple-700" },
//     { id: 4, name: "Esther Howard", email: "esthrhoward@gmail.com", avatar: "35", payroll: "MMZKAO811", dept: "Finance", deptDot: "bg-blue-500", role: "Lead. Accountant", date: "Jan 10, 2025", type: "Part-time", typeStyle: "bg-pink-50 text-pink-700" },
//     { id: 5, name: "Cameron Williamson", email: "williamcn@gmail.com", avatar: "11", payroll: "HSASH8188", dept: "Engineer", deptDot: "bg-orange-500", role: "Sr. DevOps", date: "Mar 30, 2025", type: "Freelance", typeStyle: "bg-emerald-50 text-emerald-700" },
//   ];

//   return (
//     <div className="flex h-screen bg-[#F9FAFB] font-sans text-gray-800">
      
//       {/* --- SIDEBAR --- */}
//       <aside className="w-[260px] bg-[#F4F5F7] border-r border-gray-200 flex flex-col flex-shrink-0">
        
//         {/* Company Dropdown Mockup */}
//         <div className="p-5 mt-4">
//           <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-colors">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-sm">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//               </div>
//               <div>
//                 <h2 className="font-bold text-gray-900 text-sm">Zenwork</h2>
//                 <p className="text-xs text-gray-500">znwrk@gmail.com</p>
//               </div>
//             </div>
//             <span className="text-gray-400 text-xs">◆</span>
//           </div>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
//           <p className="px-4 text-xs font-semibold text-gray-400 mb-4">Main Menu</p>
          
//           <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
//             <span className="text-gray-400 w-5">⊞</span> Dashboard
//           </button>
          
//           {/* Active State Element */}
//           <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-white text-gray-900 shadow-sm border border-gray-100 rounded-lg font-bold text-sm transition-colors">
//             <span className="text-gray-900 w-5">👥</span> Employee
//           </button>
          
//           {['Hiring', 'Payroll', 'Performance', 'Attendance', 'Files', 'Schedule'].map((item, idx) => (
//             <button key={item} className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
//               <span className="text-gray-400 w-5">{['👤', '💵', '📈', '🕒', '📁', '📅'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col overflow-hidden bg-white">
        
//         {/* Header */}
//         <header className="px-10 py-8 flex justify-between items-end border-b border-gray-100 shrink-0">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Employee</h1>
//             <p className="text-gray-500 text-sm font-medium">View and manage employee</p>
//           </div>
          
//           {/* Toggle View Buttons */}
//           <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
//             <button className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md shadow-sm flex items-center gap-2">
//               <span>≡</span> List View
//             </button>
//             <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-semibold rounded-md flex items-center gap-2 transition-colors">
//               <span>⊞</span> Card View
//             </button>
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-10 bg-white">
          
//           {/* Data Table Wrapper */}
//           <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            
//             {/* Table Toolbar */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <div className="flex items-center gap-3 pl-2">
//                 <div className="bg-orange-50 p-2 rounded-lg">
//                   <span className="text-orange-500 font-bold">👥</span>
//                 </div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Total Employee : <span className="font-bold text-gray-900">1285 persons</span>
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 {/* Search Bar */}
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search payroll or name"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-64"
//                   />
//                 </div>
//                 {/* Action Buttons */}
//                 <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2">
//                   <span>▽</span> Filter
//                 </button>
//                 <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2">
//                   <span>≡</span> Sort
//                 </button>
//               </div>
//             </div>

//             {/* Actual Table */}
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 w-1/4">Name</th>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">Payroll</th>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">Department</th>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">Role</th>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">Joining Date</th>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">Contract Type</th>
//                   <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase border-b border-gray-200 text-center">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((emp, index) => (
//                   <tr key={emp.id} className={`hover:bg-gray-50 transition-colors ${index !== employees.length - 1 ? 'border-b border-gray-100' : ''}`}>
//                     <td className="py-4 px-6">
//                       <div className="flex items-center gap-3">
//                         <img src={`https://i.pravatar.cc/150?img=${emp.avatar}`} alt={emp.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
//                         <div>
//                           <p className="font-bold text-gray-900 text-sm">{emp.name}</p>
//                           <p className="text-xs text-gray-500">{emp.email}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="py-4 px-6 text-sm font-medium text-gray-700">{emp.payroll}</td>
//                     <td className="py-4 px-6">
//                       <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-gray-200 text-xs font-semibold text-gray-700 bg-white shadow-sm">
//                         <span className={`w-1.5 h-1.5 rounded-full ${emp.deptDot}`}></span>
//                         {emp.dept}
//                       </div>
//                     </td>
//                     <td className="py-4 px-6 text-sm text-gray-600 font-medium">{emp.role}</td>
//                     <td className="py-4 px-6 text-sm text-gray-600 flex items-center gap-2">
//                       <span className="text-gray-400">📅</span> {emp.date}
//                     </td>
//                     <td className="py-4 px-6">
//                       <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wide ${emp.typeStyle}`}>
//                         {emp.type}
//                       </span>
//                     </td>
//                     <td className="py-4 px-6 text-center">
//                       <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-md border border-transparent hover:border-gray-200 transition-all">
//                         ⋮
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [leaveReason, setLeaveReason] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);

//   // Mock Data
//   const team = [
//     { id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online" },
//     { id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting" },
//     { id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline" },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // AI Feature Simulation
//   const handleAiSummarize = () => {
//     setIsAiSummarizing(true);
//     setTimeout(() => {
//       alert("✨ AI Summary: There is a mandatory Q3 Townhall today at 10 AM, and new dental health benefits are now available for all full-time employees.");
//       setIsAiSummarizing(false);
//     }, 1500);
//   };

//   return (
//     <div className="flex h-screen bg-[#F9FAFB] font-sans text-gray-800">
      
//       {/* --- SIDEBAR --- */}
//       <aside className="w-[260px] bg-[#F4F5F7] border-r border-gray-200 flex flex-col hidden lg:flex shrink-0">
//         <div className="p-5 mt-4">
//           <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className="font-bold text-gray-900 text-sm">Acme Corp</h2>
//                 <p className="text-xs text-gray-500">Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className="px-4 text-xs font-semibold text-gray-400 mb-4">Main Menu</p>
//           <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-white text-gray-900 shadow-sm border border-gray-100 rounded-lg font-bold text-sm">
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
//               <span className="text-gray-400 w-5">{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col overflow-hidden bg-[#F9FAFB]">
        
//         {/* Header */}
//         <header className="px-8 py-6 flex justify-between items-center border-b border-gray-200 bg-white shrink-0">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h1>
//             <p className="text-gray-500 text-sm">Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Attendance Dashboard & Leave Summary (Top Row) */}
//             <div className="lg:col-span-8 grid grid-cols-2 gap-6">
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
//                 <p className="text-sm font-semibold text-gray-500 mb-1">Today's Attendance</p>
//                 <div className="flex items-end gap-3">
//                   <h3 className="text-4xl font-black text-gray-900">94%</h3>
//                   <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1 mb-1">
//                     ↑ 2% vs Last Wk
//                   </span>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
//                 <div>
//                   <p className="text-sm font-semibold text-gray-500 mb-1">Leave Balance</p>
//                   <h3 className="text-2xl font-bold text-gray-900">14 <span className="text-sm font-medium text-gray-400">Days Vacation</span></h3>
//                   <h3 className="text-xl font-bold text-gray-900 mt-1">7 <span className="text-sm font-medium text-gray-400">Days Sick</span></h3>
//                 </div>
//                 <div className="w-16 h-16 rounded-full border-8 border-indigo-50 border-t-indigo-500 transform rotate-45"></div>
//               </div>
//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm row-span-2 flex flex-col">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="font-bold text-gray-900 flex items-center gap-2">📢 Announcements</h3>
//                 {/* REQUIRED AI FEATURE */}
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className="text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors flex items-center gap-1 border border-indigo-100"
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
//                     <p className="text-xs text-indigo-600 font-bold mb-1">{msg.date}</p>
//                     <h4 className="font-bold text-gray-900 text-sm mb-1">{msg.title}</h4>
//                     <p className="text-sm text-gray-600 line-clamp-2">{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form */}
//             <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//               <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">✈️ Request Leave</h3>
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Start Date</label>
//                     <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">End Date</label>
//                     <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Leave Type</label>
//                   <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
//                     <option>Vacation</option>
//                     <option>Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory (Search & Filter) */}
//             <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className="font-bold text-gray-900 flex items-center gap-2">👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 overflow-auto border border-gray-100 rounded-xl divide-y divide-gray-100">
//                 {team.map((member) => (
//                   <div key={member.id} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className="w-10 h-10 rounded-full border border-gray-200" alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'Online' ? 'bg-emerald-500' : member.status === 'In Meeting' ? 'bg-amber-500' : 'bg-gray-400'}`}></span>
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-sm leading-tight">{member.name}</p>
//                         <p className="text-xs text-gray-500">{member.role}</p>
//                       </div>
//                     </div>
//                     <button className="text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-white">Profile</button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
























//Important code 
// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("Vacation");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Mock Data for UI
//   const team = [
//     { id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online" },
//     { id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting" },
//     { id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline" },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // AI Feature Simulation
//   const handleAiSummarize = () => {
//     setIsAiSummarizing(true);
//     setTimeout(() => {
//       alert("✨ AI Summary: There is a mandatory Q3 Townhall today at 10 AM, and new dental health benefits are now available for all full-time employees.");
//       setIsAiSummarizing(false);
//     }, 1500);
//   };

//   // --- MySQL DB Form Submission ---
//   const handleLeaveSubmit = async (e) => {
//     e.preventDefault();
    
//     // Create the payload matching your phpMyAdmin table columns
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType
//     };

//     try {
//       // Pointing to your local PHP file
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData)
//       });

//       // Assuming your PHP returns a JSON response like { "status": "success" }
//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         // Clear form after successful submit
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("Vacation");
//         setLeaveReason("");
//       } else {
//         alert("ERROR: Could not save to database.");
//       }
//     } catch (error) {

//       console.error("Fetch error:", error);
//       alert("Failed to connect to the PHP backend. Check your local server.");
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#F9FAFB] font-sans text-gray-800">
      
//       {/* --- SIDEBAR --- */}
//       <aside className="w-[260px] bg-[#F4F5F7] border-r border-gray-200 flex flex-col hidden lg:flex shrink-0">
//         <div className="p-5 mt-4">
//           <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className="font-bold text-gray-900 text-sm">Acme Corp</h2>
//                 <p className="text-xs text-gray-500">Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className="px-4 text-xs font-semibold text-gray-400 mb-4">Main Menu</p>
//           <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-white text-gray-900 shadow-sm border border-gray-100 rounded-lg font-bold text-sm">
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
//               <span className="text-gray-400 w-5">{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 flex flex-col overflow-hidden bg-[#F9FAFB]">
        
//         {/* Header */}
//         <header className="px-8 py-6 flex justify-between items-center border-b border-gray-200 bg-white shrink-0">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h1>
//             <p className="text-gray-500 text-sm">Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>
//         {/* https://i.pravatar.cc/150?img=11 */}

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 grid grid-cols-2 gap-6">
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
//                 <p className="text-sm font-semibold text-gray-500 mb-1">Today's Attendance</p>
//                 <div className="flex items-end gap-3">
//                   <h3 className="text-4xl font-black text-gray-900">94%</h3>
//                   <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1 mb-1">
//                     ↑ 2% vs Last Wk
//                   </span>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
//                 <div>
//                   <p className="text-sm font-semibold text-gray-500 mb-1">Leave Balance</p>
//                   <h3 className="text-2xl font-bold text-gray-900">14 <span className="text-sm font-medium text-gray-400">Days Vacation</span></h3>
//                   <h3 className="text-xl font-bold text-gray-900 mt-1">7 <span className="text-sm font-medium text-gray-400">Days Sick</span></h3>
//                 </div>
//                 <div className="w-16 h-16 rounded-full border-8 border-indigo-50 border-t-indigo-500 transform rotate-45"></div>
//               </div>
//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm row-span-2 flex flex-col">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="font-bold text-gray-900 flex items-center gap-2">📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className="text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors flex items-center gap-1 border border-indigo-100"
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
//                     <p className="text-xs text-indigo-600 font-bold mb-1">{msg.date}</p>
//                     <h4 className="font-bold text-gray-900 text-sm mb-1">{msg.title}</h4>
//                     <p className="text-sm text-gray-600 line-clamp-2">{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//               <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
//                   >
//                     {/* Values match the format shown in your phpMyAdmin image */}
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className="font-bold text-gray-900 flex items-center gap-2">👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 overflow-auto border border-gray-100 rounded-xl divide-y divide-gray-100">
//                 {team.map((member) => (
//                   <div key={member.id} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className="w-10 h-10 rounded-full border border-gray-200" alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'Online' ? 'bg-emerald-500' : member.status === 'In Meeting' ? 'bg-amber-500' : 'bg-gray-400'}`}></span>
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-sm leading-tight">{member.name}</p>
//                         <p className="text-xs text-gray-500">{member.role}</p>
//                       </div>
//                     </div>
//                     <button className="text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-white">Profile</button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;







//Important code
import React, { useState } from 'react';

const Dashboard = () => {
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
  // NEW: State for interactive attendance chart
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
  // Form State matching your MySQL columns
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("Vacation");
  const [leaveReason, setLeaveReason] = useState("");

  // Data: Team with nested Weekly Attendance data
  const team = [
    { 
      id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
      weeklyAttendance: [
        { day: 'Mon', status: 'Present', hours: 8 },
        { day: 'Tue', status: 'Present', hours: 8.5 },
        { day: 'Wed', status: 'Late', hours: 7.5 },
        { day: 'Thu', status: 'Present', hours: 8 },
        { day: 'Fri', status: 'Absent', hours: 0 },
      ]
    },
    { 
      id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
      weeklyAttendance: [
        { day: 'Mon', status: 'Present', hours: 9 },
        { day: 'Tue', status: 'Present', hours: 8 },
        { day: 'Wed', status: 'Present', hours: 8 },
        { day: 'Thu', status: 'Present', hours: 8 },
        { day: 'Fri', status: 'Present', hours: 8 },
      ]
    },
    { 
      id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
      weeklyAttendance: [
        { day: 'Mon', status: 'Absent', hours: 0 },
        { day: 'Tue', status: 'Absent', hours: 0 },
        { day: 'Wed', status: 'Present', hours: 8 },
        { day: 'Thu', status: 'Present', hours: 8 },
        { day: 'Fri', status: 'Late', hours: 6 },
      ]
    },
  ];

  const announcements = [
    { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
    { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
  ];

  // Derived state for the active chart
  const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
  const totalHours = selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0);
  const daysPresent = selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length;

  // AI Feature Simulation
  const handleAiSummarize = () => {
    setIsAiSummarizing(true);
    setTimeout(() => {
      alert("✨ AI Summary: There is a mandatory Q3 Townhall today at 10 AM, and new dental health benefits are now available for all full-time employees.");
      setIsAiSummarizing(false);
    }, 1500);
  };

  // --- MySQL DB Form Submission ---
  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    
    const requestData = {
      start_date: startDate,
      end_date: endDate,
      type: leaveType
    };

    try {
      const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();

      if (data.status === "success" || response.ok) {
        alert("SUCCESS: Leave Request saved to database!");
        setStartDate("");
        setEndDate("");
        setLeaveType("Vacation");
        setLeaveReason("");
      } else {
        alert("ERROR: Could not save to database.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to connect to the PHP backend. Check your local server.");
    }
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB] font-sans text-gray-800">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-[260px] bg-[#F4F5F7] border-r border-gray-200 flex flex-col hidden lg:flex shrink-0">
        <div className="p-5 mt-4">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                Ac
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-sm">Acme Corp</h2>
                <p className="text-xs text-gray-500">Workspace</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-gray-400 mb-4">Main Menu</p>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-white text-gray-900 shadow-sm border border-gray-100 rounded-lg font-bold text-sm">
            <span className="text-indigo-600 w-5">⊞</span> Dashboard
          </button>
          {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
            <button key={item} className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
              <span className="text-gray-400 w-5">{['👥', '✈️', '📢'][idx]}</span> {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#F9FAFB]">
        
        {/* Header */}
        <header className="px-8 py-6 flex justify-between items-center border-b border-gray-200 bg-white shrink-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h1>
            <p className="text-gray-500 text-sm">Welcome back, Alex.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
              🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
          </div>
        </header>

        {/* Scrollable Dashboard Grid */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* 1. Extended Attendance Dashboard & Leave Summary */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Top Stat Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-500 mb-1">Today's Attendance</p>
                  <div className="flex items-end gap-3">
                    <h3 className="text-4xl font-black text-gray-900">94%</h3>
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1 mb-1">
                      ↑ 2% vs Last Wk
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Leave Balance</p>
                    <h3 className="text-2xl font-bold text-gray-900">14 <span className="text-sm font-medium text-gray-400">Days Vacation</span></h3>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">7 <span className="text-sm font-medium text-gray-400">Days Sick</span></h3>
                  </div>
                  <div className="w-16 h-16 rounded-full border-8 border-indigo-50 border-t-indigo-500 transform rotate-45"></div>
                </div>
              </div>

              {/* INTERACTIVE: Weekly Attendance Chart */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">📊 Weekly Attendance Log</h3>
                    <div className="flex gap-4 mt-2">
                      <div className="text-xs text-gray-500">Total Hours: <span className="font-bold text-gray-900">{totalHours}h</span></div>
                      <div className="text-xs text-gray-500">Days Present: <span className="font-bold text-gray-900">{daysPresent}/5</span></div>
                    </div>
                  </div>
                  
                  {/* Dropdown to select employee */}
                  <select 
                    value={selectedEmployeeId}
                    onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                  >
                    {team.map(emp => (
                      <option key={emp.id} value={emp.id}>{emp.name}</option>
                    ))}
                  </select>
                </div>
                
                {/* CSS Bar Chart mapped to the selected employee */}
                <div className="flex items-end justify-between h-40 mt-6 gap-4">
                  {selectedEmployee.weeklyAttendance.map((log) => (
                    <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
                      {/* Tooltip & Bar */}
                      <div className="w-full max-w-[60px] bg-gray-50 rounded-t-md flex items-end justify-center relative group h-[120px]">
                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                          {log.hours} hours
                        </span>
                        <div 
                          className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
                            log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
                            log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
                            'bg-red-400 hover:bg-red-500'
                          }`}
                          style={{ height: `${(log.hours / 10) * 100}%` }}
                        ></div>
                      </div>
                      
                      <span className="text-xs font-bold text-gray-500 uppercase">{log.day}</span>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 mt-6 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
                  </div>
                </div>
              </div>

            </div>

            {/* 2. Company Announcements + AI Feature */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">📢 Announcements</h3>
                <button 
                  onClick={handleAiSummarize}
                  disabled={isAiSummarizing}
                  className="text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors flex items-center gap-1 border border-indigo-100 disabled:opacity-50"
                >
                  {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
                </button>
              </div>
              <div className="space-y-4 flex-1">
                {announcements.map((msg) => (
                  <div key={msg.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs text-indigo-600 font-bold mb-1">{msg.date}</p>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{msg.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{msg.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Leave Request Form connected to MySQL */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">✈️ Request Leave</h3>
              <form className="space-y-4" onSubmit={handleLeaveSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Start Date</label>
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">End Date</label>
                    <input 
                      type="date" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Leave Type</label>
                  <select 
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option value="VACATION">Vacation</option>
                    <option value="SICK">Sick Leave</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Reason</label>
                  <textarea 
                    rows={2}
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                    placeholder="Briefly describe the reason for your leave..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                  Submit Request
                </button>
              </form>
            </div>

            {/* 4. Team Directory */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">👥 Team Directory</h3>
                <div className="relative">
                  <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search team..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-auto border border-gray-100 rounded-xl divide-y divide-gray-100">
                {team.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className="w-10 h-10 rounded-full border border-gray-200" alt={member.name} />
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'Online' ? 'bg-emerald-500' : member.status === 'In Meeting' ? 'bg-amber-500' : 'bg-gray-400'}`}></span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm leading-tight">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-white">Profile</button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;