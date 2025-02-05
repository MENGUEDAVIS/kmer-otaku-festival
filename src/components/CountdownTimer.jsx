import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.cyberLight};
  padding: 1rem;
  border-radius: 0.5rem;
  min-width: 100px;
`;

const TimeValue = styled.span`
  font-family: ${props => props.theme.fonts.cyber};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.neonBlue};
`;

const TimeLabel = styled.span`
  text-transform: uppercase;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray[300]};
`;

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TimerContainer>
      {Object.keys(timeLeft).map((interval) => (
        <TimeBlock key={interval}>
          <TimeValue>{timeLeft[interval]}</TimeValue>
          <TimeLabel>{interval}</TimeLabel>
        </TimeBlock>
      ))}
    </TimerContainer>
  );
};

export default CountdownTimer;
