import { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

interface WalletConnectionProps {
  digiLockerId: string;
  onVerificationComplete: (isVerified: boolean, publicKey: string) => void;
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ digiLockerId, onVerificationComplete }) => {
  const [loading, setLoading] = useState(false);

  const connectToSolanaWallet = async () => {
    return { publicKey: new PublicKey('public_key_here') };
  };

  const verifyPublicKeyWithDigilockerID = async (publicKey: string, digiLockerId: string) => {
    return true;
  };

  const connectWallet = async () => {
    setLoading(true);

    try {
      const connectedWallet = await connectToSolanaWallet();

      if ('publicKey' in connectedWallet) {
        const publicKey = connectedWallet.publicKey.toString();
        const isVerified = await verifyPublicKeyWithDigilockerID(publicKey, digiLockerId);

        onVerificationComplete(isVerified, publicKey);
      } else {
        alert('Failed to connect to the Solana wallet');
        onVerificationComplete(false, '');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect to the Solana wallet');
      onVerificationComplete(false, '');
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={connectWallet} disabled={loading}>
        {loading ? 'Connecting...' : 'Connect Solana Wallet'}
      </button>
    </div>
  );
};

export default WalletConnection;
