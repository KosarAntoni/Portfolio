import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import animation from './animation';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Link from '../../atoms/Link/Link';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 40rem 2rem 2rem;
  z-index: 0;
  
  overflow: hidden;
`;

const LinksContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  
  align-self: flex-start;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.primary};

  :hover,
  :focus {
    color: ${({ theme }) => theme.secondary};
  }
}
`;

const Content = ({
  content,
  links,
}) => (
  <Wrapper
    layout
    transition={animation}
  >
    <Paragraph>{content}</Paragraph>
    <LinksContainer>
      <StyledLink big href={links.live}>Live</StyledLink>
      <StyledLink href={links.code}>Code</StyledLink>
    </LinksContainer>
  </Wrapper>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Content;
