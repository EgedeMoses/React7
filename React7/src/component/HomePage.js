
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Fetch user details from dummy API
    // For now, we will use local storage

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    setUserDetails({ username, email });
  }, []);

  return (
    <div>
      <h1>Welcome to your Homepage</h1>
      <div className="user-details-card">
        <h2>User Details</h2>
        <p>Username: {userDetails.username}</p>
        <p>Email: {userDetails.email}</p>
      </div>
    </div>
  );
};

export default HomePage;
