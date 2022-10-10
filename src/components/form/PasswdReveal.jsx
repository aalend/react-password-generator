import { useState } from 'react';
import CopyIcon from '../ui/CopyIcon';
import styles from './PasswdReveal.module.css';

function PasswordReveal({ password, onClipboard }) {
  const [clipboard, setClipboard] = useState(null);

  const copyPassword = async function () {
    try {
      await navigator.clipboard.writeText(password);
      setClipboard(password);
      onClipboard(true);
    } catch (error) {
      setClipboard(null);
      onClipboard(false);
    }
  };

  return (
    <>
      <div className={`${styles['passwd-reveal']} container flex-between`}>
        {password}
        <button type='button' onClick={copyPassword}>
          <CopyIcon />
        </button>
      </div>
    </>
  );
}

export default PasswordReveal;
