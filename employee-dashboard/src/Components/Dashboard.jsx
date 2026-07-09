import React, { useState, useEffect } from 'react';

const Dashboard = ({ userEmail, onLogout }) => {
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiSummarizing, setIsAiSummarizing] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [hours, setHours] = useState("");
  
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

  // Leave History State - fetched from database
  const [leaveHistory, setLeaveHistory] = useState([]);

  // Fetch leave history
  const fetchLeaveHistory = async () => {
    try {
      const response = await fetch('http://sql302.infinityfree.com/fetch_leave.php')
      const result = await response.json();
      console.log("Fetched Leaves:", result);

      if (result.status === "success") {
        setLeaveHistory(result.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchLeaveHistory();
  }, []);

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
      user_email: userEmail,
      start_date: startDate, 
      end_date: endDate,
      hours: Number(hours),
      leave_type: leaveType,
      reason: leaveReason
    };

    try {
      const response = await fetch("http://sql302.infinityfree.com/add_leave.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert(result.message);
        setStartDate("");
        setEndDate("");
        setHours("");
        setLeaveType("VACATION");
        setLeaveReason("");
        fetchLeaveHistory();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit leave. Check console for details.");
    }
  };

  // --- MySQL DB Delete Submission ---
  const deleteLeave = async (id) => {
    if (!id) {
      alert("Error: The ID is missing! The table row didn't pass an ID.");
      return;
    }

    if (!window.confirm("Delete this leave request?")) return;

    try {
      const response = await fetch("http://sql302.infinityfree.com/delete_leave.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id })
      });

      const rawText = await response.text();
      const result = JSON.parse(rawText);

      alert(result.message);

      if (result.status === "success") {
        fetchLeaveHistory(); 
      }

    } catch (error) {
      console.error("Critical Error Caught:", error);
      alert("Delete failed! Please check the F12 Console for details.");
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
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 shadow-sm border rounded-lg font-bold text-sm transition-colors duration-300 ${currentView === 'dashboard' ? (isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200')}`}
          >
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
            <button 
              onClick={() => setCurrentView('settings')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm mt-2 transition-colors duration-300 ${currentView === 'settings' ? (isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-100') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200')}`}
            >
              <span className={`w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>⚙️</span> Settings
            </button>
          </div>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className={`flex-1 flex flex-col overflow-y-auto transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        
        {/* Header */}
        <header className={`px-8 py-6 flex justify-between items-center border-b shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{currentView === 'dashboard' ? 'Overview' : 'Settings'}</h1>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Welcome back, Alex.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onLogout}
              className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
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
            {/* Header Profile Dropdown */}
            <div className="relative">
              <img 
                src="https://i.pravatar.cc/150?img=11" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-indigo-100 cursor-pointer" 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              />
              {isProfileMenuOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg border py-2 z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className={`px-4 py-2 text-xs font-bold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>My Account</div>
                  <button 
                    onClick={() => { setCurrentView('dashboard'); setIsProfileMenuOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
                  >
                    Dashboard
                  </button>
                  <button 
                    onClick={() => { setCurrentView('settings'); setIsProfileMenuOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
                  >
                    Settings
                  </button>
                  <hr className={`my-1 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`} />
                  <button 
                    onClick={() => { onLogout(); setIsProfileMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Grid */}
        <div className="flex-1 p-8">
          {currentView === 'dashboard' ? (
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
            
            {/* 3. Apply for Leave Form */}
            <div
              className={`lg:col-span-8 p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <h3 className={`font-bold mb-5 flex items-center gap-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                ✈️ Apply for Leave
              </h3>

              <form onSubmit={handleLeaveSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Start Date */}
                <div>
                  <label className={`block text-xs font-bold mb-1 uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                    className={`w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className={`block text-xs font-bold mb-1 uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                    className={`w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  />
                </div>

                {/* Hours */}
                <div>
                  <label className={`block text-xs font-bold mb-1 uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Hours
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Hours"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    required
                    className={`w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  />
                </div>

                {/* Leave Type */}
                <div>
                  <label className={`block text-xs font-bold mb-1 uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Leave Type
                  </label>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className={`w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  >
                    <option value="SICK">Sick</option>
                    <option value="CASUAL">Casual</option>
                    <option value="VACATION">Vacation</option>
                    <option value="PERSONAL">Personal</option>
                  </select>
                </div>

                {/* Comment */}
                <div className="md:col-span-2">
                  <label className={`block text-xs font-bold mb-1 uppercase ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Comment
                  </label>
                  <textarea
                    rows="3"
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                    placeholder="Enter Comment..."
                    className={`w-full rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-200"}`}
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    Submit Request
                  </button>
                </div>
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
                          <button
                            onClick={() => deleteLeave(row.id)}
                            className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${
                                isDarkMode ? "bg-red-900/20 border-red-900/50 text-red-400 hover:bg-red-900/40" : "bg-red-50 border-red-100 text-red-600 hover:bg-red-100"
                            }`}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className={`p-6 rounded-2xl border shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Settings</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Settings panel coming soon...</p>
              </div>
            </div>
          )}
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