import { Button } from '@site/uikit';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: -webkit-flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 100%;
`;

export const StyledCol = styled(Col)`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 16px;
 
  margin: 200px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
  width: 100%;
`;