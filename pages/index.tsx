import { useState } from 'react';
import UsernameForm from '../components/UsernameForm';
import WalletVerification from '../components/WalletVerification';

const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [verificationComplete, setVerificationComplete] = useState(false);

  const handleUsernameSubmit = (submittedUsername: string) => {
    setUsername(submittedUsername);
  };

  const handleVerificationComplete = (isVerified: boolean, publicKey: string) => {
    if (isVerified) {
      // Handle the verification completion logic here, such as updating state or making API calls
      setVerificationComplete(true);
    } else {
      alert('Verification failed');
    }
  };

  return (
    <div>
      {verificationComplete ? (
        <h2>Verification Complete!</h2>
      ) : username ? (
        <WalletVerification onVerificationComplete={handleVerificationComplete} />
      ) : (
        <UsernameForm onSubmit={handleUsernameSubmit} />
      )}
    </div>
  );
};

export default HomePage;
