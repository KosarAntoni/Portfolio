import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  padding: 4rem 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  
  user-select: none;

  ::after {
    display: block;
    content: '';

    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1.5rem;
    background: repeating-linear-gradient(
            45deg,
            #ff4e50,
            #ff4e50 10px,
            #eef1f5 10px,
            #eef1f5 20px
    );
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.secondary};
  font-family: 'Teko', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const AuthorCard = () => (
  <Wrapper>
    <StyledParagraph>💻 Coded by</StyledParagraph>
    <StyledHeading>Anton Kosar</StyledHeading>
    <StyledParagraph>In Gdańsk ⚓️</StyledParagraph>
    <StyledParagraph>With ❤️</StyledParagraph>
  </Wrapper>
);

export default AuthorCard;
