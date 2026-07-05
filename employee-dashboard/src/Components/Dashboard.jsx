// //Important code
// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // STATE: State for interactive attendance chart
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("VACATION");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data: Team with nested Weekly Attendance data
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//     { 
//       id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Absent', hours: 0 },
//         { day: 'Tue', status: 'Absent', hours: 0 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Late', hours: 6 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // Derived state for the active chart
//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
    
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType,
//       reason: leaveReason
//     };

//     try {
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });

//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("VACATION");
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
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//               title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Extended Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 flex flex-col gap-6">
              
//               {/* Top Stat Cards */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Today's Attendance</p>
//                   <div className="flex items-end gap-3">
//                     <h3 className={`text-4xl font-black ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>94%</h3>
//                     <span className={`text-sm font-medium px-2 py-0.5 rounded flex items-center gap-1 mb-1 ${isDarkMode ? 'text-emerald-400 bg-emerald-900/30' : 'text-emerald-600 bg-emerald-50'}`}>
//                       ↑ 2% vs Last Wk
//                     </span>
//                   </div>
//                 </div>
//                 <div className={`p-6 rounded-2xl border shadow-sm flex justify-between items-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <div>
//                     <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Balance</p>
//                     <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>14 <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Days Vacation</span></h3>
//                     <h3 className={`text-xl font-bold mt-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>7 <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Days Sick</span></h3>
//                   </div>
//                   <div className={`w-16 h-16 rounded-full border-8 transform rotate-45 ${isDarkMode ? 'border-gray-600 border-t-indigo-400' : 'border-indigo-50 border-t-indigo-500'}`}></div>
//                 </div>
//               </div>

//               {/* INTERACTIVE: Weekly Attendance Chart */}
//               <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
//                     <div className="flex gap-4 mt-2">
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
//                     </div>
//                   </div>
                  
//                   {/* Dropdown to select employee */}
//                   <select 
//                     value={selectedEmployeeId}
//                     onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
//                     className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     {team.map(emp => (
//                       <option key={emp.id} value={emp.id}>{emp.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {/* CSS Bar Chart mapped to the selected employee */}
//                 <div className="flex items-end justify-between h-40 mt-6 gap-4">
//                   {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
//                     <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
//                       {/* Tooltip & Bar */}
//                       <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
//                           {log.hours} hours
//                         </span>
//                         <div 
//                           className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
//                             log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
//                             log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
//                             'bg-red-400 hover:bg-red-500'
//                           }`}
//                           style={{ height: `${(log.hours / 10) * 100}%` }}
//                         ></div>
//                       </div>
                      
//                       <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Legend */}
//                 <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                     <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   />
//                 </div>
//               </div>
//               <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
//                 {team
//                   .filter((member) => 
//                     member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     member.role.toLowerCase().includes(searchQuery.toLowerCase())
//                   )
//                   .map((member) => (
//                   <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                           member.status === 'Online' ? 'bg-emerald-500' : 
//                           member.status === 'In Meeting' ? 'bg-amber-500' : 
//                           'bg-gray-400'
//                         }`}></span>
//                       </div>
//                       <div>
//                         <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedMember(member)}
//                       className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
//                     >
//                       Profile
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Profile Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img 
//                   src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
//                   className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
//                   alt={selectedMember.name} 
//                 />
//                 <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   selectedMember.status === 'Online' ? 'bg-emerald-500' : 
//                   selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
//                   'bg-gray-400'
//                 }`}></span>
//               </div>
//               <div>
//                 <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
//                 <div className="mt-2">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
//                     selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {selectedMember.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//               <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedMember.weeklyAttendance.map((log) => (
//                   <div key={log.day} className="text-center">
//                     <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
//                       log.status === 'Present' ? 'bg-indigo-100' : 
//                       log.status === 'Late' ? 'bg-amber-100' : 
//                       'bg-red-100'
//                     }`}>
//                       <div 
//                         className={`w-full rounded-t-sm ${
//                           log.status === 'Present' ? 'bg-indigo-500' : 
//                           log.status === 'Late' ? 'bg-amber-400' : 
//                           'bg-red-400'
//                         }`}
//                         style={{ height: `${(log.hours / 10) * 100}%` }}
//                       />
//                     </div>
//                     <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


























































































































// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Role & Theme State
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isManager, setIsManager] = useState(false); // Toggle to simulate Manager view

//   // Form State
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("Paid Time Off");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Data: Team
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // Data: Leave History (Updated to Indian Date Format: DD-MM-YYYY)
//   const [leaveHistory, setLeaveHistory] = useState([
//     { id: 1, startDate: '30-06-2026', endDate: '30-06-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '29-05-2026', endDate: '02-06-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '14-05-2026', endDate: '14-05-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '15-07-2026', endDate: '16-07-2026', hours: 16.00, type: 'Paid Time Off', comment: 'Pending approval test.', status: 'PENDING' },
//   ]);

//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

//   const handleAiSummarize = () => {
//     setIsAiSummarizing(true);
//     setTimeout(() => {
//       alert("✨ AI Summary: There is a mandatory Q3 Townhall today at 10 AM, and new dental health benefits are now available.");
//       setIsAiSummarizing(false);
//     }, 1500);
//   };

//   // Helper function to format input dates (YYYY-MM-DD) to Indian format (DD-MM-YYYY)
//   const formatDateToIndian = (dateString) => {
//     if (!dateString) return "";
//     const [year, month, day] = dateString.split('-');
//     return `${day}-${month}-${year}`;
//   };

//   const handleLeaveSubmit = async (e) => {
//     e.preventDefault();
//     const newLeave = {
//       id: leaveHistory.length + 1,
//       startDate: formatDateToIndian(startDate),
//       endDate: formatDateToIndian(endDate),
//       hours: 8.00, // Assuming standard 8 hours for demo
//       type: leaveType,
//       comment: leaveReason,
//       status: 'PENDING'
//     };

//     // Optimistically update UI
//     setLeaveHistory([newLeave, ...leaveHistory]);
    
//     // PHP Backend simulation
//     try {
//       const requestData = { start_date: startDate, end_date: endDate, type: leaveType, reason: leaveReason };
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });
//       if (response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate(""); setEndDate(""); setLeaveType("Paid Time Off"); setLeaveReason("");
//       }
//     } catch (error) {
//       console.log("Fetch error (expected if no backend):", error);
//       alert("Leave added to UI. (PHP Backend not connected)");
//     }
//   };

//   const handleManagerAction = (id, action) => {
//     setLeaveHistory(leaveHistory.map(leave => 
//       leave.id === id ? { ...leave, status: action } : leave
//     ));
//   };

//   return (
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">Ac</div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
            
//             {/* ROLE TOGGLE FOR DEMO */}
//             <div className={`flex items-center gap-2 border px-3 py-1.5 rounded-lg ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
//                 <span className="text-xs font-semibold">View as:</span>
//                 <select 
//                     value={isManager ? "MANAGER" : "EMPLOYEE"}
//                     onChange={(e) => setIsManager(e.target.value === "MANAGER")}
//                     className={`text-xs font-bold outline-none bg-transparent cursor-pointer ${isManager ? 'text-indigo-500' : 'text-emerald-500'}`}
//                 >
//                     <option value="EMPLOYEE">Employee</option>
//                     <option value="MANAGER">Manager</option>
//                 </select>
//             </div>

