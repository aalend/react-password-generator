import { useEffect, useState } from 'react';
import styles from './PasswdStrength.module.css';

function PasswdStrength({ password }) {
  const [passwordStrength, setPasswordStrength] = useState();
  const [securityLevel, setSecurityLevel] = useState();

  useEffect(() => {
    if (password >= 4) {
      setPasswordStrength('low security');
      setSecurityLevel(1);
    }

    if (password >= 5 && password < 8) {
      setPasswordStrength('medium security');
      setSecurityLevel(2);
    }

    if (password >= 8 && password < 12) {
      setPasswordStrength('strong security');
      setSecurityLevel(3);
    }

    if (password >= 12) {
      setPasswordStrength('very strong security');
      setSecurityLevel(4);
    }
  }, [password]);

  return (
    <div className={`${styles['strength-bars']} flex-align`}>
      <p>{passwordStrength}</p>
      <div
        className={`
          ${styles['bars']} 
          ${securityLevel === 1 ? `${styles['security-level-1']}` : ''}
          ${securityLevel === 2 ? `${styles['security-level-2']}` : ''}
          ${securityLevel === 3 ? `${styles['security-level-3']}` : ''}
          ${securityLevel === 4 ? `${styles['security-level-4']}` : ''}
          `}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default PasswdStrength;
