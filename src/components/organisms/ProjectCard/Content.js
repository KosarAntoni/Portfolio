import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import animation from './animation';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import CardLink from '../../atoms/CardLink/CardLink';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  padding: 40rem 2rem 2rem;
  z-index: 0;
  
  overflow: hidden;
`;

const LinksContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  
  align-self: flex-start;
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
      <CardLink
        button
        href={links.live}
        target="_blank"
      >
        Live
      </CardLink>
      <CardLink
        href={links.code}
        target="_blank"
      >
        Code
      </CardLink>
    </LinksContainer>
  </Wrapper>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Content;
