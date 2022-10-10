import styles from './PasswdRangeInput.module.css';

function PasswdRangeInput({ onRangeChange, defaultRange }) {
  return (
    <div className={styles}>
      <label htmlFor='password_range' className='sr-only'>
        Passwd range
      </label>
      <input
        type='range'
        name='password_range'
        id='password_range'
        min='1'
        max='16'
        defaultValue={defaultRange}
        onChange={onRangeChange}
      />
    </div>
  );
}

export default PasswdRangeInput;
