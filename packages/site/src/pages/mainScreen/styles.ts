import { Col, Row } from 'react-grid-system';

import { Heading, Button } from '@site/uikit';
import styled from 'styled-components';

export const StyledRow = styled(Row)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;
  padding: 16px;
`;

export const StyledHeading = styled(Heading)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  margin-left: 24px;
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.black};
`;

export const Paragraph = styled.p`
  ${({ theme }) => theme.typography['body-default']};
  margin-top: 8px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors['blue-100']};
  ${({ theme }) => theme.typography['body-heavy']};
`;

export const ContentRow = styled(Row)`
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;

  padding-right: 24px;
  margin-top: 16px;
  width: 100%;
`;

export const CancelButton = styled(Button)`
  box-sizing: border-box;
  margin-right: 10px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray-500']};
  }
`;

export const DeleteButton = styled(Button)`
  background: ${({ theme }) => theme.colors.delete};
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.delete};

  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
    border-color: ${({ theme }) => theme.colors.delete};
  }
`;

export const SaveButton = styled(Button)`
  background: ${({ theme }) => theme.colors.save};
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.save};

  &:hover {
    background-color: ${({ theme }) => theme.colors.success};
    border-color: ${({ theme }) => theme.colors.success};
  }
`;

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
  margin: 10px 10px 10px 24px;
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
  margin-left: 24px;
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
  text-align: right;
  align-items: flex-end;

  margin-right: 24px;

  color:${({ theme }) => theme.colors['gray-200']};
`;

export const Content = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-top: 10px;

  margin-left: 24px;

  color:${({ theme }) => theme.colors.black};
`;

export const LoadingSpan = styled.span`
  margin-bottom: 20px;
  margin-left: -1000px;
`;