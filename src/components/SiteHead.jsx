import styles from './SiteHead.module.css';

function SiteHead({ clipboardMessage }) {
  return (
    <header className={styles['site-head']}>
      <div className='container'>
        <h1>PasswdGen</h1>

        <div
          className={`
            ${styles['clipboard-message']} 
            ${clipboardMessage ? styles['clipboard-message-reveal'] : ''}
          `}
        >
          <p>Saved to clipboard!</p>
        </div>
      </div>
    </header>
  );
}

export default SiteHead;
