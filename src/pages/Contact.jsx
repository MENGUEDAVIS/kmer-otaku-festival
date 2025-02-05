import { motion } from 'framer-motion';
import styled from 'styled-components';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.cyberLight};
  padding: 2rem;
  border-radius: 1rem;
`;

const InfoTitle = styled.h2`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.gray[300]};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.colors.neonBlue};
  }
`;

const Form = styled.form`
  background-color: ${props => props.theme.colors.cyberLight};
  padding: 2rem;
  border-radius: 1rem;
`;

const FormTitle = styled.h2`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.cyberDark};
  border: 1px solid ${props => props.theme.colors.gray[700]};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.cyber};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.neonBlue};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.neonBlue}33;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.neonPurple};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.cyber};
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.neonPink};
    transform: translateY(-2px);
    box-shadow: 0 0 20px ${props => props.theme.colors.neonPurple}66;
  }
`;

const Map = styled.div`
  margin-top: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique d'envoi du formulaire ici
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
  };

  return (
    <PageContainer>
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title>Contact</Title>

        <Grid>
          <ContactInfo>
            <InfoTitle>Informations de contact</InfoTitle>
            <InfoList>
              <InfoItem>
                <MapPinIcon />
                <div>
                  <p>Palais des Congrès</p>
                  <p>Yaoundé, Cameroun</p>
                </div>
              </InfoItem>
              <InfoItem>
                <PhoneIcon />
                <div>
                  <p>+237 123 456 789</p>
                  <p>+237 987 654 321</p>
                </div>
              </InfoItem>
              <InfoItem>
                <EnvelopeIcon />
                <div>
                  <p>contact@kmerotakufest.com</p>
                  <p>support@kmerotakufest.com</p>
                </div>
              </InfoItem>
            </InfoList>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            <FormTitle>Envoyez-nous un message</FormTitle>
            
            <FormGroup>
              <Label>Nom complet</Label>
              <Input type="text" required />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input type="email" required />
            </FormGroup>

            <FormGroup>
              <Label>Sujet</Label>
              <Input type="text" required />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea required />
            </FormGroup>

            <SubmitButton type="submit">
              Envoyer le message
            </SubmitButton>
          </Form>
        </Grid>

        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7731943321814!2d11.5167873!3d3.8666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7e563960a4c62fc3!2sPalais%20des%20Congr%C3%A8s%20de%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1675633124147!5m2!1sfr!2scm"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Map>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Contact;
