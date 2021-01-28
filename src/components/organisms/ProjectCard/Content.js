import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import animation from './animation';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import DevicesMockup from '../../molecules/DevicesMockup/DevicesMockup';
import Link from '../../atoms/Link/Link';

const Wrapper = styled(motion.div)`
  padding: 2rem;
  z-index: 0;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  color: ${({ theme }) => theme.background};
`;

const DevicesMockupWrapper = styled(motion.div)`
  transform: translate(${({ isOpen }) => (isOpen ? '0%, 0%' : '30%, -20%')});
  transition: all 0.3s;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;

const LinksContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.background};
  border-color: ${({ theme }) => theme.background};

  :hover,
  :focus {
    color: ${({ theme }) => theme.secondary};
  }
  
  ${({ big }) => big && css`
    :hover,
    :focus {
      background-color: ${({ theme }) => theme.background};
      border: 1px solid ${({ theme }) => theme.background};
    }`
}
`;

const Content = ({
  images,
  content,
  links,
  isOpen,
}) => (
  <Wrapper
    layout
    transition={animation}
  >
    <DevicesMockupWrapper
      layout
      transition={animation}
      isOpen={isOpen}
    >
      <DevicesMockup
        desktop={images.desktop}
        tablet={images.tablet}
        mobile={images.mobile}
        isOpen={isOpen}
      />
    </DevicesMockupWrapper>
    <Paragraph>{content}</Paragraph>
    <LinksContainer>
      <StyledLink big href={links.live}>Live</StyledLink>
      <StyledLink href={links.code}>Code</StyledLink>
    </LinksContainer>
  </Wrapper>
);

Content.propTypes = {
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool,
};

Content.defaultProps = {
  isOpen: false,
};

export default Content;
