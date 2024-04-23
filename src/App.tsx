import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Sidebar from "./components/Sidebar";
import { ThemeType } from "./types/app.type";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./styles/theme";
import {
  ConclusionPage,
  IntentPage,
  MinutesPage,
  SplashPage,
  TechnologyPage,
} from "./pages";
import TimelinePage from "./pages/Timeline";
import PresentationPage from "./pages/Presentation";
import {
  PATGPage,
  InformationPrivacyPage,
  WorkAndWealthPage,
  IntellectualPropertyPage,
  ComputerReliabilityPage,
} from "./pages/Sections";

const App: React.FC = () => {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const [isDark, setIsDark] = useState(prefersDarkScheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", ThemeType.DARK);
    } else {
      document.documentElement.setAttribute("data-theme", ThemeType.LIGHT);
    }
  }, [isDark]);

  const toggleIsDark = () => {
    setIsDark(!isDark);
  };

  const drawerWidth = 300;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />

      <BrowserRouter basename="/EEAO">
        <Box sx={{ display: "flex" }}>
          <Sidebar
            width={drawerWidth}
            isDark={isDark}
            toggleIsDark={toggleIsDark}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Routes>
              <Route path="/" element={<SplashPage />} />
              <Route path="/minutes" element={<MinutesPage />} />
              <Route path="/intent" element={<IntentPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/conclusion" element={<ConclusionPage />} />
              <Route path="/presentation" element={<PresentationPage />} />
              <Route
                path="/privacy-and-the-government"
                element={<PATGPage />}
              />
              <Route
                path="/information-privacy"
                element={<InformationPrivacyPage />}
              />
              <Route path="/work-and-wealth" element={<WorkAndWealthPage />} />
              <Route
                path="/intellectual-property"
                element={<IntellectualPropertyPage />}
              />
              <Route
                path="/computer-reliability"
                element={<ComputerReliabilityPage />}
              />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
