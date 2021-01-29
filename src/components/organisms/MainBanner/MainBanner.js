import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  padding: 0 1.5rem;
  margin: 2rem 0;
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    padding: 0 4.5rem;
  }
`;

const Content = styled.div`
  max-width: 1170px;
  width: 100%;
  border-radius: 2rem;
  padding: 12rem 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  overflow: hidden;
  position: relative;
  user-select: none;
  
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ::after {
    display: block;
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 1.5rem;
    background: repeating-linear-gradient(
            45deg,
            #96deda,
            #96deda 10px,
            #50c9c3 10px,
            #50c9c3 20px
    );
  }
  
  ::before {
    display: block;
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    background: repeating-linear-gradient(
            45deg,
            #96deda,
            #96deda 10px,
            #50c9c3 10px,
            #50c9c3 20px
    );
  }

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    padding: 10rem 10rem;

    ::after {
      top: 0;
      right: 0;
      height: 100%;
      width: 2rem;
    }

    ::before {
      top: 0;
      left: 0;
      height: 100%;
      width: 2rem;
    }
  }
`;

const Container = styled.div`
  position: absolute;
  left: 18rem;
  top: 19.5rem;

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    left: 33rem;
    top: 21.5rem;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 7rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.secondary};

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    font-size: 10rem;
    line-height: 9rem;
  }
`;

const StyledSecondaryHeading = styled(Heading)`
  font-size: 3rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.secondary};
  font-family: 'Teko', sans-serif;
  font-weight: normal;

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    font-size: 4rem;
    line-height: 3rem;
  }
`;

const Dot = styled.span`
  color: #50c9c3;
`;

const MainBanner = () => (
  <Wrapper>
    <Content>
      <StyledHeading big>
        Hello
        <Dot>.</Dot>
      </StyledHeading>
      <StyledHeading big>I am</StyledHeading>
      <StyledHeading big>Anton</StyledHeading>
      <Container>
        <StyledSecondaryHeading>a front-end</StyledSecondaryHeading>
        <StyledSecondaryHeading>developer</StyledSecondaryHeading>
      </Container>
    </Content>
  </Wrapper>
);

export default MainBanner;
