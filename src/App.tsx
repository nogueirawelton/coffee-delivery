import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { ShopProvider } from './hooks/useShop';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShopProvider>
          <Router />
        </ShopProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};
