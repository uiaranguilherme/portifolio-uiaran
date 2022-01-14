
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from '../src/styles/theme';

import Home from '../src/pages/Home';
import Abilidades from './pages/Abilidades';
import Portifólio from './pages/Portifólio';
import Rodape from './components/Rodape';

function App() {
  return (
    <ThemeProvider theme={theme}>
            <Home id="home" />
            <Abilidades id="skils" />
            <Portifólio id="portifolio" />
            <Rodape/>
        <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
