import { useState } from 'react';
import UsernameForm from '../components/UsernameForm';

const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleUsernameSubmit = (submittedUsername: string) => {
    setUsername(submittedUsername);
  };

  return (
    <div>
      {username ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <UsernameForm onSubmit={handleUsernameSubmit} />
      )}
    </div>
  );
};

export default HomePage;
