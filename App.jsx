import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main style={{ padding: '2rem' }}>
        <h1>Pearl Translations</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <p>Coming soon: login, chapters, coins, and more!</p>
      </main>
    </div>
  );
}

export default App;
