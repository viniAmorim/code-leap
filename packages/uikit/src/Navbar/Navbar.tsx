import React, { BaseHTMLAttributes } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import * as Styled from './styles';

export interface NavbarProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * Navbar
   */
}

const Navbar = ({ ...rest }: NavbarProps) => {
  return (
    <Styled.Container {...rest} suppressHydrationWarning>
      <Container>
        <Row align="center">
          <Col>
            <Styled.StyledLogo>CodeLeap Network</Styled.StyledLogo>
          </Col>
        </Row>
      </Container>
    </Styled.Container>
  );
};

export default Navbar;
