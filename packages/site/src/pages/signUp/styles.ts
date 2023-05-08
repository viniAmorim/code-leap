import { Button } from '@site/uikit';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import { Heading } from '@site/uikit';

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: -webkit-flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const StyledCol = styled(Col)`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 16px;
 
  margin: 200px;
  padding: 30px;
`;

export const StyledHeading = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 24px;
  margin-left: 24px;
`;

export const StyledButton = styled(Button)`
  width: 111px;
  height: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;

  padding-right: 24px;
  margin-top: 16px;
  width: 100%;
`;