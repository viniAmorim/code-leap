import { Container, Row } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { Heading } from '~/Heading/styles';

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;

  margin-top: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
`;

export const WrapperHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
 
  background: ${({theme}) => theme.colors.primary};
  border-radius: 16px 16px 0 0;
`;

export const Title = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  padding-left: 10px;
  margin: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrapperButtons = styled.div`
  align-items: flex-end;
`;

export const WrapperCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;


  background: #fbfbfb;
  border: 1px solid #dbdddd;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Username = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color:${({ theme }) => theme.colors['gray-200']};
`;

export const HourPost = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  align-items: flex-end;

  color:${({ theme }) => theme.colors['gray-200']};
`;

export const Content = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  margin-top: 10px;

  color:${({ theme }) => theme.colors.black};
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
  width: 100%;
`;