//             <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* Top Stat Cards */}
//             <div className="lg:col-span-8 flex flex-col gap-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Today's Attendance</p>
//                   <div className="flex items-end gap-3">
//                     <h3 className={`text-4xl font-black ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>94%</h3>
//                   </div>
//                 </div>
//                 <div className={`p-6 rounded-2xl border shadow-sm flex justify-between items-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <div>
//                     <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Available PTO</p>
//                     <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>23.50 <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Hours</span></h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Leave Request Form */}
//               <div className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//                 <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                       <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
//                     </div>
//                     <div>
//                       <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                       <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
//                     </div>
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                     <textarea rows={1} value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)} placeholder="Brief reason..." className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}></textarea>
//                   </div>
//                   <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-indigo-700 transition-colors">Submit Request</button>
//                 </form>
//               </div>
//             </div>

//             {/* Announcements */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- LEAVE HISTORY TABLE --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold text-lg flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//                   📅 Leave History
//                 </h3>
//               </div>
              
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-700/50 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-600'} text-xs uppercase tracking-wider`}>
//                       <th className="p-3 font-semibold">Start Date</th>
//                       <th className="p-3 font-semibold">End Date</th>
//                       <th className="p-3 font-semibold">Hours</th>
//                       <th className="p-3 font-semibold">Leave Type</th>
//                       <th className="p-3 font-semibold">Comment</th>
//                       <th className="p-3 font-semibold">Status</th>
//                       <th className="p-3 font-semibold text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((leave) => (
//                       <tr key={leave.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-50'} text-sm`}>
//                         <td className="p-3">{leave.startDate}</td>
//                         <td className="p-3">{leave.endDate}</td>
//                         <td className="p-3">{leave.hours.toFixed(2)}</td>
//                         <td className="p-3">{leave.type}</td>
//                         <td className={`p-3 truncate max-w-[200px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} title={leave.comment}>{leave.comment}</td>
//                         <td className="p-3 font-medium">
//                           <span className={`px-2 py-1 rounded text-xs ${
//                             leave.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 
//                             leave.status === 'PROCESSED' ? 'bg-blue-100 text-blue-700' : 
//                             leave.status === 'REJECTED' ? 'bg-red-100 text-red-700' : 
//                             'bg-amber-100 text-amber-700' // PENDING
//                           }`}>
//                             {leave.status}
//                           </span>
//                         </td>
//                         <td className="p-3 flex justify-center gap-2">
                          
//                           {/* MANAGER CONTROLS */}
//                           {isManager && leave.status === 'PENDING' ? (
//                             <>
//                                 <button onClick={() => handleManagerAction(leave.id, 'APPROVED')} className="px-3 py-1 bg-emerald-500 text-white text-xs rounded hover:bg-emerald-600">Approve</button>
//                                 <button onClick={() => handleManagerAction(leave.id, 'REJECTED')} className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">Reject</button>
//                             </>
//                           ) : (
                          
//                           /* EMPLOYEE CONTROLS (Matched from your image) */
//                             <>
//                                 <button disabled={leave.status !== 'PENDING'} className={`px-3 py-1 text-xs rounded border ${leave.status !== 'PENDING' ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Edit</button>
//                                 <button disabled={leave.status !== 'PENDING'} className={`px-3 py-1 text-xs rounded border ${leave.status !== 'PENDING' ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-white text-red-600 hover:bg-red-50 border-red-200'}`}>Delete</button>
//                             </>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
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
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Role & Theme State
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isManager, setIsManager] = useState(false); // Toggle to simulate Manager view

//   // --- Dynamic Stats State ---
//   const [ptoBalance, setPtoBalance] = useState(23.50);
//   const [attendancePercent, setAttendancePercent] = useState(94);

//   // Form State
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("Paid Time Off");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Data: Team
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // Data: Leave History (Updated to Indian Date Format: DD-MM-YYYY)
//   const [leaveHistory, setLeaveHistory] = useState([
//     { id: 1, startDate: '30-06-2026', endDate: '30-06-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '29-05-2026', endDate: '02-06-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '14-05-2026', endDate: '14-05-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '15-07-2026', endDate: '16-07-2026', hours: 16.00, type: 'Paid Time Off', comment: 'Pending approval test.', status: 'PENDING' },
//   ]);

//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

//   const handleAiSummarize = () => {
//     setIsAiSummarizing(true);
//     setTimeout(() => {
//       alert("✨ AI Summary: There is a mandatory Q3 Townhall today at 10 AM, and new dental health benefits are now available.");
//       setIsAiSummarizing(false);
//     }, 1500);
//   };

//   // Helper function to format input dates (YYYY-MM-DD) to Indian format (DD-MM-YYYY)
//   const formatDateToIndian = (dateString) => {
//     if (!dateString) return "";
//     const [year, month, day] = dateString.split('-');
//     return `${day}-${month}-${year}`;
//   };

//   const handleLeaveSubmit = async (e) => {
//     e.preventDefault();

//     // 1. Calculate how many days/hours were requested
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const daysRequested = Math.max(1, Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1);
//     const hoursRequested = daysRequested * 8.00; // Assuming 8 hours per workday

//     const newLeave = {
//       id: leaveHistory.length + 1,
//       startDate: formatDateToIndian(startDate),
//       endDate: formatDateToIndian(endDate),
//       hours: hoursRequested,
//       type: leaveType,
//       comment: leaveReason,
//       status: 'PENDING'
//     };

//     // Optimistically update UI
//     setLeaveHistory([newLeave, ...leaveHistory]);
    
//     // 2. Deduct the requested hours from the PTO balance
//     setPtoBalance(prevBalance => Math.max(0, prevBalance - hoursRequested));
    
//     // PHP Backend simulation
//     try {
//       const requestData = { start_date: startDate, end_date: endDate, type: leaveType, reason: leaveReason };
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });
//       if (response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate(""); setEndDate(""); setLeaveType("Paid Time Off"); setLeaveReason("");
//       }
//     } catch (error) {
//       console.log("Fetch error (expected if no backend):", error);
//       alert(`Leave request for ${hoursRequested} hours added to UI and PTO deducted. (PHP Backend not connected)`);
//       // Reset form fields after submission
//       setStartDate(""); 
//       setEndDate(""); 
//       setLeaveType("Paid Time Off"); 
//       setLeaveReason("");
//     }
//   };

//   const handleManagerAction = (id, action) => {
//     setLeaveHistory(leaveHistory.map(leave => 
//       leave.id === id ? { ...leave, status: action } : leave
//     ));
//   };

//   return (
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">Ac</div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
            
//             {/* ROLE TOGGLE FOR DEMO */}
//             <div className={`flex items-center gap-2 border px-3 py-1.5 rounded-lg ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
//                 <span className="text-xs font-semibold">View as:</span>
//                 <select 
//                     value={isManager ? "MANAGER" : "EMPLOYEE"}
//                     onChange={(e) => setIsManager(e.target.value === "MANAGER")}
//                     className={`text-xs font-bold outline-none bg-transparent cursor-pointer ${isManager ? 'text-indigo-500' : 'text-emerald-500'}`}
//                 >
//                     <option value="EMPLOYEE">Employee</option>
//                     <option value="MANAGER">Manager</option>
//                 </select>
//             </div>

