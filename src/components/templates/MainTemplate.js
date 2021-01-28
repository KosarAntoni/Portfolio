import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from '../../theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';
import Header from '../organisms/Header/Header';
import GridTemplate from './GridTemplate';
import { projects, skills } from '../../data/data';
import MainBanner from '../organisms/MainBanner/MainBanner';

const MainTemplate = () => {
  const [theme, setTheme] = useState(themeLight);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const changeTheme = () => {
      if (media.matches) {
        setTheme(themeDark);
      } else {
        setTheme(themeLight);
      }
    };

    media.addEventListener('change', changeTheme, false);
    changeTheme();
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainBanner />
      <GridTemplate projects={projects} skills={skills} />
    </ThemeProvider>
  );
};

export default MainTemplate;
