import React, { BaseHTMLAttributes, forwardRef, ReactNode } from 'react';
import Loader from 'react-loader-spinner';

import { useTheme } from 'styled-components';

import * as Styled from './styles';

export interface ButtonProps
  extends BaseHTMLAttributes<HTMLButtonElement>,
    Styled.StyledButtonProps {
  /**
   * Left Icon
   */
  icon?: ReactNode;
  /**
   * Button content.
   */
  children: ReactNode;
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, Loading an animation on it and disable the button
   */
  isLoading?: boolean;
}

const Button = forwardRef<any, ButtonProps>(
  (
    { 
      icon,
      variant = 'solid',
      size = 'medium',
      children,
      disabled,
      isLoading,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const theme: any = useTheme();

    return (
      <Styled.Button
        ref={ref}
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        {...rest}
      >
        <Styled.IconWrapper>{icon}</Styled.IconWrapper>
        {children}
        {isLoading && (
          <Loader
            type="TailSpin"
            color={theme.colors['blue-400']}
            height={15}
            width={15}
          />
        )}
      </Styled.Button>
    );
  },
);

export default Button;