//             <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* Top Stat Cards */}
//             <div className="lg:col-span-8 flex flex-col gap-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Today's Attendance</p>
//                   <div className="flex items-end gap-3">
//                     <h3 className={`text-4xl font-black ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//                       {attendancePercent}%
//                     </h3>
//                   </div>
//                 </div>
//                 <div className={`p-6 rounded-2xl border shadow-sm flex justify-between items-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <div>
//                     <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Available PTO</p>
//                     <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//                       {ptoBalance.toFixed(2)} <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Hours</span>
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Leave Request Form */}
//               <div className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//                 <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                       <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
//                     </div>
//                     <div>
//                       <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                       <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
//                     </div>
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                     <textarea rows={1} value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)} placeholder="Brief reason..." className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}></textarea>
//                   </div>
//                   <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-indigo-700 transition-colors">Submit Request</button>
//                 </form>
//               </div>
//             </div>

//             {/* Announcements */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- LEAVE HISTORY TABLE --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold text-lg flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//                   📅 Leave History
//                 </h3>
//               </div>
              
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b ${isDarkMode ? 'border-gray-700 bg-gray-700/50 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-600'} text-xs uppercase tracking-wider`}>
//                       <th className="p-3 font-semibold">Start Date</th>
//                       <th className="p-3 font-semibold">End Date</th>
//                       <th className="p-3 font-semibold">Hours</th>
//                       <th className="p-3 font-semibold">Leave Type</th>
//                       <th className="p-3 font-semibold">Comment</th>
//                       <th className="p-3 font-semibold">Status</th>
//                       <th className="p-3 font-semibold text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((leave) => (
//                       <tr key={leave.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-50'} text-sm`}>
//                         <td className="p-3">{leave.startDate}</td>
//                         <td className="p-3">{leave.endDate}</td>
//                         <td className="p-3">{leave.hours.toFixed(2)}</td>
//                         <td className="p-3">{leave.type}</td>
//                         <td className={`p-3 truncate max-w-[200px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} title={leave.comment}>{leave.comment}</td>
//                         <td className="p-3 font-medium">
//                           <span className={`px-2 py-1 rounded text-xs ${
//                             leave.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 
//                             leave.status === 'PROCESSED' ? 'bg-blue-100 text-blue-700' : 
//                             leave.status === 'REJECTED' ? 'bg-red-100 text-red-700' : 
//                             'bg-amber-100 text-amber-700' // PENDING
//                           }`}>
//                             {leave.status}
//                           </span>
//                         </td>
//                         <td className="p-3 flex justify-center gap-2">
                          
//                           {/* MANAGER CONTROLS */}
//                           {isManager && leave.status === 'PENDING' ? (
//                             <>
//                                 <button onClick={() => handleManagerAction(leave.id, 'APPROVED')} className="px-3 py-1 bg-emerald-500 text-white text-xs rounded hover:bg-emerald-600">Approve</button>
//                                 <button onClick={() => handleManagerAction(leave.id, 'REJECTED')} className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">Reject</button>
//                             </>
//                           ) : (
                          
//                           /* EMPLOYEE CONTROLS (Matched from your image) */
//                             <>
//                                 <button disabled={leave.status !== 'PENDING'} className={`px-3 py-1 text-xs rounded border ${leave.status !== 'PENDING' ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Edit</button>
//                                 <button disabled={leave.status !== 'PENDING'} className={`px-3 py-1 text-xs rounded border ${leave.status !== 'PENDING' ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-white text-red-600 hover:bg-red-50 border-red-200'}`}>Delete</button>
//                             </>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
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
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // STATE: State for interactive attendance chart
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("VACATION");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data: Team with nested Weekly Attendance data
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//     { 
//       id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Absent', hours: 0 },
//         { day: 'Tue', status: 'Absent', hours: 0 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Late', hours: 6 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // --- NEW DATA: Leave History & Accrual Data ---
//   const leaveHistory = [
//     { id: 1, startDate: '06-30-2026', endDate: '06-30-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '05-29-2026', endDate: '06-02-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '05-14-2026', endDate: '05-14-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '04-09-2026', endDate: '04-09-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Leave request applied from Jira', status: 'PROCESSED' },
//   ];

//   const accrualHistory = [
//     { id: 1, date: '06-20-2026', hours: 8.00, type: 'CASUAL', manual: 'No', comment: 'Leave Accrued' },
//     { id: 2, date: '06-15-2026', hours: 8.00, type: 'EARNED', manual: 'No', comment: 'Leave Accrued' },
//     { id: 3, date: '05-26-2026', hours: -1.44, type: 'EARNED', manual: 'Yes', comment: 'Excess Leave - Encashment paid in May payroll 2026' },
//   ];

//   // Derived state for the active chart
//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
    
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType,
//       reason: leaveReason
//     };

//     try {
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });

//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("VACATION");
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
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//               title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Extended Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 flex flex-col gap-6">
              
//               {/* Top Stat Cards */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Today's Attendance</p>
//                   <div className="flex items-end gap-3">
//                     <h3 className={`text-4xl font-black ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>94%</h3>
//                     <span className={`text-sm font-medium px-2 py-0.5 rounded flex items-center gap-1 mb-1 ${isDarkMode ? 'text-emerald-400 bg-emerald-900/30' : 'text-emerald-600 bg-emerald-50'}`}>
//                       ↑ 2% vs Last Wk
//                     </span>
//                   </div>
//                 </div>
//                 <div className={`p-6 rounded-2xl border shadow-sm flex justify-between items-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                   <div>
//                     <p className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Available PTO Balance</p>
//                     <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>23.50 <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hours</span></h3>
//                   </div>
//                   <div className={`w-16 h-16 rounded-full border-8 transform rotate-45 ${isDarkMode ? 'border-gray-600 border-t-indigo-400' : 'border-indigo-50 border-t-indigo-500'}`}></div>
//                 </div>
//               </div>

//               {/* INTERACTIVE: Weekly Attendance Chart */}
//               <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
//                     <div className="flex gap-4 mt-2">
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
//                     </div>
//                   </div>
                  
//                   {/* Dropdown to select employee */}
//                   <select 
//                     value={selectedEmployeeId}
//                     onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
//                     className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     {team.map(emp => (
//                       <option key={emp.id} value={emp.id}>{emp.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {/* CSS Bar Chart mapped to the selected employee */}
//                 <div className="flex items-end justify-between h-40 mt-6 gap-4">
//                   {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
//                     <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
//                       {/* Tooltip & Bar */}
//                       <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
//                           {log.hours} hours
//                         </span>
//                         <div 
//                           className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
//                             log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
//                             log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
//                             'bg-red-400 hover:bg-red-500'
//                           }`}
//                           style={{ height: `${(log.hours / 10) * 100}%` }}
//                         ></div>
//                       </div>
                      
