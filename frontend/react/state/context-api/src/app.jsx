import { useEffect, useState } from 'react';
import Card from './components/card.jsx';
import ThemeBtn from './components/theme-btn.jsx';
import { ThemeProvider } from './contexts/theme.js';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightMode = () => {
    setThemeMode('light');
  };

  const darkMode = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkMode, lightMode, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
