import { useState } from 'react';

interface DigilockerVerificationProps {
  publicKey: string;
  digiLockerId: string;
}

const DigilockerVerification: React.FC<DigilockerVerificationProps> = ({ publicKey, digiLockerId }) => {
  const [loading, setLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState('');

  const verifyWithDigilocker = async () => {
    setLoading(true);

    try {
      // Implement the verification logic to check if the publicKey is associated with the digiLockerId
      // Replace this code with your actual verification logic
      const isVerified = await verifyPublicKeyWithDigilockerID(publicKey, digiLockerId);

      if (isVerified) {
        setVerificationResult('Verified');
      } else {
        setVerificationResult('Not Verified');
      }
    } catch (error) {
      console.error('Error verifying with Digilocker:', error);
      setVerificationResult('Error');
    }

    setLoading(false);
  };

  const verifyButtonText = loading ? 'Verifying...' : 'Verify with Digilocker';

  return (
    <div>
      <button onClick={verifyWithDigilocker} disabled={loading}>
        {verifyButtonText}
      </button>
      <p>Verification Result: {verificationResult}</p>
    </div>
  );
};

export default DigilockerVerification;

async function verifyPublicKeyWithDigilockerID(publicKey: string, digiLockerId: string): Promise<boolean> {
  // Implement the verification logic to check if the publicKey is associated with the digiLockerId
  // Replace this code with your actual verification logic

  // Simulating an async operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // In this example, the verification is considered successful if the publicKey is not empty and the digiLockerId is a specific value
      if (publicKey && digiLockerId === 'example-digilocker-id') {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 2000);
  });
}