//                       <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Legend */}
//                 <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                     <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   />
//                 </div>
//               </div>
//               <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
//                 {team
//                   .filter((member) => 
//                     member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     member.role.toLowerCase().includes(searchQuery.toLowerCase())
//                   )
//                   .map((member) => (
//                   <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                           member.status === 'Online' ? 'bg-emerald-500' : 
//                           member.status === 'In Meeting' ? 'bg-amber-500' : 
//                           'bg-gray-400'
//                         }`}></span>
//                       </div>
//                       <div>
//                         <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedMember(member)}
//                       className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
//                     >
//                       Profile
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- 5. NEW: Leave History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📜 Leave History</h3>
//                 <div className="flex gap-2">
//                   <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Apply</button>
//                   <button className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Clear</button>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Leave Start Date</th>
//                       <th className="pb-3 font-semibold px-2">Leave End Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2 w-1/4">Comment</th>
//                       <th className="pb-3 font-semibold px-2">Status</th>
//                       <th className="pb-3 font-semibold px-2 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.startDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.endDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.hours}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.type}</td>
//                         <td className={`py-3 px-2 truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
//                             row.status === 'APPROVED' ? (isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600') : 
//                             (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
//                           }`}>
//                             {row.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-2 flex justify-end gap-2">
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Edit</button>
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40' : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'}`}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* --- 6. NEW: Leave (PTO) Accrual History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📈 Leave(PTO) Accrual History</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[700px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2">Manual Adjustment</th>
//                       <th className="pb-3 font-semibold px-2 w-1/3">Comment</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {accrualHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.date}</td>
//                         <td className={`py-3 px-2 font-medium ${row.hours < 0 ? 'text-red-500' : (isDarkMode ? 'text-emerald-400' : 'text-emerald-600')}`}>
//                           {row.hours > 0 ? `+${row.hours}` : row.hours}
//                         </td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2 py-0.5 rounded text-xs font-semibold ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
//                             {row.type}
//                           </span>
//                         </td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.manual}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Profile Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img 
//                   src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
//                   className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
//                   alt={selectedMember.name} 
//                 />
//                 <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   selectedMember.status === 'Online' ? 'bg-emerald-500' : 
//                   selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
//                   'bg-gray-400'
//                 }`}></span>
//               </div>
//               <div>
//                 <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
//                 <div className="mt-2">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
//                     selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {selectedMember.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//               <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedMember.weeklyAttendance.map((log) => (
//                   <div key={log.day} className="text-center">
//                     <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
//                       log.status === 'Present' ? 'bg-indigo-100' : 
//                       log.status === 'Late' ? 'bg-amber-100' : 
//                       'bg-red-100'
//                     }`}>
//                       <div 
//                         className={`w-full rounded-t-sm ${
//                           log.status === 'Present' ? 'bg-indigo-500' : 
//                           log.status === 'Late' ? 'bg-amber-400' : 
//                           'bg-red-400'
//                         }`}
//                         style={{ height: `${(log.hours / 10) * 100}%` }}
//                       />
//                     </div>
//                     <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;














































































// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // STATE: State for interactive attendance chart
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("VACATION");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data: Team with nested Weekly Attendance data
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//     { 
//       id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Absent', hours: 0 },
//         { day: 'Tue', status: 'Absent', hours: 0 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Late', hours: 6 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // --- NEW DATA: Leave History & Accrual Data ---
//   const leaveHistory = [
//     { id: 1, startDate: '06-30-2026', endDate: '06-30-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '05-29-2026', endDate: '06-02-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '05-14-2026', endDate: '05-14-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '04-09-2026', endDate: '04-09-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Leave request applied from Jira', status: 'PROCESSED' },
//   ];

//   const accrualHistory = [
//     { id: 1, date: '06-20-2026', hours: 8.00, type: 'CASUAL', manual: 'No', comment: 'Leave Accrued' },
//     { id: 2, date: '06-15-2026', hours: 8.00, type: 'EARNED', manual: 'No', comment: 'Leave Accrued' },
//     { id: 3, date: '05-26-2026', hours: -1.44, type: 'EARNED', manual: 'Yes', comment: 'Excess Leave - Encashment paid in May payroll 2026' },
//   ];

//   // Derived state for the active chart
//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
    
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType,
//       reason: leaveReason
//     };

//     try {
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });

//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("VACATION");
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
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//               title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Extended Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 flex flex-col gap-6">

//               {/* INTERACTIVE: Weekly Attendance Chart */}
//               <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
//                     <div className="flex gap-4 mt-2">
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
//                     </div>
//                   </div>
                  
//                   {/* Dropdown to select employee */}
//                   <select 
//                     value={selectedEmployeeId}
//                     onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
//                     className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     {team.map(emp => (
//                       <option key={emp.id} value={emp.id}>{emp.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {/* CSS Bar Chart mapped to the selected employee */}
//                 <div className="flex items-end justify-between h-40 mt-6 gap-4">
//                   {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
//                     <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
//                       {/* Tooltip & Bar */}
//                       <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
//                           {log.hours} hours
//                         </span>
//                         <div 
//                           className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
//                             log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
//                             log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
//                             'bg-red-400 hover:bg-red-500'
//                           }`}
//                           style={{ height: `${(log.hours / 10) * 100}%` }}
//                         ></div>
//                       </div>
                      
//                       <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Legend */}
//                 <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                     <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   />
//                 </div>
//               </div>
//               <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
//                 {team
//                   .filter((member) => 
//                     member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     member.role.toLowerCase().includes(searchQuery.toLowerCase())
//                   )
//                   .map((member) => (
//                   <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                           member.status === 'Online' ? 'bg-emerald-500' : 
//                           member.status === 'In Meeting' ? 'bg-amber-500' : 
//                           'bg-gray-400'
//                         }`}></span>
//                       </div>
//                       <div>
//                         <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedMember(member)}
//                       className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
//                     >
//                       Profile
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- 5. NEW: Leave History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📜 Leave History</h3>
//                 <div className="flex gap-2">
//                   <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Apply</button>
//                   <button className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Clear</button>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Leave Start Date</th>
//                       <th className="pb-3 font-semibold px-2">Leave End Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2 w-1/4">Comment</th>
//                       <th className="pb-3 font-semibold px-2">Status</th>
//                       <th className="pb-3 font-semibold px-2 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.startDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.endDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.hours}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.type}</td>
//                         <td className={`py-3 px-2 truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
//                             row.status === 'APPROVED' ? (isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600') : 
//                             (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
//                           }`}>
//                             {row.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-2 flex justify-end gap-2">
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Edit</button>
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40' : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'}`}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* --- 6. NEW: Leave (PTO) Accrual History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📈 Leave(PTO) Accrual History</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[700px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2">Manual Adjustment</th>
//                       <th className="pb-3 font-semibold px-2 w-1/3">Comment</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {accrualHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.date}</td>
//                         <td className={`py-3 px-2 font-medium ${row.hours < 0 ? 'text-red-500' : (isDarkMode ? 'text-emerald-400' : 'text-emerald-600')}`}>
//                           {row.hours > 0 ? `+${row.hours}` : row.hours}
//                         </td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2 py-0.5 rounded text-xs font-semibold ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
//                             {row.type}
//                           </span>
//                         </td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.manual}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Profile Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img 
//                   src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
//                   className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
//                   alt={selectedMember.name} 
//                 />
//                 <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   selectedMember.status === 'Online' ? 'bg-emerald-500' : 
//                   selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
//                   'bg-gray-400'
//                 }`}></span>
//               </div>
//               <div>
//                 <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
//                 <div className="mt-2">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
//                     selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {selectedMember.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//               <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedMember.weeklyAttendance.map((log) => (
//                   <div key={log.day} className="text-center">
//                     <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
//                       log.status === 'Present' ? 'bg-indigo-100' : 
//                       log.status === 'Late' ? 'bg-amber-100' : 
//                       'bg-red-100'
//                     }`}>
//                       <div 
//                         className={`w-full rounded-t-sm ${
//                           log.status === 'Present' ? 'bg-indigo-500' : 
//                           log.status === 'Late' ? 'bg-amber-400' : 
//                           'bg-red-400'
//                         }`}
//                         style={{ height: `${(log.hours / 10) * 100}%` }}
//                       />
//                     </div>
//                     <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;





















// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // STATE: State for interactive attendance chart
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("VACATION");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data: Team with nested Weekly Attendance data
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//     { 
//       id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Absent', hours: 0 },
//         { day: 'Tue', status: 'Absent', hours: 0 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Late', hours: 6 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // --- NEW DATA: Leave History & Accrual Data ---
//   const leaveHistory = [
//     { id: 1, startDate: '06-30-2026', endDate: '06-30-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '05-29-2026', endDate: '06-02-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '05-14-2026', endDate: '05-14-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '04-09-2026', endDate: '04-09-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Leave request applied from Jira', status: 'PROCESSED' },
//   ];

//   const accrualHistory = [
//     { id: 1, date: '06-20-2026', hours: 8.00, type: 'CASUAL', manual: 'No', comment: 'Leave Accrued' },
//     { id: 2, date: '06-15-2026', hours: 8.00, type: 'EARNED', manual: 'No', comment: 'Leave Accrued' },
//     { id: 3, date: '05-26-2026', hours: -1.44, type: 'EARNED', manual: 'Yes', comment: 'Excess Leave - Encashment paid in May payroll 2026' },
//   ];

//   // Derived state for the active chart
//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
    
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType,
//       reason: leaveReason
//     };

//     try {
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });

//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("VACATION");
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
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//               title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Extended Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 flex flex-col gap-6">

//               {/* INTERACTIVE: Weekly Attendance Chart */}
//               <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
//                     <div className="flex gap-4 mt-2">
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
//                     </div>
//                   </div>
                  
//                   {/* Dropdown to select employee */}
//                   <select 
//                     value={selectedEmployeeId}
//                     onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
//                     className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     {team.map(emp => (
//                       <option key={emp.id} value={emp.id}>{emp.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {/* CSS Bar Chart mapped to the selected employee */}
//                 <div className="flex items-end justify-between h-40 mt-6 gap-4">
//                   {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
//                     <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
//                       {/* Tooltip & Bar */}
//                       <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
//                           {log.hours} hours
//                         </span>
//                         <div 
//                           className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
//                             log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
//                             log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
//                             'bg-red-400 hover:bg-red-500'
//                           }`}
//                           style={{ height: `${(log.hours / 10) * 100}%` }}
//                         ></div>
//                       </div>
                      
//                       <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Legend */}
//                 <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                     <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   />
//                 </div>
//               </div>
//               <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
//                 {team
//                   .filter((member) => 
//                     member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     member.role.toLowerCase().includes(searchQuery.toLowerCase())
//                   )
//                   .map((member) => (
//                   <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                           member.status === 'Online' ? 'bg-emerald-500' : 
//                           member.status === 'In Meeting' ? 'bg-amber-500' : 
//                           'bg-gray-400'
//                         }`}></span>
//                       </div>
//                       <div>
//                         <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedMember(member)}
//                       className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
//                     >
//                       Profile
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- 5. NEW: Leave History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📜 Leave History</h3>
//                 <div className="flex gap-2">
//                   <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Apply</button>
//                   <button className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Clear</button>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Leave Start Date</th>
//                       <th className="pb-3 font-semibold px-2">Leave End Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2 w-1/4">Comment</th>
//                       <th className="pb-3 font-semibold px-2">Status</th>
//                       <th className="pb-3 font-semibold px-2 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.startDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.endDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.hours}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.type}</td>
//                         <td className={`py-3 px-2 truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
//                             row.status === 'APPROVED' ? (isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600') : 
//                             (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
//                           }`}>
//                             {row.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-2 flex justify-end gap-2">
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Edit</button>
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40' : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'}`}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Profile Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img 
//                   src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
//                   className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
//                   alt={selectedMember.name} 
//                 />
//                 <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   selectedMember.status === 'Online' ? 'bg-emerald-500' : 
//                   selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
//                   'bg-gray-400'
//                 }`}></span>
//               </div>
//               <div>
//                 <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
//                 <div className="mt-2">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
//                     selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {selectedMember.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//               <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedMember.weeklyAttendance.map((log) => (
//                   <div key={log.day} className="text-center">
//                     <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
//                       log.status === 'Present' ? 'bg-indigo-100' : 
//                       log.status === 'Late' ? 'bg-amber-100' : 
//                       'bg-red-100'
//                     }`}>
//                       <div 
//                         className={`w-full rounded-t-sm ${
//                           log.status === 'Present' ? 'bg-indigo-500' : 
//                           log.status === 'Late' ? 'bg-amber-400' : 
//                           'bg-red-400'
//                         }`}
//                         style={{ height: `${(log.hours / 10) * 100}%` }}
//                       />
//                     </div>
//                     <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;






















// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // STATE: State for interactive attendance chart
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("VACATION");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data: Team with nested Weekly Attendance data
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//     { 
//       id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Absent', hours: 0 },
//         { day: 'Tue', status: 'Absent', hours: 0 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Late', hours: 6 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // --- NEW DATA: Leave History & Accrual Data ---
//   const leaveHistory = [
//     { id: 1, startDate: '06-30-2026', endDate: '06-30-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '05-29-2026', endDate: '06-02-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '05-14-2026', endDate: '05-14-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '04-09-2026', endDate: '04-09-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Leave request applied from Jira', status: 'PROCESSED' },
//   ];

//   const accrualHistory = [
//     { id: 1, date: '06-20-2026', hours: 8.00, type: 'CASUAL', manual: 'No', comment: 'Leave Accrued' },
//     { id: 2, date: '06-15-2026', hours: 8.00, type: 'EARNED', manual: 'No', comment: 'Leave Accrued' },
//     { id: 3, date: '05-26-2026', hours: -1.44, type: 'EARNED', manual: 'Yes', comment: 'Excess Leave - Encashment paid in May payroll 2026' },
//   ];

//   // Derived state for the active chart
//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
    
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType,
//       reason: leaveReason
//     };

//     try {
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });

//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("VACATION");
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
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//               title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Extended Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 flex flex-col gap-6">

//               {/* INTERACTIVE: Weekly Attendance Chart */}
//               <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
//                     <div className="flex gap-4 mt-2">
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
//                     </div>
//                   </div>
                  
//                   {/* Dropdown to select employee */}
//                   <select 
//                     value={selectedEmployeeId}
//                     onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
//                     className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     {team.map(emp => (
//                       <option key={emp.id} value={emp.id}>{emp.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {/* CSS Bar Chart mapped to the selected employee */}
//                 <div className="flex items-end justify-between h-40 mt-6 gap-4">
//                   {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
//                     <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
//                       {/* Tooltip & Bar */}
//                       <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
//                           {log.hours} hours
//                         </span>
//                         <div 
//                           className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
//                             log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
//                             log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
//                             'bg-red-400 hover:bg-red-500'
//                           }`}
//                           style={{ height: `${(log.hours / 10) * 100}%` }}
//                         ></div>
//                       </div>
                      
