import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import CountdownTimer from '../components/CountdownTimer';

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, 
    ${props => props.theme.colors.neonPurple}33,
    ${props => props.theme.colors.neonBlue}33
  );
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 10;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.manga};
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.neonPink};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.neonBlue};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const ParticipateButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.neonPurple};
  color: ${props => props.theme.colors.white};
  border-radius: 9999px;
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.neonPink};
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.cyberLight};
`;

const FeaturesGrid = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 1.5rem;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.neonPink};
  }

  h3 {
    font-family: ${props => props.theme.fonts.cyber};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.white};
  }

  p {
    color: ${props => props.theme.colors.gray[300]};
  }
`;

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Title>K-mer Otaku Festival</Title>
          <Subtitle>L'événement manga & gaming N°1 au Cameroun</Subtitle>
          <CountdownTimer targetDate="2025-07-15" />
          <ParticipateButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Participer
          </ParticipateButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection ref={ref}>
        <FeaturesGrid
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>
    </div>
  );
};

const features = [
  {
    icon: "🎭",
    title: "Cosplay",
    description: "Concours et défilés de costumes avec des prix exceptionnels",
  },
  {
    icon: "🎮",
    title: "Gaming",
    description: "Tournois de jeux vidéo et espaces de free-play",
  },
  {
    icon: "🎤",
    title: "Karaoké",
    description: "Chantez vos openings préférés sur scène",
  },
];

export default Home;
