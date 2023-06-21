import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme.js';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

import { Home } from './pages/Home';
import { Details } from './pages/Details';

import { Home_Admin } from './pages/Home_Admin';
import { Details_Admin } from './pages/Details_Admin';
import { New_Admin } from './pages/New_Admin';
import { Edit_Admin } from './pages/Edit_Admin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Edit_Admin />
    </ThemeProvider>
  </React.StrictMode>,
)