//                       <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Legend */}
//                 <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                     <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   />
//                 </div>
//               </div>
//               <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
//                 {team
//                   .filter((member) => 
//                     member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     member.role.toLowerCase().includes(searchQuery.toLowerCase())
//                   )
//                   .map((member) => (
//                   <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                           member.status === 'Online' ? 'bg-emerald-500' : 
//                           member.status === 'In Meeting' ? 'bg-amber-500' : 
//                           'bg-gray-400'
//                         }`}></span>
//                       </div>
//                       <div>
//                         <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedMember(member)}
//                       className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
//                     >
//                       Profile
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- 5. NEW: Leave History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📜 Leave History</h3>
//                 <div className="flex gap-2">
//                   <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Apply</button>
//                   <button className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Clear</button>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Leave Start Date</th>
//                       <th className="pb-3 font-semibold px-2">Leave End Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2 w-1/4">Comment</th>
//                       <th className="pb-3 font-semibold px-2">Status</th>
//                       <th className="pb-3 font-semibold px-2 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.startDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.endDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.hours}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.type}</td>
//                         <td className={`py-3 px-2 truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
//                             row.status === 'APPROVED' ? (isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600') : 
//                             (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
//                           }`}>
//                             {row.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-2 flex justify-end gap-2">
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Edit</button>
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40' : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'}`}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Profile Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img 
//                   src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
//                   className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
//                   alt={selectedMember.name} 
//                 />
//                 <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   selectedMember.status === 'Online' ? 'bg-emerald-500' : 
//                   selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
//                   'bg-gray-400'
//                 }`}></span>
//               </div>
//               <div>
//                 <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
//                 <div className="mt-2">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
//                     selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {selectedMember.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//               <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedMember.weeklyAttendance.map((log) => (
//                   <div key={log.day} className="text-center">
//                     <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
//                       log.status === 'Present' ? 'bg-indigo-100' : 
//                       log.status === 'Late' ? 'bg-amber-100' : 
//                       'bg-red-100'
//                     }`}>
//                       <div 
//                         className={`w-full rounded-t-sm ${
//                           log.status === 'Present' ? 'bg-indigo-500' : 
//                           log.status === 'Late' ? 'bg-amber-400' : 
//                           'bg-red-400'
//                         }`}
//                         style={{ height: `${(log.hours / 10) * 100}%` }}
//                       />
//                     </div>
//                     <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;












































// import React, { useState } from 'react';

// const Dashboard = () => {
//   // --- State Management ---
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
//   // STATE: State for interactive attendance chart
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
//   // Form State matching your MySQL columns
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [leaveType, setLeaveType] = useState("VACATION");
//   const [leaveReason, setLeaveReason] = useState("");

//   // Profile Modal State
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Data: Team with nested Weekly Attendance data
//   const team = [
//     { 
//       id: 1, name: "Jane Cooper", role: "Sr. Accountant", avatar: "47", status: "Online",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 8 },
//         { day: 'Tue', status: 'Present', hours: 8.5 },
//         { day: 'Wed', status: 'Late', hours: 7.5 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Absent', hours: 0 },
//       ]
//     },
//     { 
//       id: 2, name: "Brooklyn Simmons", role: "Back End Dev", avatar: "43", status: "In Meeting",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Present', hours: 9 },
//         { day: 'Tue', status: 'Present', hours: 8 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Present', hours: 8 },
//       ]
//     },
//     { 
//       id: 3, name: "Cameron Williamson", role: "DevOps", avatar: "11", status: "Offline",
//       weeklyAttendance: [
//         { day: 'Mon', status: 'Absent', hours: 0 },
//         { day: 'Tue', status: 'Absent', hours: 0 },
//         { day: 'Wed', status: 'Present', hours: 8 },
//         { day: 'Thu', status: 'Present', hours: 8 },
//         { day: 'Fri', status: 'Late', hours: 6 },
//       ]
//     },
//   ];

//   const announcements = [
//     { id: 1, title: "Q3 Townhall Meeting", date: "Today, 10:00 AM", content: "Join us for the quarterly update..." },
//     { id: 2, title: "New Health Benefits", date: "Yesterday", content: "We are rolling out a new dental plan..." }
//   ];

//   // --- NEW DATA: Leave History with Indian Format (DD-MM-YYYY) ---
//   const leaveHistory = [
//     { id: 1, startDate: '03-07-2026', endDate: '03-07-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
//     { id: 2, startDate: '25-06-2026', endDate: '27-06-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
//     { id: 3, startDate: '10-06-2026', endDate: '10-06-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
//     { id: 4, startDate: '15-05-2026', endDate: '15-05-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Leave request applied from Jira', status: 'PROCESSED' },
//   ];

//   // Derived state for the active chart
//   const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
//   const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
//   const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
    
//     const requestData = {
//       start_date: startDate,
//       end_date: endDate,
//       type: leaveType,
//       reason: leaveReason
//     };

//     try {
//       const response = await fetch('http://localhost/dashboard_api/add_leave.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData)
//       });

//       const data = await response.json();

//       if (data.status === "success" || response.ok) {
//         alert("SUCCESS: Leave Request saved to database!");
//         setStartDate("");
//         setEndDate("");
//         setLeaveType("VACATION");
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
//     <div className={`flex h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
//       {/* --- SIDEBAR --- */}
//       <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
//         <div className="p-5 mt-4">
//           <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
//                 Ac
//               </div>
//               <div>
//                 <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="flex-1 px-4 py-4 space-y-1">
//           <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
//           <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
//             <span className="text-indigo-600 w-5">⊞</span> Dashboard
//           </button>
//           {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
//             <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
//               <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
//         {/* Header */}
//         <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//           <div>
//             <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
//               title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             >
//               {isDarkMode ? "☀️" : "🌙"}
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
//               🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//             </button>
//             <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
//           </div>
//         </header>

//         {/* Scrollable Dashboard Grid */}
//         <div className="flex-1 overflow-auto p-8">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

//             {/* 1. Extended Attendance Dashboard & Leave Summary */}
//             <div className="lg:col-span-8 flex flex-col gap-6">

//               {/* INTERACTIVE: Weekly Attendance Chart */}
//               <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
//                     <div className="flex gap-4 mt-2">
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
//                       <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
//                     </div>
//                   </div>
                  
//                   {/* Dropdown to select employee */}
//                   <select 
//                     value={selectedEmployeeId}
//                     onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
//                     className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     {team.map(emp => (
//                       <option key={emp.id} value={emp.id}>{emp.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {/* CSS Bar Chart mapped to the selected employee */}
//                 <div className="flex items-end justify-between h-40 mt-6 gap-4">
//                   {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
//                     <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
//                       {/* Tooltip & Bar */}
//                       <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//                         <span className="absolute -top-7 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
//                           {log.hours} hours
//                         </span>
//                         <div 
//                           className={`w-full rounded-t-md transition-all duration-500 cursor-pointer ${
//                             log.status === 'Present' ? 'bg-indigo-500 hover:bg-indigo-600' : 
//                             log.status === 'Late' ? 'bg-amber-400 hover:bg-amber-500' : 
//                             'bg-red-400 hover:bg-red-500'
//                           }`}
//                           style={{ height: `${(log.hours / 10) * 100}%` }}
//                         ></div>
//                       </div>
                      
