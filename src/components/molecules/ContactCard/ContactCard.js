import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Link from '../../atoms/Link/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  width: 100%;
  height: 100%;
  min-height: 34rem;

  ::after {
    top: 1rem;
    left: 1rem;
    position: absolute;
    height: calc(100% - 2rem);
    width: calc(100% - 2rem);
    display: block;
    content: '';
    border-radius: 1.5rem;
    z-index: -1;

    background: ${({ theme }) => theme.background}
  }

  ::before {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    content: '';
    z-index: -2;

    background: repeating-linear-gradient(
            45deg,
            #f9d423,
            #f9d423 10px,
            #1a212f 10px,
            #1a212f 20px
    );
  }
  
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledLink = styled(Link)`
  font-family: 'Teko', sans-serif;
  margin-top: 0.5rem;
  margin-right: auto;
`;

const ContactCard = () => (
  <Wrapper>
    <StyledHeading>Contact:</StyledHeading>
    <StyledLink big href="mailto:kosarantoni@gmail.com">
      kosarantoni@gmail.com
    </StyledLink>
    <StyledLink
      big
      href="tel:+48574530406"
    >
      +48574530406
    </StyledLink>
    <StyledLink
      big
      href="https://github.com/KosarAntoni"
      target="_blank"
    >
      GitHub
    </StyledLink>
    <StyledLink
      big
      href="https://www.facebook.com/anton.kosar.12/"
      target="_blank"
    >
      Facebook
    </StyledLink>
    <StyledLink
      big
      href="https://www.linkedin.com/in/anton-kosar-51a33617a"
      target="_blank"
    >
      LinkedIn
    </StyledLink>
  </Wrapper>
);

export default ContactCard;
