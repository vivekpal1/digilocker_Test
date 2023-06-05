import { useState } from 'react';
import authenticateWithDigilocker from './digilockerUtils';

interface Props {
  onSubmit: (username: string) => void;
}

const UsernameForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const digilockerName = await authenticateWithDigilocker(
      'your-client-id',
      'your-client-secret',
      'your-auth-token'
    );

    if (digilockerName && digilockerName.toLowerCase() === username.toLowerCase()) {
      onSubmit(username);
    } else {
      alert('Invalid username or DigiLocker authentication failed');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default UsernameForm;
