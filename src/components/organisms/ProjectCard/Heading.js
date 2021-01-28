import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import IconHint from '../../atoms/IconHint/IconHint';
import animation from './animation';

const HeadingWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 6;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.background};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const TechnologiesContainer = styled.div`
  display: flex;
`;

const CardHeading = ({
  title, technologies,
}) => (
  <HeadingWrapper
    layout
    transition={animation}
  >
    <StyledHeading big>{title}</StyledHeading>
    <TechnologiesContainer>
      {technologies.map((i) => (
        <IconHint
          icon={i.icon}
          key={i.name}
        >
          {i.name}
        </IconHint>
      ))}
    </TechnologiesContainer>
  </HeadingWrapper>
);

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default CardHeading;
