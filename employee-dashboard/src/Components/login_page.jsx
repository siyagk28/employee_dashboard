import React, { useState } from 'react';

const Login = ({ onLoginSuccess, onShowSignup }) => {
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Simulated validation & submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const response = await fetch('http://sql302.infinityfree.com/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.status === 'success') {
        setIsLoading(false);
        if (onLoginSuccess) onLoginSuccess(email);
      } else {
        setIsLoading(false);
        setErrorMsg(data.message || 'Invalid corporate email or password configuration.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg("Failed to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Decorative Blur Blobs for Enhanced UI/UX Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="w-full max-w-[480px] bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-10 relative z-10 transition-all duration-300">
        
        {/* Brand Logo Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-600/20 mb-4 transition-transform hover:scale-105 duration-300">
            Ac
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1.5 text-center">
            
          </p>
        </div>

        {/* Dynamic Contextual Error Feedback Box */}
        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 animate-headShake">
            <span className="text-red-500 mt-0.5">⚠️</span>
            <p className="text-xs font-semibold text-red-700 leading-normal">{errorMsg}</p>
          </div>
        )}

        {/* Input Form Section */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* Corporate Email Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Corporate Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm pointer-events-none">
                📧
              </span>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Secure Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                Password
              </label>
              <button 
                type="button"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                onClick={() => alert("Please contact your network systems manager to reset credentials.")}
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm pointer-events-none">
                🔒
              </span>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Utilities Options Row */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2.5 cursor-pointer group select-none">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer accent-indigo-600"
              />
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                Remember this device
              </span>
            </label>
          </div>

          {/* Dynamic Interactive Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md shadow-indigo-600/10 hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-60 transition-all duration-150 flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Authenticating Secure Node...</span>
              </>
            ) : (
              <span>Sign In Securely</span>
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <button 
            type="button"
            onClick={onShowSignup}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Don't have an account? Sign Up
          </button>
        </div>

        {/* Layout Footer Brand Signature */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
          <span>Protected by AES-256</span>
          <span>v2.4.1-Build</span>
        </div>

      </div>
    </div>
  );
};

export default Login;