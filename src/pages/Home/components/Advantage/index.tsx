import { ReactElement } from 'react';
import { AdvantageContainer } from './styles';

interface AdvantageProps {
  color: string;
  icon: ReactElement;
  description: string;
}
export const Advantage = ({ color, icon, description }: AdvantageProps) => {
  return (
    <AdvantageContainer color={color}>
      <span>{icon}</span>
      <span>{description}</span>
    </AdvantageContainer>
  );
};
