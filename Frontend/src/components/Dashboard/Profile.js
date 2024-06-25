import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [loggedInEmail, setLoggedInEmail] = useState('');

    useEffect(() => {
        const email = localStorage.getItem('loggedInEmail');
        if (email) {
          setLoggedInEmail(email);
        }
      }, []);
  return (
    <div>  <p className="logged-in-email text-center m-3">Logged in as: {loggedInEmail}</p>

    </div>
  )
}

export default Profile
