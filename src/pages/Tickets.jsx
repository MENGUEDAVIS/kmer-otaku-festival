import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CreditCardIcon, UserIcon, CalendarIcon } from '@heroicons/react/24/outline';

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

const TicketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TicketCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cyberLight};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, ${props => props.theme.colors.neonPurple}00, ${props => props.theme.colors.neonBlue}33);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const TicketType = styled.h2`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.neonBlue};
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const Feature = styled.li`
  color: ${props => props.theme.colors.gray[300]};
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`;

const BuyButton = styled.button`
  background-color: ${props => props.theme.colors.neonPurple};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.cyber};
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px ${props => props.theme.colors.neonPurple}66;
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.colors.cyberLight};
  border-radius: 1rem;
`;

const FormTitle = styled.h3`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: ${props => props.theme.fonts.cyber};
  color: ${props => props.theme.colors.gray[300]};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.cyberDark};
  border: 1px solid ${props => props.theme.colors.gray[700]};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.cyber};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.neonBlue};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.neonBlue}33;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.cyberDark};
  border: 1px solid ${props => props.theme.colors.gray[700]};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.cyber};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.neonBlue};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.neonBlue}33;
  }
`;

const SubmitButton = styled(BuyButton)`
  width: 100%;
  margin-top: 1rem;
`;

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      id: 'pass-1-jour',
      name: 'Pass 1 Jour',
      price: 5000,
      features: [
        'Accès à toutes les activités',
        'Un ticket boisson offert',
        'Badge exclusif',
      ],
      color: 'border-neon-blue',
      shadowColor: 'shadow-neon-blue/20',
    },
    {
      id: 'pass-weekend',
      name: 'Pass Week-end',
      price: 12000,
      features: [
        'Accès 3 jours',
        'T-shirt exclusif',
        'Accès prioritaire',
        'Meet & Greet avec invités',
      ],
      popular: true,
      color: 'border-neon-purple',
      shadowColor: 'shadow-neon-purple/20',
    },
    {
      id: 'pass-vip',
      name: 'Pass VIP',
      price: 25000,
      features: [
        'Accès 3 jours VIP',
        'Pack goodies collector',
        'Accès backstage',
        'Photo avec invités',
        'Place réservée concerts',
      ],
      color: 'border-neon-pink',
      shadowColor: 'shadow-neon-pink/20',
    },
  ];

  const handleTicketSelection = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <PageContainer>
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title>Billetterie</Title>

        <TicketGrid>
          {tickets.map((ticket, index) => (
            <TicketCard
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-cyber-light rounded-xl p-6 border-2 ${
                ticket.color
              } ${
                ticket.popular ? 'transform -translate-y-4' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neon-purple text-white px-4 py-1 rounded-full text-sm font-cyber">
                    Plus populaire
                  </span>
                </div>
              )}

              <TicketType>{ticket.name}</TicketType>
              <Price>{ticket.price.toLocaleString()} FCFA</Price>
              <FeatureList>
                {ticket.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>{feature}</Feature>
                ))}
              </FeatureList>
              <BuyButton onClick={() => handleTicketSelection(ticket)}>
                Acheter maintenant
              </BuyButton>
            </TicketCard>
          ))}
        </TicketGrid>

        {selectedTicket && (
          <Form>
            <FormTitle>Paiement - {selectedTicket.name}</FormTitle>
            
            <FormGroup>
              <Label>Nom complet</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input type="text" required />
              </div>
            </FormGroup>

            <FormGroup>
              <Label>Numéro de carte</Label>
              <div className="relative">
                <CreditCardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input type="text" required />
              </div>
            </FormGroup>

            <FormGroup>
              <Label>Date d'expiration</Label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input type="text" required />
              </div>
            </FormGroup>

            <FormGroup>
              <Label>CVC</Label>
              <Input type="text" required />
            </FormGroup>

            <SubmitButton type="submit">
              Payer {selectedTicket.price.toLocaleString()} FCFA
            </SubmitButton>
          </Form>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default Tickets;
