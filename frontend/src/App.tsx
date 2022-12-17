import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import DefaultLayout from './layouts/Default';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </DefaultLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