//                       <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Legend */}
//                 <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
//                   </div>
//                   <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* 2. Company Announcements + AI Feature */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
//                 <button 
//                   onClick={handleAiSummarize}
//                   disabled={isAiSummarizing}
//                   className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
//                 >
//                   {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
//                 </button>
//               </div>
//               <div className="space-y-4 flex-1">
//                 {announcements.map((msg) => (
//                   <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
//                     <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
//                     <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
//                     <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Leave Request Form connected to MySQL */}
//             <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
//               <form className="space-y-4" onSubmit={handleLeaveSubmit}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
//                     <input 
//                       type="date" 
//                       value={startDate}
//                       onChange={(e) => setStartDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
//                     <input 
//                       type="date" 
//                       value={endDate}
//                       onChange={(e) => setEndDate(e.target.value)}
//                       required
//                       className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
//                   <select 
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   >
//                     <option value="VACATION">Vacation</option>
//                     <option value="SICK">Sick Leave</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
//                   <textarea 
//                     rows={2}
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                     placeholder="Briefly describe the reason for your leave..."
//                     className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             {/* 4. Team Directory */}
//             <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-5">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
//                 <div className="relative">
//                   <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
//                   <input 
//                     type="text" 
//                     placeholder="Search team..." 
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
//                   />
//                 </div>
//               </div>
//               <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
//                 {team
//                   .filter((member) => 
//                     member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     member.role.toLowerCase().includes(searchQuery.toLowerCase())
//                   )
//                   .map((member) => (
//                   <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
//                     <div className="flex items-center gap-3">
//                       <div className="relative">
//                         <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
//                         <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
//                           member.status === 'Online' ? 'bg-emerald-500' : 
//                           member.status === 'In Meeting' ? 'bg-amber-500' : 
//                           'bg-gray-400'
//                         }`}></span>
//                       </div>
//                       <div>
//                         <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => setSelectedMember(member)}
//                       className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
//                     >
//                       Profile
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* --- 5. NEW: Leave History Table --- */}
//             <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📜 Leave History</h3>
//                 <div className="flex gap-2">
//                   <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Apply</button>
//                   <button className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Clear</button>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse min-w-[800px]">
//                   <thead>
//                     <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
//                       <th className="pb-3 font-semibold px-2">Leave Start Date</th>
//                       <th className="pb-3 font-semibold px-2">Leave End Date</th>
//                       <th className="pb-3 font-semibold px-2">Hours</th>
//                       <th className="pb-3 font-semibold px-2">Leave Type</th>
//                       <th className="pb-3 font-semibold px-2 w-1/4">Comment</th>
//                       <th className="pb-3 font-semibold px-2">Status</th>
//                       <th className="pb-3 font-semibold px-2 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
//                     {leaveHistory.map((row) => (
//                       <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.startDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.endDate}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.hours}</td>
//                         <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.type}</td>
//                         <td className={`py-3 px-2 truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
//                         <td className="py-3 px-2">
//                           <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
//                             row.status === 'APPROVED' ? (isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600') : 
//                             (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
//                           }`}>
//                             {row.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-2 flex justify-end gap-2">
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Edit</button>
//                           <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40' : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'}`}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Profile Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img 
//                   src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
//                   className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
//                   alt={selectedMember.name} 
//                 />
//                 <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
//                   selectedMember.status === 'Online' ? 'bg-emerald-500' : 
//                   selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
//                   'bg-gray-400'
//                 }`}></span>
//               </div>
//               <div>
//                 <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
//                 <div className="mt-2">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
//                     selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {selectedMember.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
//               <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
//               <div className="grid grid-cols-5 gap-2">
//                 {selectedMember.weeklyAttendance.map((log) => (
//                   <div key={log.day} className="text-center">
//                     <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
//                       log.status === 'Present' ? 'bg-indigo-100' : 
//                       log.status === 'Late' ? 'bg-amber-100' : 
//                       'bg-red-100'
//                     }`}>
//                       <div 
//                         className={`w-full rounded-t-sm ${
//                           log.status === 'Present' ? 'bg-indigo-500' : 
//                           log.status === 'Late' ? 'bg-amber-400' : 
//                           'bg-red-400'
//                         }`}
//                         style={{ height: `${(log.hours / 10) * 100}%` }}
//                       />
//                     </div>
//                     <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button 
//                 onClick={() => setSelectedMember(null)}
//                 className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;












































































import React, { useState } from 'react';

