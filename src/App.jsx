import { useState } from 'react';
import Form from './components/form/Form';
import PasswdReveal from './components/form/PasswdReveal';
import SiteHead from './components/SiteHead';

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [clipboard, setClipboard] = useState(false);

  const getPassword = function (password) {
    setGeneratedPassword(password);
  };

  const handleClipboardSave = function (flag) {
    setClipboard(flag);
  };

  return (
    <>
      <SiteHead clipboardMessage={clipboard} />
      <main id='main-content' tabIndex='-1'>
        <section className='flow'>
          <PasswdReveal password={generatedPassword} onClipboard={handleClipboardSave} />
          <Form getPassword={getPassword} resetClipboard={handleClipboardSave} />
        </section>
      </main>
      <footer>
        <div className='container'>
          <p>&copy; 2022</p>
        </div>
      </footer>
    </>
  );
}

export default App;
