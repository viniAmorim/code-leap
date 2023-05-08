import styled from 'styled-components';

export type StyledFormControlProps = {
  isValid: boolean;
};

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const FormControlLabel = styled.label<StyledFormControlProps>`
  width: 199px;
  height: 19px;
  margin-bottom: 8px;

  margin-left: 24px;

  color: ${({ theme }) => theme.colors.black};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const FormControlError = styled.label`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 6px;
`;