const Dashboard = () => {
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  
  // STATE: State for interactive attendance chart
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  
  // Form State matching your MySQL columns
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("VACATION");
  const [leaveReason, setLeaveReason] = useState("");

  // Profile Modal State
  const [selectedMember, setSelectedMember] = useState(null);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // --- NEW DATA: Leave History with Indian Format (DD-MM-YYYY) ---
  const leaveHistory = [
    { id: 1, startDate: '03-07-2026', endDate: '03-07-2026', hours: 8.00, type: 'Paid Time Off', comment: 'sick leave', status: 'APPROVED' },
    { id: 2, startDate: '25-06-2026', endDate: '27-06-2026', hours: 24.00, type: 'Paid Time Off', comment: 'Planned PTO for personal time off', status: 'PROCESSED' },
    { id: 3, startDate: '10-06-2026', endDate: '10-06-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Planned PTO for a family function.', status: 'PROCESSED' },
    { id: 4, startDate: '15-05-2026', endDate: '15-05-2026', hours: 8.00, type: 'Paid Time Off', comment: 'Leave request applied from Jira', status: 'PROCESSED' },
  ];

  // Derived state for the active chart
  const selectedEmployee = team.find(emp => emp.id === selectedEmployeeId);
  const totalHours = selectedEmployee ? selectedEmployee.weeklyAttendance.reduce((sum, log) => sum + log.hours, 0) : 0;
  const daysPresent = selectedEmployee ? selectedEmployee.weeklyAttendance.filter(log => log.status === 'Present' || log.status === 'Late').length : 0;

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
      type: leaveType,
      reason: leaveReason
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
        setLeaveType("VACATION");
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
    <div className={`flex h-screen overflow-hidden font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F9FAFB] text-gray-800'}`}>
      
      {/* --- SIDEBAR --- */}
      <aside className={`w-[260px] border-r flex flex-col hidden lg:flex shrink-0 transition-colors duration-300 overflow-y-auto ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-[#F4F5F7] border-gray-200'}`}>
        <div className="p-5 mt-4">
          <div className={`p-3 rounded-xl shadow-sm border flex items-center justify-between cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                Ac
              </div>
              <div>
                <h2 className={`font-bold text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Acme Corp</h2>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Workspace</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className={`px-4 text-xs font-semibold mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Main Menu</p>
          <button className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100'}`}>
            <span className="text-indigo-600 w-5">⊞</span> Dashboard
          </button>
          {['Team Directory', 'Leave Requests', 'Announcements'].map((item, idx) => (
            <button key={item} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'}`}>
              <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{['👥', '✈️', '📢'][idx]}</span> {item}
            </button>
          ))}

          {/* Profile Section */}
          <div className="mt-8 px-4">
            <p className={`text-xs font-semibold mb-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Profile</p>
            <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'}`}>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full" alt="User" />
                <div className="overflow-hidden">
                  <p className="text-sm font-bold truncate">Alex Dev</p>
                  <p className="text-[10px] opacity-70">alex@acme.com</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className={`flex-1 flex flex-col overflow-y-auto transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
        {/* Header */}
        <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Overview</h1>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
              🔔<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
          </div>
        </header>

        {/* Scrollable Dashboard Grid */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* 1. Extended Attendance Dashboard & Leave Summary */}
            <div className="lg:col-span-8 flex flex-col gap-6">

              {/* INTERACTIVE: Weekly Attendance Chart */}
              <div className={`p-6 rounded-2xl border shadow-sm flex-1 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📊 Weekly Attendance Log</h3>
                    <div className="flex gap-4 mt-2">
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Hours: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{totalHours}h</span></div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Days Present: <span className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{daysPresent}/5</span></div>
                    </div>
                  </div>
                  
                  {/* Dropdown to select employee */}
                  <select 
                    value={selectedEmployeeId}
                    onChange={(e) => setSelectedEmployeeId(Number(e.target.value))}
                    className={`rounded-lg p-2 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                  >
                    {team.map(emp => (
                      <option key={emp.id} value={emp.id}>{emp.name}</option>
                    ))}
                  </select>
                </div>
                
                {/* CSS Bar Chart mapped to the selected employee */}
                <div className="flex items-end justify-between h-40 mt-6 gap-4">
                  {selectedEmployee && selectedEmployee.weeklyAttendance.map((log) => (
                    <div key={log.day} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                      
                      {/* Tooltip & Bar */}
                      <div className={`w-full max-w-[60px] rounded-t-md flex items-end justify-center relative group h-[120px] transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
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
                      
                      <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</span>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className={`flex justify-center gap-6 mt-6 pt-5 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                  <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="w-3 h-3 rounded-full bg-indigo-500"></span> On Time
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span> Late
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="w-3 h-3 rounded-full bg-red-400"></span> Absent
                  </div>
                </div>
              </div>

            </div>

            {/* 2. Company Announcements + AI Feature */}
            <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📢 Announcements</h3>
                <button 
                  onClick={handleAiSummarize}
                  disabled={isAiSummarizing}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 border disabled:opacity-50 ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400 border-indigo-700 hover:bg-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100'}`}
                >
                  {isAiSummarizing ? '⏳ Processing...' : '✨ AI Summarize'}
                </button>
              </div>
              <div className="space-y-4 flex-1">
                {announcements.map((msg) => (
                  <div key={msg.id} className={`p-4 rounded-xl border transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
                    <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{msg.date}</p>
                    <h4 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{msg.title}</h4>
                    <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{msg.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Leave Request Form connected to MySQL */}
            <div className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>✈️ Request Leave</h3>
              <form className="space-y-4" onSubmit={handleLeaveSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Start Date</label>
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                      className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>End Date</label>
                    <input 
                      type="date" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                      className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`} 
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Leave Type</label>
                  <select 
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                  >
                    <option value="VACATION">Vacation</option>
                    <option value="SICK">Sick Leave</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reason</label>
                  <textarea 
                    rows={2}
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                    placeholder="Briefly describe the reason for your leave..."
                    className={`w-full rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                  Submit Request
                </button>
              </form>
            </div>

            {/* 4. Team Directory */}
            <div className={`lg:col-span-4 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-center mb-5">
                <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>👥 Team Directory</h3>
                <div className="relative">
                  <span className="absolute inset-y-0 left-2.5 flex items-center text-gray-400 text-xs">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search team..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`pl-8 pr-3 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-48 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                  />
                </div>
              </div>
              <div className={`flex-1 overflow-auto border rounded-xl divide-y transition-colors duration-300 ${isDarkMode ? 'border-gray-700 divide-gray-700' : 'border-gray-100 divide-gray-100'}`}>
                {team
                  .filter((member) => 
                    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    member.role.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((member) => (
                  <div key={member.id} className={`flex items-center justify-between p-3 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={`https://i.pravatar.cc/150?img=${member.avatar}`} className={`w-10 h-10 rounded-full border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} alt={member.name} />
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          member.status === 'Online' ? 'bg-emerald-500' : 
                          member.status === 'In Meeting' ? 'bg-amber-500' : 
                          'bg-gray-400'
                        }`}></span>
                      </div>
                      <div>
                        <p className={`font-bold text-sm leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{member.name}</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className={`text-xs font-semibold border px-3 py-1.5 rounded-md transition-colors ${isDarkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-indigo-400' : 'text-gray-600 border-gray-200 hover:bg-white hover:text-indigo-600'}`}
                    >
                      Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Leave History Table */}
            <div className={`lg:col-span-12 p-6 rounded-2xl border shadow-sm flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`font-bold flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>📜 Leave History</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Apply</button>
                  <button className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Clear</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className={`border-b text-xs uppercase ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
                      <th className="pb-3 font-semibold px-2">Leave Start Date</th>
                      <th className="pb-3 font-semibold px-2">Leave End Date</th>
                      <th className="pb-3 font-semibold px-2">Hours</th>
                      <th className="pb-3 font-semibold px-2">Leave Type</th>
                      <th className="pb-3 font-semibold px-2 w-1/4">Comment</th>
                      <th className="pb-3 font-semibold px-2">Status</th>
                      <th className="pb-3 font-semibold px-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className={`text-sm divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
                    {leaveHistory.map((row) => (
                      <tr key={row.id} className={`transition-colors ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}>
                        <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.startDate}</td>
                        <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.endDate}</td>
                        <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.hours}</td>
                        <td className={`py-3 px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.type}</td>
                        <td className={`py-3 px-2 truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{row.comment}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
                            row.status === 'APPROVED' ? (isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600') : 
                            (isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 px-2 flex justify-end gap-2">
                          <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>Edit</button>
                          <button className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${isDarkMode ? 'bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40' : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100'}`}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Profile Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className={`rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Team Member Profile</h3>
              <button 
                onClick={() => setSelectedMember(null)}
                className={`text-2xl leading-none ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
              >
                ×
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img 
                  src={`https://i.pravatar.cc/150?img=${selectedMember.avatar}`} 
                  className={`w-20 h-20 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} 
                  alt={selectedMember.name} 
                />
                <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                  selectedMember.status === 'Online' ? 'bg-emerald-500' : 
                  selectedMember.status === 'In Meeting' ? 'bg-amber-500' : 
                  'bg-gray-400'
                }`}></span>
              </div>
              <div>
                <h4 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{selectedMember.name}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{selectedMember.role}</p>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedMember.status === 'Online' ? 'bg-emerald-100 text-emerald-800' : 
                    selectedMember.status === 'In Meeting' ? 'bg-amber-100 text-amber-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedMember.status}
                  </span>
                </div>
              </div>
            </div>

            <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Weekly Attendance</h5>
              <div className="grid grid-cols-5 gap-2">
                {selectedMember.weeklyAttendance.map((log) => (
                  <div key={log.day} className="text-center">
                    <div className={`w-full h-16 rounded-lg flex items-end justify-center p-1 ${
                      log.status === 'Present' ? 'bg-indigo-100' : 
                      log.status === 'Late' ? 'bg-amber-100' : 
                      'bg-red-100'
                    }`}>
                      <div 
                        className={`w-full rounded-t-sm ${
                          log.status === 'Present' ? 'bg-indigo-500' : 
                          log.status === 'Late' ? 'bg-amber-400' : 
                          'bg-red-400'
                        }`}
                        style={{ height: `${(log.hours / 10) * 100}%` }}
                      />
                    </div>
                    <p className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{log.day}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{log.hours}h</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;