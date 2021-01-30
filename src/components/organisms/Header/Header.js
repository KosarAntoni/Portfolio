import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';
import Logo from '../../atoms/Logo/Logo';
import Link from '../../atoms/Link/Link';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import linkedinIcon from '../../../assets/icons/linkedin-in-brands.svg';
import facebookIcon from '../../../assets/icons/facebook-f-brands.svg';
import githubIcon from '../../../assets/icons/github-alt-brands.svg';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 7rem;
  padding: 1.5rem;
  z-index: 15;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    padding: 1.5rem 4.5rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const StyledLogo = styled(Logo)`
  position: relative;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  transition-delay: ${({ isMenuOpen }) => (!isMenuOpen && '1s')};

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    display: none;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 3rem;
  left: 3rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.background};
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport9}px) {
    top: -3rem;
    left: 50%
  }
`;

const NavContainer = styled(motion.nav)`
  position: absolute;
  top: 9rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    display: none;
  }
`;

const WideScreenNavContainer = styled(motion.nav)`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 1.5rem;
  margin-right: auto;
`;

const StyledWideScreenLink = styled(Link)`
  margin-left: 3rem;
`;

const StyledPhoneLink = styled(Link)`
  margin-top: 1.5rem;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  margin-top: 2.5rem;
`;

const MenuToggleWrapper = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <BackgroundContainer isMenuOpen={isMenuOpen}>
        <Background
          isMenuOpen={isMenuOpen}
          animate={isMenuOpen ? { scale: 350 } : { scale: 0 }}
          transition={isMenuOpen ? {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
          } : {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
          }}
        />
      </BackgroundContainer>

      <ContentContainer isMenuOpen={isMenuOpen}>
        <StyledLogo
          as={HashLink}
          to="/#"
          smooth
        />

        <WideScreenNavContainer>
          <StyledWideScreenLink
            as={HashLink}
            to="/catalog#"
          >
            Skills
          </StyledWideScreenLink>
          <StyledWideScreenLink
            as={HashLink}
            to="/home#testimonials"
            smooth
          >
            Projects
          </StyledWideScreenLink>
          <StyledWideScreenLink
            as={HashLink}
            to="#contact"
            smooth
          >
            Contact
          </StyledWideScreenLink>
        </WideScreenNavContainer>

        <MenuToggleWrapper>
          <MenuToggle isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </MenuToggleWrapper>

        <NavContainer
          initial={{ opacity: 0, visibility: 'hidden' }}
          animate={isMenuOpen ? { opacity: 1, visibility: 'visible' } : {
            opacity: 0,
            visibility: 'hidden',
          }}
          transition={isMenuOpen ? {
            type: 'spring',
            stiffness: 400,
            damping: 40,
            delay: 0.5,
          } : {
            type: 'spring',
            stiffness: 400,
            damping: 40,
          }}
        >
          <StyledLink
            smooth
            as={HashLink}
            to="/catalog#"
            big
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </StyledLink>
          <StyledLink
            smooth
            as={HashLink}
            to="/home#testimonials"
            big
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </StyledLink>
          <StyledLink
            smooth
            as={HashLink}
            to="#contact"
            big
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </StyledLink>
          <StyledPhoneLink big href="tel:+48574530406">
            +48 574-530-406
          </StyledPhoneLink>
          <StyledPhoneLink big href="mailto:kosarantoni@gmail.com">
            kosarantoni@gmail.com
          </StyledPhoneLink>
          <SocialLinksContainer>
            <SocialLink
              href="https://instagram.com/"
              target="_blank"
              icon={githubIcon}
            />
            <SocialLink
              href="https://www.fb.com/"
              target="_blank"
              icon={facebookIcon}
            />
            <SocialLink
              href="https://www.vk.com/"
              target="_blank"
              icon={linkedinIcon}
            />
          </SocialLinksContainer>
        </NavContainer>

      </ContentContainer>

    </Wrapper>
  );
};

export default Header;
