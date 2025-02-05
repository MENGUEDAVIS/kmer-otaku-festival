import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 50;
  background-color: ${props => props.theme.colors.cyberDark}cc;
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.manga};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.neonPink};
`;

const DesktopMenu = styled.div`
  display: none;
  gap: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-family: ${props => props.theme.fonts.cyber};
  color: ${props => props.theme.colors.gray[300]};
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.neonBlue};
  }
`;

const MenuButton = styled.button`
  color: ${props => props.theme.colors.gray[300]};
  display: block;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  background-color: ${props => props.theme.colors.cyberLight};
  display: block;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MobileNavLink = styled(Link)`
  display: block;
  font-family: ${props => props.theme.fonts.cyber};
  color: ${props => props.theme.colors.gray[300]};
  transition: color 0.3s;
  padding: 0.5rem 0;

  &:hover {
    color: ${props => props.theme.colors.neonBlue};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/programme', label: 'Programme' },
    { to: '/galerie', label: 'Galerie' },
    { to: '/billetterie', label: 'Billetterie' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <Logo to="/">KOF</Logo>

          <DesktopMenu>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </DesktopMenu>

          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </MenuButton>
        </NavContent>
      </NavContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <MobileMenuContent>
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
            </MobileMenuContent>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
