import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import FormField from './FormField';
import PasswdRangeInput from './PasswdRangeInput';
import PasswdStrength from './PasswdStrength';

const DEFAULT_PASSWORD_RANGE = 12;

function Form({ getPassword, resetClipboard }) {
  const [rangeChange, setRangeChange] = useState(DEFAULT_PASSWORD_RANGE);
  const [uppercaseChecked, setUppercaseChecked] = useState(true);
  const [lowercaseChecked, setLowercaseChecked] = useState(false);
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [symbolsChecked, setSymbolsChecked] = useState(true);
  const [hasError, setHasError] = useState(true);

  const handleRangeChange = function (e) {
    setRangeChange(e.target.value);
  };

  const handleUppercaseChecked = function (e) {
    setUppercaseChecked(e.target.checked);
  };

  const handleLowercaseChecked = function (e) {
    setLowercaseChecked(e.target.checked);
  };

  const handleNumbersChecked = function (e) {
    setNumbersChecked(e.target.checked);
  };

  const handleSymbolsChecked = function (e) {
    setSymbolsChecked(e.target.checked);
  };

  const generatePassword = function () {
    let password = [];
    let humanPassword = '';
    const SYMBOLS = '~`!@#$%^&*()_-+={[}]|:;"\'<,>.?/';

    for (let i = 0; i < +rangeChange; i++) {
      if (uppercaseChecked)
        password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
      if (lowercaseChecked)
        password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
      if (numbersChecked) password.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
      if (symbolsChecked) password.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);

      humanPassword += password[Math.floor(Math.random() * password.length)];
    }

    getPassword(humanPassword);
  };

  useEffect(() => {
    generatePassword();
    resetClipboard(false);
  }, []);

  const submitGenerateForm = function (e) {
    e.preventDefault();

    resetClipboard(false);
    generatePassword();
  };

  return (
    <>
      <form onSubmit={submitGenerateForm} action='' className={styles['form']}>
        <div className='container flow'>
          <div className='even-columns'>
            <h2>Character Length</h2>
            <div>{rangeChange}</div>
          </div>
          <div className='flow'>
            <PasswdRangeInput
              onRangeChange={handleRangeChange}
              defaultRange={DEFAULT_PASSWORD_RANGE}
            />
            <FormField
              type='checkbox'
              name='uppercase_letters'
              id='uppercase_letters'
              label='Include Uppercase Letters'
              onInputCheck={handleUppercaseChecked}
              isChecked={uppercaseChecked}
            />
            <FormField
              type='checkbox'
              name='lowercase_letters'
              id='lowercase_letters'
              label='Include Lowercase Letters'
              onInputCheck={handleLowercaseChecked}
              isChecked={lowercaseChecked}
            />
            <FormField
              type='checkbox'
              name='include_numbers'
              id='include_numbers'
              label='Include Numbers'
              onInputCheck={handleNumbersChecked}
              isChecked={numbersChecked}
            />
            <FormField
              type='checkbox'
              name='include_symbols'
              id='include_symbols'
              label='Include Symbols'
              onInputCheck={handleSymbolsChecked}
              isChecked={symbolsChecked}
            />
          </div>
          <PasswdStrength password={rangeChange} />
          <button type='submit'>Generate</button>
        </div>
      </form>
    </>
  );
}

export default Form;
