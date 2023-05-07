import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 16px;
  width: calc(100%-16px);
`;
