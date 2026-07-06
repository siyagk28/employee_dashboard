import React, { useState } from 'react';
import Login from './Components/login_page';
import Signup from './Components/signup_page';
import Dashboard from './Components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleSignupSuccess = () => {
    setShowSignup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
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
        <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
