import { useState } from 'react';

interface WalletVerificationProps {
  onVerificationComplete: (isVerified: boolean, publicKey: string) => void;
}

const WalletVerification: React.FC<WalletVerificationProps> = ({ onVerificationComplete }) => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');

  const handlePhoneNumberSubmit = () => {
    setLoading(true);

    // Simulating API call to send OTP to the provided phone number
    setTimeout(() => {
      setLoading(false);
      // Simulating receiving OTP
      setOTP('123456');
    }, 2000);
  };

  const handleVerificationSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const isVerified = otp === '123456';
      const publicKey = 'YOUR_PUBLIC_KEY';

      onVerificationComplete(isVerified, publicKey);
    }, 2000);
  };

  const renderContent = () => {
    if (!phoneNumber) {
      return (
        <>
          <h2>Connect Wallet and Verify</h2>
          <p>Click the button below to start the verification process.</p>
          <button onClick={handlePhoneNumberSubmit} disabled={loading}>
            Start Verification
          </button>
        </>
      );
    }

    if (!otp) {
      return (
        <>
          <h2>Enter Your Phone Number</h2>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
          <button onClick={handlePhoneNumberSubmit} disabled={loading}>
            Send OTP
          </button>
        </>
      );
    }

    return (
      <>
        <h2>Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="OTP"
        />
        <button onClick={handleVerificationSubmit} disabled={loading}>
          Verify
        </button>
      </>
    );
  };

  return <div style={{ textAlign: 'center' }}>{renderContent()}</div>;
};

export default WalletVerification;
