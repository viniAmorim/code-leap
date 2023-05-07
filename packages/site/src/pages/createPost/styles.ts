import styled from 'styled-components';

import { Heading, Button } from '@site/uikit';

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors['blue-100']};
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
  width: 100%;
`;