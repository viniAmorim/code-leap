import React, { BaseHTMLAttributes, ReactNode } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import * as Styled from './styles';

export interface NavbarProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * Navbar.
   */
  children: ReactNode;
}

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <Styled.Container {...rest}>
      <Container>
        <Row align="center">
          <Col>
            <Styled.StyledLogo>CodeLeap Network</Styled.StyledLogo>
          </Col>
          <Col>
            <Styled.StyledButton>
              {children}
            </Styled.StyledButton>
          </Col>
        </Row>
      </Container>
    </Styled.Container>
  );
};

export default Navbar;
