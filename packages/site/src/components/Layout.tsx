import React, { ReactNode } from 'react';

import { Navbar } from '@site/uikit';
import { useRouter } from 'next/router';

import { useDispatch } from "react-redux";

import { Button } from '@site/uikit';

import * as Styled from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Styled.Content>
      <Navbar>
        <Button 
          variant="ghost"  
          onClick={() => {
            dispatch({ type: 'logout'})
            router.push('/');
          }}>
          Logout
        </Button>
      </Navbar>
      <Styled.Container>{children}</Styled.Container>
    </Styled.Content>
  );
};

export default Layout;
