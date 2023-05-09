import styled from 'styled-components';

import Heading from '../Heading';

export const HeadingContainer = styled.div`
  color: ${({ theme }) => theme.colors['blue-100']};
  margin-top: 24px;
  margin-bottom: 30px;
  margin-left: 24px;
`;

export const StyledHeading = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  color: #000000;
`;