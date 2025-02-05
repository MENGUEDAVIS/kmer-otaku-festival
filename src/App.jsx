import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Program from './pages/Program';
import Gallery from './pages/Gallery';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.cyberDark};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Program />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/billetterie" element={<Tickets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
