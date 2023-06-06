import { useState } from 'react';
import WalletVerification from './WalletVerification';

interface Props {
  onSubmit: (username: string) => void;
}

const UsernameForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVerified, setVerified] = useState(false);

  const handleVerificationComplete = (verified: boolean, publicKey: string) => {
    if (verified) {
      setVerified(true);
    } else {
      alert('Verification failed');
    }

    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerified) {
      onSubmit(username);
    } else {
      alert('Please complete the verification process');
    }
  };

  return (
    <div>
      {isVerified ? (
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
      ) : (
        <WalletVerification onVerificationComplete={handleVerificationComplete} />
      )}
    </div>
  );
};

export default UsernameForm;
