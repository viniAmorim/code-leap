import styled from 'styled-components';

import { Input } from '~/Input/styles';

export const StyledLogo = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 37px;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 0px;
`;
