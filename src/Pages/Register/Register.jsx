import React, { useState, useEffect } from 'react';
// import DisplayData from './DisplayData';

function Register() {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage when the component mounts.
    const userData = localStorage.getItem('registeredUser');

    if (userData) {
      const user = JSON.parse(userData);
      setEmail(user.email);
      setPassword(user.password);
      const imageFileName = user.image;
      if (imageFileName) {
        setImage(imageFileName);
      }
    }
  }, []);

  const handleUpdate = () => {
    // Update the user data in localStorage with the edited information.
    const user = {
      email,
      password,
      image: image ? image : null,
    };

    localStorage.setItem('registeredUser', JSON.stringify(user));

      // Clear the input fields after saving the data
      setEmail('');
      setPassword('');
      setImage(null);
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleUpdate}>Update Profile</button>

      {/* Pass data to DisplayData component */}
      {/*<DisplayData email={email} password={password} image={image} />*/}
    </div>
  );
}

export default Register;
