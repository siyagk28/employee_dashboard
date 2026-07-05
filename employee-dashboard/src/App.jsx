import React, { useState } from 'react';
import Login from './Components/login_page';
import Signup from './Components/signup_page';
import Dashboard from './Components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignupSuccess = () => {
    setShowSignup(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        showSignup ? (
          <Signup 
            onSignupSuccess={handleSignupSuccess} 
            onBackToLogin={() => setShowSignup(false)} 
          />
        ) : (
          <Login 
            onLoginSuccess={handleLoginSuccess} 
            onShowSignup={() => setShowSignup(true)} 
          />
        )
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
