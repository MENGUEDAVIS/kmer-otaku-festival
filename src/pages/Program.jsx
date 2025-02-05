import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: ${props => props.theme.fonts.manga};
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.neonPink};
`;

const TabList = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.cyberLight};
  padding: 0.25rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  flex: 1;
  padding: 0.625rem;
  font-size: 0.875rem;
  font-family: ${props => props.theme.fonts.cyber};
  border-radius: 0.5rem;
  background-color: ${props => props.selected ? props.theme.colors.neonPurple : 'transparent'};
  color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.gray[400]};
  transition: all 0.3s;

  &:hover {
    color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.white};
  }
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EventCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cyberLight};
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 20px ${props => props.theme.colors.neonBlue}33;
  }
`;

const EventHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const EventInfo = styled.div``;

const EventTitle = styled.h3`
  font-size: 1.25rem;
  font-family: ${props => props.theme.fonts.cyber};
  color: ${props => props.theme.colors.white};
  margin-bottom: 0.5rem;
`;

const EventMeta = styled.p`
  color: ${props => props.theme.colors.gray[400]};
  margin-bottom: 0.5rem;
`;

const EventDescription = styled.p`
  color: ${props => props.theme.colors.gray[300]};
`;

const CategoryTag = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.cyber};
  background-color: ${props => {
    switch (props.category) {
      case 'événement': return props.theme.colors.neonPurple;
      case 'concours': return props.theme.colors.neonPink;
      case 'gaming': return props.theme.colors.neonBlue;
      case 'atelier': return '#22c55e';
      case 'concert': return '#eab308';
      default: return props.theme.colors.gray[400];
    }
  }};
`;

const Program = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  
  const days = ['Jour 1', 'Jour 2', 'Jour 3'];
  
  const schedule = {
    'Jour 1': [
      {
        time: '10:00',
        title: 'Cérémonie ouverture',
        location: 'Scène principale',
        category: 'événement',
        description: 'Lancement officiel du festival avec performance spéciale',
      },
      {
        time: '11:30',
        title: 'Concours Cosplay Amateur',
        location: 'Zone Cosplay',
        category: 'concours',
        description: 'Catégorie débutants et intermédiaires',
      },
      {
        time: '14:00',
        title: 'Tournoi Street Fighter 6',
        location: 'Espace Gaming',
        category: 'gaming',
        description: 'Inscriptions sur place, prix à gagner',
      },
    ],
    'Jour 2': [
      {
        time: '10:30',
        title: 'Atelier Manga',
        location: 'Salle Créative',
        category: 'atelier',
        description: 'Apprenez les bases du dessin manga',
      },
      {
        time: '13:00',
        title: 'Concert J-Pop/K-Pop',
        location: 'Scène principale',
        category: 'concert',
        description: 'Performances de groupes locaux',
      },
      {
        time: '16:00',
        title: 'Quiz Anime',
        location: 'Zone Challenge',
        category: 'concours',
        description: 'Testez vos connaissances !',
      },
    ],
    'Jour 3': [
      {
        time: '11:00',
        title: 'Défilé Cosplay Pro',
        location: 'Scène principale',
        category: 'concours',
        description: 'Compétition finale de cosplay',
      },
      {
        time: '14:30',
        title: 'Finale Gaming',
        location: 'Espace Gaming',
        category: 'gaming',
        description: 'Finales tous tournois',
      },
      {
        time: '17:00',
        title: 'Cérémonie de clôture',
        location: 'Scène principale',
        category: 'événement',
        description: 'Remise des prix et show final',
      },
    ],
  };

  return (
    <PageContainer>
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title>Programme du Festival</Title>

        <TabList>
          {days.map((day, index) => (
            <Tab
              key={day}
              selected={selectedDay === index}
              onClick={() => setSelectedDay(index)}
            >
              {day}
            </Tab>
          ))}
        </TabList>

        {days.map((day, index) => (
          <EventList key={index}>
            {schedule[day].map((event, eventIdx) => (
              <EventCard
                key={eventIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: eventIdx * 0.1 }}
              >
                <EventHeader>
                  <EventInfo>
                    <EventTitle>{event.title}</EventTitle>
                    <EventMeta>
                      {event.time} - {event.location}
                    </EventMeta>
                    <EventDescription>{event.description}</EventDescription>
                  </EventInfo>
                  <CategoryTag category={event.category}>
                    {event.category}
                  </CategoryTag>
                </EventHeader>
              </EventCard>
            ))}
          </EventList>
        ))}
      </ContentWrapper>
    </PageContainer>
  );
};

export default Program;
