import styled from 'styled-components';

import Heading from '../Heading';
import Button from '../Button';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};

  padding: 10px 0px;
`;

export const StyledLogo = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  margin-left: 37px; 

  color: ${({ theme }) => theme.colors.white};
  justify-content: flex-end;
  align-items: right;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors['blue-300']};
  }
`;
