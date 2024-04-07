import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar'
import { ThemeType } from './types/app.type';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './styles/theme';
import { ConclusionPage, IntentPage, MinutesPage, SplashPage, TechnologyPage } from './pages';
import TimelinePage from './pages/Timeline';
import PresentationPage from './pages/Presentation';

const themeKey = 'theme';

const App: React.FC = () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDark, setIsDark] = useState(prefersDarkScheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', ThemeType.DARK);
    } else {
      document.documentElement.setAttribute('data-theme', ThemeType.LIGHT);
    }
    localStorage.setItem(themeKey, isDark ? ThemeType.DARK : ThemeType.LIGHT);
  }, [isDark]);

  return (
    // <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    //   <CssBaseline />

    <BrowserRouter>
      <Sidebar isHome={false} isDark={false} setIsDark={function (): void {
        setIsDark(!isDark);
      }} />
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path='/minutes' element={<MinutesPage />} />
        <Route path='/intent' element={<IntentPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
        <Route path='/timeline' element={<TimelinePage />} />
        <Route path='/conclusion' element={<ConclusionPage />} />
        <Route path='/presentation' element={<PresentationPage />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  )
}

export default App
